import { useState, useCallback } from 'react'
import { quizzes } from '../data/quizzes'
import { useProgress } from '../contexts/ProgressContext'
import QuizComponent from '../components/QuizComponent'

const quizMeta = {
  basics: { icon: 'fas fa-seedling' },
  intermediate: { icon: 'fas fa-code' },
  advanced: { icon: 'fas fa-rocket' },
  web: { icon: 'fas fa-globe' },
  servlet: { icon: 'fas fa-server' },
  spring: { icon: 'fas fa-leaf' },
  practical: { icon: 'fas fa-toolbox' }
}

function formatDate(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  return `${String(d.getFullYear()).slice(2)}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export default function QuizCenter() {
  const [activeQuiz, setActiveQuiz] = useState(null)
  const { getQuizBestScore, getQuizAttempts } = useProgress()
  const handleQuizComplete = useCallback(() => {}, [])

  const quizList = Object.entries(quizzes).map(([key, quiz]: [string, any]) => ({
    id: key,
    ...quiz,
    meta: (quizMeta as any)[key]
  }))

  if (activeQuiz) {
    const quiz = quizzes[activeQuiz]
    return (
      <div className="quiz-page">
        <section className="page-header quiz-header">
          <div className="container">
            <button className="back-btn" onClick={() => setActiveQuiz(null)}>
              <i className="fas fa-chevron-left"></i> 퀴즈 목록
            </button>
            <h1>{quiz.title}</h1>
            <p>{quiz.description}</p>
          </div>
        </section>
        <div className="container quiz-content-wrapper">
          <QuizComponent quiz={quiz} quizId={activeQuiz} onComplete={handleQuizComplete} />
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-page">
      <section className="page-header quiz-header">
        <div className="container">
          <div className="page-header-title-row">
            <span className="page-header-icon"><i className="fas fa-pen-nib"></i></span>
            <div>
              <h1>퀴즈 센터</h1>
              <p>각 단계별 퀴즈를 풀고 실력을 확인하세요</p>
            </div>
          </div>
        </div>
      </section>

      <section className="quiz-list-section">
        <div className="container">
          <div className="quiz-cards-grid">
            {quizList.map(quiz => {
              const bestScore = getQuizBestScore(quiz.id)
              const passed = bestScore !== undefined && bestScore >= quiz.passingScore
              return (
                <div key={quiz.id} className="quiz-card" onClick={() => setActiveQuiz(quiz.id)}>
                  <div className="quiz-card-header">
                    <span className="quiz-card-icon">
                      <i className={quiz.meta?.icon || 'fas fa-file-lines'}></i>
                    </span>
                    <h3>{quiz.title}</h3>
                  </div>
                  <div className="quiz-card-body">
                    <p>{quiz.description}</p>
                    <div className="quiz-card-meta">
                      <span><i className="fas fa-file-lines"></i> {quiz.questions.length}문제</span>
                      <span><i className="fas fa-clock"></i> {Math.floor(quiz.timeLimit / 60)}분</span>
                      <span><i className="fas fa-circle-check"></i> {quiz.passingScore}점 이상</span>
                    </div>
                    {bestScore !== undefined && (
                      <div className={`quiz-card-score ${passed ? 'passed' : 'failed'}`}>
                        최고점: {bestScore}점 {passed
                          ? <><i className="fas fa-check"></i> 합격</>
                          : <><i className="fas fa-xmark"></i> 불합격</>}
                      </div>
                    )}
                  </div>
                  <div className="quiz-card-action">
                    <span className="btn btn-primary btn-sm">
                      {bestScore !== undefined ? '다시 풀기' : '시작하기'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="quiz-history-section">
        <div className="container">
          <h2 className="quiz-history-title">
            <i className="fas fa-clipboard-list"></i> 퀴즈 이력
          </h2>
          <div className="quiz-history-table-wrap">
            <table className="quiz-history-table">
              <thead>
                <tr>
                  <th>퀴즈명</th>
                  <th>1차</th>
                  <th>2차</th>
                  <th>3차</th>
                  <th>최종 상태</th>
                  <th>최초 응시</th>
                  <th>최근 응시</th>
                </tr>
              </thead>
              <tbody>
                {quizList.map(quiz => {
                  const attempts = getQuizAttempts(quiz.id)
                  const bestScore = getQuizBestScore(quiz.id)
                  const recent3 = attempts.slice(-3)
                  const passed = bestScore !== undefined && bestScore >= quiz.passingScore
                  const firstDate = attempts.length > 0 ? attempts[0].date : null
                  const lastDate = attempts.length > 0 ? attempts[attempts.length - 1].date : null
                  return (
                    <tr key={quiz.id}>
                      <td className="quiz-name-cell">{quiz.title}</td>
                      {[0, 1, 2].map(i => (
                        <td key={i} className="quiz-attempt-cell">
                          {recent3[i] ? (
                            <span className={`quiz-attempt-score ${recent3[i].score >= quiz.passingScore ? 'passed' : 'failed'}`}>
                              {recent3[i].score}점
                            </span>
                          ) : (
                            <span className="quiz-attempt-score none">-</span>
                          )}
                        </td>
                      ))}
                      <td className="quiz-status-cell">
                        {bestScore === undefined ? (
                          <span className="quiz-status not-taken">미응시</span>
                        ) : passed ? (
                          <span className="quiz-status pass"><i className="fas fa-circle-check"></i> 합격</span>
                        ) : (
                          <span className="quiz-status fail"><i className="fas fa-circle-xmark"></i> 불합격</span>
                        )}
                      </td>
                      <td className="quiz-date-cell">{formatDate(firstDate)}</td>
                      <td className="quiz-date-cell">{formatDate(lastDate)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
