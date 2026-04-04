import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react'
import { supabase, isSupabaseEnabled, TABLES } from '../config/supabase'
import { useAuth } from './AuthContext'

interface QuizScore {
  bestScore: number
  attempts: { score: number; date: string }[]
}

interface ProgressData {
  completedLessons: string[]
  quizScores: Record<string, QuizScore>
  codeRuns: number
}

interface ProgressContextType {
  progress: ProgressData
  completedLessons: string[]
  quizScores: Record<string, QuizScore>
  codeRuns: number
  completeLesson: (lessonId: string) => void
  uncompleteLesson: (lessonId: string) => void
  isLessonCompleted: (lessonId: string) => boolean
  isLevelCompleted: (levelId: string) => boolean
  saveQuizScore: (quizId: string, score: number) => void
  incrementCodeRuns: () => void
  getTotalProgress: () => number
  getJavaProgress: () => number
  getServletProgress: () => number
  getSpringProgress: () => number
  getPracticalProgress: () => number
  getProjectProgress: () => number
  getQuizBestScore: (quizId: string) => number | undefined
  getQuizAttempts: (quizId: string) => any[]
}

const ProgressContext = createContext<ProgressContextType | null>(null)

const STORAGE_KEY = 'javamaster-progress'

function loadProgress(): ProgressData {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) as string)
    return data || { completedLessons: [], quizScores: {}, codeRuns: 0 }
  } catch {
    return { completedLessons: [], quizScores: {}, codeRuns: 0 }
  }
}

async function loadFromSupabase(userId: string) {
  if (!isSupabaseEnabled() || !userId) return null
  try {
    const { data: progressData } = await supabase
      .from(TABLES.PROGRESS)
      .select('completed_lessons, code_runs')
      .eq('user_id', userId)
      .single()

    const { data: quizData } = await supabase
      .from(TABLES.QUIZ_SCORES)
      .select('quiz_id, score, created_at')
      .eq('user_id', userId)

    const completedLessons = progressData?.completed_lessons || []
    const codeRuns = progressData?.code_runs || 0

    const quizScores: Record<string, QuizScore> = {}
    if (quizData) {
      for (const row of quizData) {
        if (!quizScores[row.quiz_id]) {
          quizScores[row.quiz_id] = { bestScore: 0, attempts: [] }
        }
        quizScores[row.quiz_id].bestScore = Math.max(quizScores[row.quiz_id].bestScore, row.score)
        quizScores[row.quiz_id].attempts.push({ score: row.score, date: row.created_at })
      }
    }

    return { completedLessons, quizScores, codeRuns }
  } catch (err) {
    console.error('Supabase 진도 로드 오류:', err)
    return null
  }
}

function mergeProgress(local: ProgressData, remote: ProgressData) {
  if (!remote) return local

  const mergedLessons = [...new Set([...local.completedLessons, ...remote.completedLessons])]
  const codeRuns = Math.max(local.codeRuns || 0, remote.codeRuns || 0)

  const mergedQuizScores: Record<string, QuizScore> = { ...local.quizScores }
  for (const [quizId, remoteData] of Object.entries(remote.quizScores)) {
    if (!mergedQuizScores[quizId]) {
      mergedQuizScores[quizId] = remoteData
    } else {
      const localAttempts = mergedQuizScores[quizId].attempts || []
      const remoteAttempts = remoteData.attempts || []
      const allDates = new Set(localAttempts.map(a => a.date))
      const newAttempts = remoteAttempts.filter(a => !allDates.has(a.date))
      const combined = [...localAttempts, ...newAttempts]
      mergedQuizScores[quizId] = {
        bestScore: Math.max(mergedQuizScores[quizId].bestScore, remoteData.bestScore),
        attempts: combined,
      }
    }
  }

  return { completedLessons: mergedLessons, quizScores: mergedQuizScores, codeRuns }
}

async function saveProgressToSupabase(userId: string, progress: ProgressData) {
  if (!isSupabaseEnabled() || !userId) return
  try {
    await supabase.from(TABLES.PROGRESS).upsert({
      user_id: userId,
      completed_lessons: progress.completedLessons,
      code_runs: progress.codeRuns,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' })
  } catch (err) {
    console.error('Supabase 진도 저장 오류:', err)
  }
}

async function saveQuizScoreToSupabase(userId: string, quizId: string, score: number) {
  if (!isSupabaseEnabled() || !userId) return
  try {
    await supabase.from(TABLES.QUIZ_SCORES).insert({
      user_id: userId,
      quiz_id: quizId,
      score,
    })
  } catch (err) {
    console.error('Supabase 퀴즈 점수 저장 오류:', err)
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [progress, setProgress] = useState<ProgressData>(loadProgress)
  const syncedUserRef = useRef<string | null>(null)

  // localStorage에 저장
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  // 로그인 시 Supabase에서 로드 → 병합
  useEffect(() => {
    if (!user || syncedUserRef.current === user.id) return
    syncedUserRef.current = user.id

    const syncFromSupabase = async () => {
      const remote = await loadFromSupabase(user.id)
      if (remote) {
        setProgress(prev => {
          const merged = mergeProgress(prev, remote)
          // 병합 후 Supabase에도 저장 (합집합 반영)
          saveProgressToSupabase(user.id, merged)
          return merged
        })
      } else {
        // Supabase에 데이터가 없으면 현재 로컬 데이터를 업로드
        saveProgressToSupabase(user.id, loadProgress())
      }
    }
    syncFromSupabase()
  }, [user])

  // 로그아웃 시 syncedUserRef 리셋
  useEffect(() => {
    if (!user) syncedUserRef.current = null
  }, [user])

  const completeLesson = useCallback((lessonId: string) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev
      const updated = { ...prev, completedLessons: [...prev.completedLessons, lessonId] }
      if (user) saveProgressToSupabase(user.id, updated)
      return updated
    })
  }, [user])

  const uncompleteLesson = useCallback((lessonId: string) => {
    setProgress(prev => {
      const updated = { ...prev, completedLessons: prev.completedLessons.filter(id => id !== lessonId) }
      if (user) saveProgressToSupabase(user.id, updated)
      return updated
    })
  }, [user])

  const saveQuizScore = useCallback((quizId: string, score: number) => {
    setProgress(prev => {
      const existing = prev.quizScores[quizId] || { bestScore: 0, attempts: [] }
      const updated = {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [quizId]: {
            bestScore: Math.max(existing.bestScore, score),
            attempts: [...existing.attempts, { score, date: new Date().toISOString() }]
          }
        }
      }
      if (user) saveQuizScoreToSupabase(user.id, quizId, score)
      return updated
    })
  }, [user])

  const incrementCodeRuns = useCallback(() => {
    setProgress(prev => {
      const updated = { ...prev, codeRuns: prev.codeRuns + 1 }
      if (user) saveProgressToSupabase(user.id, updated)
      return updated
    })
  }, [user])

  const isLessonCompleted = (lessonId: string) => progress.completedLessons.includes(lessonId)

  const isLevelCompleted = (levelId: string) => {
    const levelLessons: Record<string, string[]> = {
      basics: ['01', '02', '03', '04'],
      intermediate: ['05', '06', '07', '08'],
      advanced: ['09', '10', '11', '12'],
      web: ['13', '14', '15', '16', '17'],
      'servlet-basic': ['S01', 'S02', 'S03', 'S04', 'S05'],
      'servlet-advanced': ['S06', 'S07', 'S08', 'S09', 'S10'],
      'spring-framework': ['SP01', 'SP02', 'SP03', 'SP04', 'SP05', 'SP06', 'SP07', 'SP08'],
      'spring-boot': ['SP09', 'SP10', 'SP11', 'SP12', 'SP13', 'SP14', 'SP15', 'SP16'],
      'practical-tools': ['PR01', 'PR02', 'PR03'],
      'practical-data': ['PR04', 'PR05', 'PR06'],
      'practical-quality': ['PR07', 'PR08'],
      'practical-infra': ['PR09', 'PR10'],
      'project-basic': ['PJ01', 'PJ02'],
      'project-advanced': ['PJ03', 'PJ04'],
      'project-web': ['PJ05', 'PJ06'],
      'project-spring': ['PJ07', 'PJ08'],
    }
    const lessons = levelLessons[levelId]
    return lessons ? lessons.every(id => progress.completedLessons.includes(id)) : false
  }

  const getJavaProgress = () => {
    const javaIds = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17']
    const done = javaIds.filter(id => progress.completedLessons.includes(id)).length
    return Math.round((done / javaIds.length) * 100)
  }

  const getServletProgress = () => {
    const ids = ['S01','S02','S03','S04','S05','S06','S07','S08','S09','S10']
    const done = ids.filter(id => progress.completedLessons.includes(id)).length
    return Math.round((done / ids.length) * 100)
  }

  const getSpringProgress = () => {
    const ids = ['SP01','SP02','SP03','SP04','SP05','SP06','SP07','SP08','SP09','SP10','SP11','SP12','SP13','SP14','SP15','SP16']
    const done = ids.filter(id => progress.completedLessons.includes(id)).length
    return Math.round((done / ids.length) * 100)
  }

  const getPracticalProgress = () => {
    const ids = ['PR01','PR02','PR03','PR04','PR05','PR06','PR07','PR08','PR09','PR10']
    const done = ids.filter(id => progress.completedLessons.includes(id)).length
    return Math.round((done / ids.length) * 100)
  }

  const getTotalProgress = () => {
    const total = 53
    const completed = progress.completedLessons.filter(id =>
      /^(0[1-9]|1[0-7])$/.test(id) || /^S\d{2}$/.test(id) || /^SP\d{2}$/.test(id) || /^PR\d{2}$/.test(id)
    ).length
    return Math.round((completed / total) * 100)
  }

  const getProjectProgress = () => {
    const ids = ['PJ01','PJ02','PJ03','PJ04','PJ05','PJ06','PJ07','PJ08']
    const done = ids.filter(id => progress.completedLessons.includes(id)).length
    return Math.round((done / ids.length) * 100)
  }

  const getQuizBestScore = (quizId: string) => {
    return progress.quizScores[quizId]?.bestScore
  }

  const getQuizAttempts = (quizId: string) => {
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
      getJavaProgress,
      getServletProgress,
      getSpringProgress,
      getPracticalProgress,
      getProjectProgress,
      getQuizBestScore,
      getQuizAttempts
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context) throw new Error('useProgress must be used within ProgressProvider')
  return context
}
