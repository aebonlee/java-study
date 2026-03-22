import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { badges } from '../data/badges'
import { useProgress } from './ProgressContext'
import { useAuth } from './AuthContext'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'

const BadgeContext = createContext()

const STORAGE_KEY = 'javamaster-badges'

async function loadBadgesFromSupabase(userId) {
  if (!isSupabaseEnabled() || !userId) return null
  try {
    const { data } = await supabase
      .from(TABLES.BADGES)
      .select('badge_id')
      .eq('user_id', userId)
    return data ? data.map(row => row.badge_id) : null
  } catch (err) {
    console.error('Supabase 배지 로드 오류:', err)
    return null
  }
}

async function saveBadgeToSupabase(userId, badgeId) {
  if (!isSupabaseEnabled() || !userId) return
  try {
    await supabase.from(TABLES.BADGES).upsert({
      user_id: userId,
      badge_id: badgeId,
    }, { onConflict: 'user_id,badge_id' })
  } catch (err) {
    console.error('Supabase 배지 저장 오류:', err)
  }
}

export function BadgeProvider({ children }) {
  const [earnedBadges, setEarnedBadges] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch { return [] }
  })
  const [newBadge, setNewBadge] = useState(null)

  const {
    completedLessons, quizScores, codeRuns,
    isLevelCompleted, getQuizBestScore
  } = useProgress()

  const { user } = useAuth()
  const syncedUserRef = useRef(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(earnedBadges))
  }, [earnedBadges])

  // 로그인 시 Supabase에서 배지 로드 → 병합
  useEffect(() => {
    if (!user || syncedUserRef.current === user.id) return
    syncedUserRef.current = user.id

    const syncBadges = async () => {
      const remoteBadges = await loadBadgesFromSupabase(user.id)
      if (remoteBadges) {
        setEarnedBadges(prev => {
          const merged = [...new Set([...prev, ...remoteBadges])]
          // 로컬에만 있는 배지를 Supabase에 저장
          const localOnly = prev.filter(id => !remoteBadges.includes(id))
          for (const badgeId of localOnly) {
            saveBadgeToSupabase(user.id, badgeId)
          }
          return merged
        })
      } else {
        // Supabase에 데이터 없으면 로컬 배지 업로드
        const local = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        for (const badgeId of local) {
          saveBadgeToSupabase(user.id, badgeId)
        }
      }
    }
    syncBadges()
  }, [user])

  // 로그아웃 시 syncedUserRef 리셋
  useEffect(() => {
    if (!user) syncedUserRef.current = null
  }, [user])

  useEffect(() => {
    const newlyEarned = []

    for (const badge of badges) {
      if (earnedBadges.includes(badge.id)) continue

      const { condition } = badge
      let earned = false

      switch (condition.type) {
        case 'lessons_completed':
          earned = completedLessons.length >= condition.count
          break
        case 'level_completed':
          earned = isLevelCompleted(condition.level)
          break
        case 'quiz_passed': {
          const bs = getQuizBestScore(condition.quizId)
          earned = bs !== undefined && bs >= condition.minScore
          break
        }
        case 'quiz_perfect':
          earned = getQuizBestScore(condition.quizId) === 100
          break
        case 'multi_level_completed':
          earned = condition.levels.every(id => isLevelCompleted(id))
          break
        case 'all_quizzes_passed':
          earned = ['basics', 'intermediate', 'advanced', 'web', 'servlet', 'spring', 'practical'].every(id => {
            const bs = getQuizBestScore(id)
            return bs !== undefined && bs >= 70
          })
          break
        case 'all_quizzes_perfect':
          earned = ['basics', 'intermediate', 'advanced', 'web', 'servlet', 'spring', 'practical'].every(id =>
            getQuizBestScore(id) === 100
          )
          break
        case 'code_runs':
          earned = codeRuns >= condition.count
          break
        case 'all_completed':
          earned = ['basics', 'intermediate', 'advanced', 'web', 'servlet-basic', 'servlet-advanced', 'spring-framework', 'spring-boot', 'practical-tools', 'practical-data', 'practical-quality', 'practical-infra'].every(id => isLevelCompleted(id))
          break
        case 'specific_lessons':
          earned = condition.lessons.every(id => completedLessons.includes(id))
          break
        case 'java_master':
          earned = ['basics', 'intermediate', 'advanced', 'web', 'servlet-basic', 'servlet-advanced', 'spring-framework', 'spring-boot', 'practical-tools', 'practical-data', 'practical-quality', 'practical-infra'].every(id => isLevelCompleted(id)) &&
            ['basics', 'intermediate', 'advanced', 'web', 'servlet', 'spring', 'practical'].every(id => {
              const bs = getQuizBestScore(id)
              return bs !== undefined && bs >= 70
            })
          break
        default:
          break
      }

      if (earned) newlyEarned.push(badge.id)
    }

    if (newlyEarned.length > 0) {
      setEarnedBadges(prev => [...prev, ...newlyEarned])
      const badgeData = badges.find(b => b.id === newlyEarned[0])
      if (badgeData) setNewBadge(badgeData)

      // 로그인 상태면 Supabase에 저장
      if (user) {
        for (const badgeId of newlyEarned) {
          saveBadgeToSupabase(user.id, badgeId)
        }
      }
    }
  }, [completedLessons, quizScores, codeRuns, earnedBadges, isLevelCompleted, getQuizBestScore, user])

  const dismissBadgeNotification = useCallback(() => {
    setNewBadge(null)
  }, [])

  return (
    <BadgeContext.Provider value={{ earnedBadges, newBadge, dismissBadgeNotification }}>
      {children}
      {newBadge && (
        <div className="badge-notification" onClick={dismissBadgeNotification}>
          <div className="badge-notification-content">
            <div className="badge-notification-icon">{newBadge.icon}</div>
            <div className="badge-notification-text">
              <span className="badge-notification-label">새 배지 획득!</span>
              <span className="badge-notification-title">{newBadge.title}</span>
              <span className="badge-notification-desc">{newBadge.description}</span>
            </div>
          </div>
        </div>
      )}
    </BadgeContext.Provider>
  )
}

export function useBadge() {
  const context = useContext(BadgeContext)
  if (!context) throw new Error('useBadge must be used within BadgeProvider')
  return context
}
