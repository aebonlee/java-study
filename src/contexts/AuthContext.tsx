import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'
import { ADMIN_EMAILS } from '../config/admin'
import { useIdleTimeout } from '../hooks/useIdleTimeout';

interface AccountBlock {
  status: string
  reason: string
  suspended_until: string | null
}

interface AuthContextType {
  user: any
  loading: boolean
  accountBlock: AccountBlock | null
  clearAccountBlock: () => void
  signInWithGoogle: () => Promise<void>
  signInWithKakao: () => Promise<void>
  signUpWithEmail: (email: string, password: string, name: string) => Promise<{ error: string | null }>
  signInWithEmail: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  isAuthenticated: boolean
  isAdmin: boolean
  isTeacher: boolean
  sessionTimeLeft: number | null
  showSessionWarning: boolean
  extendSession: () => void
  requireAuth: (callback: () => void) => void
  showLoginModal: boolean
  dismissLoginModal: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

const SESSION_DURATION = 30 * 60 * 1000 // 30분
const WARNING_THRESHOLD = 5 * 60 * 1000 // 5분
const SESSION_EXPIRY_KEY = 'javamaster-session-expiry'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sessionTimeLeft, setSessionTimeLeft] = useState<number | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [modalTab, setModalTab] = useState('login')
  const [modalEmail, setModalEmail] = useState('')
  const [modalPassword, setModalPassword] = useState('')
  const [modalName, setModalName] = useState('')
  const [modalError, setModalError] = useState('')
  const [modalLoading, setModalLoading] = useState(false)
  const [accountBlock, setAccountBlock] = useState<AccountBlock | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pendingActionRef = useRef<(() => void) | null>(null)

  const clearAccountBlock = () => setAccountBlock(null)

  const getSessionExpiry = () => {
    try {
      const val = localStorage.getItem(SESSION_EXPIRY_KEY)
      return val ? parseInt(val, 10) : null
    } catch { return null }
  }

  const setSessionExpiry = (expiry: number | null) => {
    if (expiry) {
      localStorage.setItem(SESSION_EXPIRY_KEY, String(expiry))
    } else {
      localStorage.removeItem(SESSION_EXPIRY_KEY)
    }
  }

  const clearSessionTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setSessionTimeLeft(null)
    setSessionExpiry(null)
  }, [])

  const doSignOut = useCallback(async () => {
    clearSessionTimer()
    if (isSupabaseEnabled()) {
      await supabase.auth.signOut()
    }
  }, [clearSessionTimer])

  const startSessionTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      const expiry = getSessionExpiry()
      if (!expiry) return
      const left = expiry - Date.now()
      if (left <= 0) {
        doSignOut()
      } else {
        setSessionTimeLeft(left)
      }
    }, 1000)
  }, [doSignOut])

  const extendSession = useCallback(() => {
    const newExpiry = Date.now() + SESSION_DURATION
    setSessionExpiry(newExpiry)
    setSessionTimeLeft(SESSION_DURATION)
  }, [])

  const upsertUser = useCallback(async (u: any) => {
    if (!isSupabaseEnabled() || !u) return
    try {
      await supabase.from(TABLES.USERS).upsert({
        id: u.id,
        email: u.email,
        name: u.user_metadata?.full_name || u.user_metadata?.name,
        avatar_url: u.user_metadata?.avatar_url,
        provider: u.app_metadata?.provider,
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' })

      const { data } = await supabase
        .from(TABLES.USERS)
        .select('role')
        .eq('id', u.id)
        .single()
      setUserRole(data?.role || 'student')

      // signup_domain / visited_sites 자동 처리 (user_profiles 공유 테이블)
      const currentDomain = window.location.hostname
      const { data: upData } = await supabase
        .from('user_profiles')
        .select('signup_domain, visited_sites')
        .eq('id', u.id)
        .single()
      if (upData) {
        const updates: Record<string, any> = {}
        if (!(upData as any).signup_domain) updates.signup_domain = currentDomain
        const sites = Array.isArray((upData as any).visited_sites) ? (upData as any).visited_sites : []
        if (!sites.includes(currentDomain)) {
          updates.visited_sites = [...sites, currentDomain]
        }
        if (Object.keys(updates).length > 0) {
          supabase.from('user_profiles').update(updates).eq('id', u.id).then(() => {})
        }
      }

      // 계정 상태 체크
      try {
        const { data: statusData } = await supabase.rpc('check_user_status', {
          target_user_id: u.id,
          current_domain: currentDomain,
        })
        if (statusData && statusData.status && statusData.status !== 'active') {
          setAccountBlock({
            status: statusData.status,
            reason: statusData.reason || '',
            suspended_until: statusData.suspended_until || null,
          })
          await supabase.auth.signOut()
          setUser(null)
          return
        }
      } catch {
        // check_user_status 함수 미존재 시 무시
      }
    } catch (err) {
      console.error('사용자 정보 저장 오류:', err)
      setUserRole('student')
    }
  }, [])

  useEffect(() => {
    if (!isSupabaseEnabled()) {
      console.warn('Supabase가 설정되지 않았습니다. VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 확인하세요.')
      setLoading(false)
      return
    }

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const u = session?.user ?? null
      setUser(u)
      if (u) {
        const existingExpiry = getSessionExpiry()
        if (existingExpiry && existingExpiry > Date.now()) {
          setSessionTimeLeft(existingExpiry - Date.now())
        } else {
          const newExpiry = Date.now() + SESSION_DURATION
          setSessionExpiry(newExpiry)
          setSessionTimeLeft(SESSION_DURATION)
        }
        startSessionTimer()
        await upsertUser(u)
      }
      setLoading(false)
    }).catch((err) => {
      console.error('세션 확인 오류:', err)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const u = session?.user ?? null
      setUser(u)
      if (u) {
        const newExpiry = Date.now() + SESSION_DURATION
        setSessionExpiry(newExpiry)
        setSessionTimeLeft(SESSION_DURATION)
        startSessionTimer()
        upsertUser(u)
        if (event === 'SIGNED_IN') {
          supabase.from('user_profiles')
            .update({ last_sign_in_at: new Date().toISOString() })
            .eq('id', u.id)
            .then(() => {})
        }
        if (pendingActionRef.current) {
          const action = pendingActionRef.current
          pendingActionRef.current = null
          setShowLoginModal(false)
          setTimeout(() => action(), 100)
        }
      } else {
        clearSessionTimer()
        setUserRole(null)
      }
    })

    return () => {
      subscription.unsubscribe()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const signInWithGoogle = async () => {
    if (!isSupabaseEnabled()) return
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    })
    if (error) console.error('Google 로그인 오류:', error.message)
  }

  const signInWithKakao = async () => {
    if (!isSupabaseEnabled()) return
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: { redirectTo: window.location.origin },
    })
    if (error) console.error('Kakao 로그인 오류:', error.message)
  }

  const signUpWithEmail = async (email: string, password: string, name: string) => {
    if (!isSupabaseEnabled()) return { error: '서버 연결이 설정되지 않았습니다.' }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    })
    if (error) return { error: error.message }
    return { error: null }
  }

  const signInWithEmail = async (email: string, password: string) => {
    if (!isSupabaseEnabled()) return { error: '서버 연결이 설정되지 않았습니다.' }
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return { error: error.message }
    return { error: null }
  }

  const signOut = doSignOut

  const requireAuth = useCallback((callback: () => void) => {
    if (user) {
      callback()
    } else {
      pendingActionRef.current = callback
      setShowLoginModal(true)
    }
  }, [user])

  const dismissLoginModal = useCallback(() => {
    setShowLoginModal(false)
    pendingActionRef.current = null
    setModalTab('login')
    setModalEmail('')
    setModalPassword('')
    setModalName('')
    setModalError('')
    setModalLoading(false)
  }, [])

  const isAdmin = ADMIN_EMAILS.includes(user?.email)
  const isTeacher = userRole === 'teacher'
  const showSessionWarning = sessionTimeLeft !== null && sessionTimeLeft <= WARNING_THRESHOLD && sessionTimeLeft > 0

  const formatTimeLeft = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const value: AuthContextType = {
    user,
    loading,
    accountBlock,
    clearAccountBlock,
    signInWithGoogle,
    signInWithKakao,
    signUpWithEmail,
    signInWithEmail,
    signOut,
    isAuthenticated: !!user,
    isAdmin,
    isTeacher,
    sessionTimeLeft,
    showSessionWarning,
    extendSession,
    requireAuth,
    showLoginModal,
    dismissLoginModal,
  }


  // 10분 무동작 세션 타임아웃
  useIdleTimeout({
  enabled: !!user,
  onTimeout: () => {
  doSignOut();
  },
  });

  return (
    <AuthContext.Provider value={value}>
      {children}
      {showSessionWarning && (
        <div className="session-warning">
          <div className="session-warning-content">
            <i className="fa-solid fa-clock" />
            <span>세션이 <strong>{formatTimeLeft(sessionTimeLeft!)}</strong> 후 만료됩니다</span>
            <button className="session-extend-btn" onClick={extendSession}>
              <i className="fa-solid fa-rotate-right" /> 연장하기
            </button>
          </div>
        </div>
      )}
      {showLoginModal && (
        <div className="login-modal-overlay" onClick={dismissLoginModal}>
          <div className="login-modal" onClick={e => e.stopPropagation()}>
            <button className="login-modal-close" onClick={dismissLoginModal}>
              <i className="fa-solid fa-xmark" />
            </button>
            <div className="login-modal-header">
              <div className="login-modal-icon">
                <i className="fa-solid fa-lock" />
              </div>
              <h2>로그인하고 계속하기</h2>
              <p>이 기능을 사용하려면 로그인이 필요합니다</p>
            </div>
            <div className="login-tabs">
              <button className={`login-tab ${modalTab === 'login' ? 'active' : ''}`} onClick={() => { setModalTab('login'); setModalError('') }}>로그인</button>
              <button className={`login-tab ${modalTab === 'signup' ? 'active' : ''}`} onClick={() => { setModalTab('signup'); setModalError('') }}>회원가입</button>
            </div>
            <form className="login-form" onSubmit={async (e) => {
              e.preventDefault()
              setModalError('')
              setModalLoading(true)
              if (modalTab === 'signup') {
                if (!modalName.trim()) { setModalError('이름을 입력하세요'); setModalLoading(false); return }
                const { error } = await signUpWithEmail(modalEmail, modalPassword, modalName)
                if (error) { setModalError(error); setModalLoading(false); return }
                setModalError('')
                setModalTab('login')
                setModalLoading(false)
                alert('가입 완료! 이메일을 확인한 후 로그인하세요.')
              } else {
                const { error } = await signInWithEmail(modalEmail, modalPassword)
                if (error) { setModalError(error); setModalLoading(false); return }
                setModalLoading(false)
              }
            }}>
              {modalTab === 'signup' && (
                <input className="login-input" type="text" placeholder="이름" value={modalName} onChange={e => setModalName(e.target.value)} />
              )}
              <input className="login-input" type="email" placeholder="이메일" value={modalEmail} onChange={e => setModalEmail(e.target.value)} required />
              <input className="login-input" type="password" placeholder="비밀번호 (6자 이상)" value={modalPassword} onChange={e => setModalPassword(e.target.value)} required minLength={6} />
              {modalError && <div className="login-error"><i className="fa-solid fa-circle-exclamation" /> {modalError}</div>}
              <button className="login-submit-btn" type="submit" disabled={modalLoading}>
                {modalLoading ? '처리 중...' : modalTab === 'login' ? '로그인' : '회원가입'}
              </button>
            </form>
            <div className="login-divider"><span>또는</span></div>
            <div className="login-modal-buttons">
              <button className="login-btn google-btn" onClick={signInWithGoogle}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google로 로그인
              </button>
              <button className="login-btn kakao-btn" onClick={signInWithKakao}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#3C1E1E">
                  <path d="M12 3C6.48 3 2 6.36 2 10.44c0 2.62 1.75 4.93 4.38 6.24l-1.12 4.16c-.1.35.3.64.6.44l4.97-3.27c.38.03.77.05 1.17.05 5.52 0 10-3.36 10-7.5S17.52 3 12 3z"/>
                </svg>
                Kakao로 로그인
              </button>
            </div>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
