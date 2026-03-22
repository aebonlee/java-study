import { useProgress } from '../contexts/ProgressContext'
import { useBadge } from '../contexts/BadgeContext'
import { quizzes } from '../data/quizzes'
import { badges } from '../data/badges'
import { levels } from '../data/lessons'
import { servletLevels } from '../data/servletLessons'
import { springLevels } from '../data/springLessons'
import BadgeCard from '../components/BadgeCard'

function formatDate(dateStr) {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  return `${String(d.getFullYear()).slice(2)}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}

export default function MyPage() {
  const {
    completedLessons, quizScores, codeRuns,
    getTotalProgress, getQuizBestScore, getQuizAttempts, isLevelCompleted
  } = useProgress()
  const { earnedBadges } = useBadge()

  const allLevels = [...levels, ...servletLevels, ...springLevels]
  const totalLessons = allLevels.reduce((sum, level) => sum + level.lessons.length, 0)
  const completedCount = completedLessons.length
  const totalProgress = getTotalProgress()
  const earnedBadgeData = badges.filter(b => earnedBadges.includes(b.id))

  const quizList = Object.entries(quizzes).map(([id, quiz]) => {
    const bestScore = getQuizBestScore(id)
    const attempts = getQuizAttempts(id)
    const passed = bestScore !== undefined && bestScore >= (quiz.passingScore || 70)
    return { id, title: quiz.title, bestScore, attempts, passed, passingScore: quiz.passingScore || 70 }
  })

  const quizAttempted = quizList.filter(q => q.bestScore !== undefined)
  const quizAvg = quizAttempted.length > 0
    ? Math.round(quizAttempted.reduce((s, q) => s + q.bestScore, 0) / quizAttempted.length) : 0

  const levelLabels = {
    basics: '기초', intermediate: '중급 (OOP)', advanced: '고급', web: '웹 개발',
    'servlet-basic': '서블릿 기초', 'servlet-advanced': '서블릿 고급',
    'spring-framework': 'Spring Framework', 'spring-boot': 'Spring Boot'
  }

  const certTypes = [
    { type: 'bronze', label: '기초 수료증', emoji: '🥉', levels: ['basics'], quizIds: ['basics'] },
    { type: 'silver', label: '중급 수료증', emoji: '🥈', levels: ['basics', 'intermediate'], quizIds: ['basics', 'intermediate'] },
    { type: 'gold', label: '고급 수료증', emoji: '🥇', levels: ['basics', 'intermediate', 'advanced'], quizIds: ['basics', 'intermediate', 'advanced'] },
    { type: 'servlet', label: '서블릿 수료증', emoji: '🛡️', levels: ['servlet-basic', 'servlet-advanced'], quizIds: ['servlet'] },
    { type: 'spring', label: 'Spring 수료증', emoji: '🍃', levels: ['spring-framework', 'spring-boot'], quizIds: ['spring'] },
    { type: 'master', label: 'Java Master', emoji: '🏆', levels: ['basics', 'intermediate', 'advanced', 'web', 'servlet-basic', 'servlet-advanced', 'spring-framework', 'spring-boot'], quizIds: ['basics', 'intermediate', 'advanced', 'web', 'servlet', 'spring'] },
  ]

  const getCertStatus = (cert) => {
    const levelsDone = cert.levels.filter(l => isLevelCompleted(l))
    const quizzesPassed = cert.quizIds.filter(q => {
      const bs = getQuizBestScore(q)
      return bs !== undefined && bs >= 70
    })
    const total = cert.levels.length + cert.quizIds.length
    const met = levelsDone.length + quizzesPassed.length
    return {
      earned: met === total,
      met, total,
      missingLevels: cert.levels.filter(l => !isLevelCompleted(l)),
      missingQuizzes: cert.quizIds.filter(q => {
        const bs = getQuizBestScore(q)
        return !(bs !== undefined && bs >= 70)
      })
    }
  }

  return (
    <div className="mypage">
      <section className="mypage-header">
        <div className="container">
          <div className="page-header-title-row">
            <span className="page-header-icon"><i className="fas fa-user-circle"></i></span>
            <div>
              <h1>마이페이지</h1>
              <p>학습 현황과 성과를 한눈에 확인하세요</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Profile Card */}
        <section className="profile-card">
          <div className="profile-avatar">J</div>
          <div className="profile-info">
            <h2>Java 학습자</h2>
            <p>JavaMaster와 함께 Java를 학습하고 있습니다</p>
          </div>
        </section>

        {/* Learning Stats */}
        <section className="mypage-section">
          <h2 className="mypage-section-title"><i className="fas fa-chart-line"></i> 학습 통계</h2>
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-icon-wrap" style={{ background: 'rgba(83,130,161,0.12)', color: '#5382A1' }}>
                <i className="fas fa-book-open"></i>
              </div>
              <div className="stat-val">{completedCount}<span className="stat-unit">/{totalLessons}</span></div>
              <div className="stat-lbl">완료한 레슨</div>
              <div className="stat-bar"><div className="stat-bar-fill" style={{ width: `${totalProgress}%`, background: '#5382A1' }} /></div>
            </div>
            <div className="stat-box">
              <div className="stat-icon-wrap" style={{ background: 'rgba(231,111,0,0.12)', color: '#E76F00' }}>
                <i className="fas fa-trophy"></i>
              </div>
              <div className="stat-val">{quizAvg}<span className="stat-unit">점</span></div>
              <div className="stat-lbl">퀴즈 평균 점수</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon-wrap" style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981' }}>
                <i className="fas fa-play"></i>
              </div>
              <div className="stat-val">{codeRuns}<span className="stat-unit">회</span></div>
              <div className="stat-lbl">코드 실행 횟수</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon-wrap" style={{ background: 'rgba(168,85,247,0.12)', color: '#a855f7' }}>
                <i className="fas fa-medal"></i>
              </div>
              <div className="stat-val">{earnedBadgeData.length}<span className="stat-unit">개</span></div>
              <div className="stat-lbl">획득 배지</div>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="mypage-section">
          <h2 className="mypage-section-title"><i className="fas fa-scroll"></i> 수료증</h2>
          <div className="cert-grid">
            {certTypes.map(cert => {
              const status = getCertStatus(cert)
              return (
                <div key={cert.type} className={`cert-card cert-card--${cert.type} ${status.earned ? 'earned' : 'locked'}`}>
                  <div className="cert-card-emoji">{cert.emoji}</div>
                  <div className="cert-card-label">{cert.label}</div>
                  {status.earned ? (
                    <div className="cert-card-status earned"><i className="fas fa-circle-check"></i> 획득!</div>
                  ) : (
                    <>
                      <div className="cert-card-status locked"><i className="fas fa-lock"></i> {status.met}/{status.total} 조건</div>
                      <div className="cert-progress"><div className="cert-progress-bar" style={{ width: `${Math.round(status.met / status.total * 100)}%` }} /></div>
                      <div className="cert-card-missing">
                        {status.missingLevels.map(l => (
                          <span key={l} className="cert-missing-tag level">{levelLabels[l]} 완료 필요</span>
                        ))}
                        {status.missingQuizzes.map(q => (
                          <span key={q} className="cert-missing-tag quiz">{quizzes[q]?.title || q} 통과 필요</span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Level Progress */}
        <section className="mypage-section">
          <h2 className="mypage-section-title"><i className="fas fa-layer-group"></i> 단계별 진도</h2>
          <div className="progress-section">
            {allLevels.map(level => {
              const completed = level.lessons.filter(l => completedLessons.includes(l.id)).length
              const pct = Math.round((completed / level.lessons.length) * 100)
              return (
                <div key={level.id} className="progress-item">
                  <div className="progress-label">
                    <span><i className={`fas ${level.icon}`} style={{ color: level.color, marginRight: 8 }}></i> {level.title}</span>
                    <span>{completed}/{level.lessons.length} ({pct}%)</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${pct}%`, background: level.color }} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Earned Badges */}
        <section className="mypage-section">
          <h2 className="mypage-section-title">
            <i className="fas fa-medal"></i> 획득한 배지
            <span className="mypage-badge-count">{earnedBadgeData.length}개</span>
          </h2>
          {earnedBadgeData.length > 0 ? (
            <div className="badge-grid">
              {earnedBadgeData.map(badge => <BadgeCard key={badge.id} badge={badge} />)}
            </div>
          ) : (
            <div className="mypage-empty">
              <i className="fas fa-lock"></i>
              <p>아직 획득한 배지가 없습니다. 학습을 시작하면 배지를 획득할 수 있어요!</p>
            </div>
          )}
        </section>

        {/* Quiz Scores */}
        <section className="mypage-section">
          <h2 className="mypage-section-title"><i className="fas fa-clipboard-check"></i> 퀴즈 성적표</h2>
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
                {quizList.map(q => {
                  const recent3 = q.attempts.slice(-3)
                  const firstDate = q.attempts.length > 0 ? q.attempts[0].date : null
                  const lastDate = q.attempts.length > 0 ? q.attempts[q.attempts.length - 1].date : null
                  return (
                    <tr key={q.id}>
                      <td className="quiz-name-cell">{q.title}</td>
                      {[0, 1, 2].map(i => (
                        <td key={i} className="quiz-attempt-cell">
                          {recent3[i] ? (
                            <span className={`quiz-attempt-score ${recent3[i].score >= q.passingScore ? 'passed' : 'failed'}`}>
                              {recent3[i].score}점
                            </span>
                          ) : <span className="quiz-attempt-score none">-</span>}
                        </td>
                      ))}
                      <td className="quiz-status-cell">
                        {q.bestScore === undefined ? (
                          <span className="quiz-status not-taken">미응시</span>
                        ) : q.passed ? (
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
        </section>
      </div>
    </div>
  )
}
