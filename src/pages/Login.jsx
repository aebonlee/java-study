import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useEffect, useState } from 'react'
import { isSupabaseEnabled } from '../config/supabase'

export default function Login() {
  const { signInWithGoogle, signInWithKakao, signUpWithEmail, signInWithEmail, isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState(null)
  const [tab, setTab] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  const handleGoogleLogin = async () => {
    setLoginError(null)
    if (!isSupabaseEnabled()) {
      setLoginError('서버 연결이 설정되지 않았습니다. 관리자에게 문의하세요.')
      return
    }
    await signInWithGoogle()
  }

  const handleKakaoLogin = async () => {
    setLoginError(null)
    if (!isSupabaseEnabled()) {
      setLoginError('서버 연결이 설정되지 않았습니다. 관리자에게 문의하세요.')
      return
    }
    await signInWithKakao()
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setLoginError(null)
    if (!isSupabaseEnabled()) {
      setLoginError('서버 연결이 설정되지 않았습니다. 관리자에게 문의하세요.')
      return
    }
    setSubmitting(true)
    if (tab === 'signup') {
      if (!name.trim()) { setLoginError('이름을 입력하세요'); setSubmitting(false); return }
      const { error } = await signUpWithEmail(email, password, name)
      if (error) { setLoginError(error); setSubmitting(false); return }
      setTab('login')
      setSubmitting(false)
      alert('가입 완료! 이메일을 확인한 후 로그인하세요.')
    } else {
      const { error } = await signInWithEmail(email, password)
      if (error) { setLoginError(error); setSubmitting(false); return }
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="login-page">
        <div className="login-card" style={{ display: 'flex', justifyContent: 'center', padding: '60px 40px' }}>
          <div className="loading-spinner-small" style={{ width: 32, height: 32, borderWidth: 3, borderColor: 'rgba(83,130,161,0.2)', borderTopColor: '#5382A1' }} />
        </div>
      </div>
    )
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>
            <span className="brand-java">Java</span>
            <span className="brand-master">Master</span>
          </h1>
          <p>Java 학습 플랫폼에 로그인하세요</p>
        </div>

        <div className="login-tabs">
          <button className={`login-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => { setTab('login'); setLoginError(null) }}>로그인</button>
          <button className={`login-tab ${tab === 'signup' ? 'active' : ''}`} onClick={() => { setTab('signup'); setLoginError(null) }}>회원가입</button>
        </div>

        <form className="login-form" onSubmit={handleEmailSubmit}>
          {tab === 'signup' && (
            <input className="login-input" type="text" placeholder="이름" value={name} onChange={e => setName(e.target.value)} />
          )}
          <input className="login-input" type="email" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} required />
          <input className="login-input" type="password" placeholder="비밀번호 (6자 이상)" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
          {loginError && (
            <div className="login-error">
              <i className="fa-solid fa-circle-exclamation" /> {loginError}
            </div>
          )}
          <button className="login-submit-btn" type="submit" disabled={submitting}>
            {submitting ? '처리 중...' : tab === 'login' ? '로그인' : '회원가입'}
          </button>
        </form>

        <div className="login-divider"><span>또는</span></div>

        <div className="login-buttons">
          <button className="login-btn google-btn" onClick={handleGoogleLogin}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google로 로그인
          </button>

          <button className="login-btn kakao-btn" onClick={handleKakaoLogin}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.724 1.8 5.112 4.508 6.459-.196.735-.712 2.665-.815 3.079-.128.514.189.507.396.369.163-.108 2.593-1.76 3.648-2.476.735.108 1.494.165 2.263.165 5.523 0 10-3.463 10-7.596C22 6.463 17.523 3 12 3z" fill="#3C1E1E"/>
            </svg>
            Kakao로 로그인
          </button>
        </div>

        <div className="login-footer">
          <p>커뮤니티, 학습 기록 저장 등의 기능을 이용하려면 로그인이 필요합니다</p>
        </div>
      </div>
    </div>
  )
}
