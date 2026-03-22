import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { badges } from '../data/badges'
import { useProgress } from './ProgressContext'

const BadgeContext = createContext()

const STORAGE_KEY = 'javamaster-badges'

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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(earnedBadges))
  }, [earnedBadges])

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
        case 'all_quizzes_passed':
          earned = ['basics', 'intermediate', 'advanced', 'web'].every(id => {
            const bs = getQuizBestScore(id)
            return bs !== undefined && bs >= 70
          })
          break
        case 'all_quizzes_perfect':
          earned = ['basics', 'intermediate', 'advanced', 'web'].every(id =>
            getQuizBestScore(id) === 100
          )
          break
        case 'code_runs':
          earned = codeRuns >= condition.count
          break
        case 'all_completed':
          earned = ['basics', 'intermediate', 'advanced', 'web'].every(id => isLevelCompleted(id))
          break
        case 'specific_lessons':
          earned = condition.lessons.every(id => completedLessons.includes(id))
          break
        case 'java_master':
          earned = ['basics', 'intermediate', 'advanced', 'web'].every(id => isLevelCompleted(id)) &&
            ['basics', 'intermediate', 'advanced', 'web'].every(id => {
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
    }
  }, [completedLessons, quizScores, codeRuns, earnedBadges, isLevelCompleted, getQuizBestScore])

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
