import { createContext, useContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

const STORAGE_KEY = 'javamaster-progress'

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return data || { completedLessons: [], quizScores: {}, codeRuns: 0 }
  } catch {
    return { completedLessons: [], quizScores: {}, codeRuns: 0 }
  }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const completeLesson = (lessonId) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId]
    }))
  }

  const uncompleteLesson = (lessonId) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.filter(id => id !== lessonId)
    }))
  }

  const saveQuizScore = (quizId, score) => {
    setProgress(prev => {
      const existing = prev.quizScores[quizId] || { bestScore: 0, attempts: [] }
      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [quizId]: {
            bestScore: Math.max(existing.bestScore, score),
            attempts: [...existing.attempts, { score, date: new Date().toISOString() }]
          }
        }
      }
    })
  }

  const incrementCodeRuns = () => {
    setProgress(prev => ({ ...prev, codeRuns: prev.codeRuns + 1 }))
  }

  const isLessonCompleted = (lessonId) => progress.completedLessons.includes(lessonId)

  const isLevelCompleted = (levelId) => {
    const levelLessons = {
      basics: ['01', '02', '03', '04'],
      intermediate: ['05', '06', '07', '08'],
      advanced: ['09', '10', '11', '12'],
      web: ['13', '14', '15', '16', '17']
    }
    const lessons = levelLessons[levelId]
    return lessons ? lessons.every(id => progress.completedLessons.includes(id)) : false
  }

  const getTotalProgress = () => {
    const total = 17
    return Math.round((progress.completedLessons.length / total) * 100)
  }

  const getQuizBestScore = (quizId) => {
    return progress.quizScores[quizId]?.bestScore
  }

  const getQuizAttempts = (quizId) => {
    return progress.quizScores[quizId]?.attempts || []
  }

  return (
    <ProgressContext.Provider value={{
      progress,
      completedLessons: progress.completedLessons,
      quizScores: progress.quizScores,
      codeRuns: progress.codeRuns,
      completeLesson,
      uncompleteLesson,
      isLessonCompleted,
      isLevelCompleted,
      saveQuizScore,
      incrementCodeRuns,
      getTotalProgress,
      getQuizBestScore,
      getQuizAttempts
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export const useProgress = () => useContext(ProgressContext)
