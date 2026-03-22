import { Link } from 'react-router-dom'
import { practicalLevels } from '../data/practicalLessons'
import { useProgress } from '../contexts/ProgressContext'

export default function PracticalLearning() {
  const { isLessonCompleted, getPracticalProgress } = useProgress()
  const progress = getPracticalProgress()

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize: '10px'}}></i>
            <span>실무 Java</span>
          </div>
          <h1>실무 Java 과정</h1>
          <p>IntelliJ, Git, SQL, 클린코드, Linux 등 실무 필수 기술을 학습합니다 (30시간)</p>
          <div style={{marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{flex: 1, maxWidth: '300px', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', overflow: 'hidden'}}>
              <div style={{height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #8B5CF6, #EC4899)', borderRadius: '4px', transition: 'width 0.6s ease'}}></div>
            </div>
            <span style={{fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)'}}>{progress}% 완료</span>
          </div>
        </div>
      </div>

      <div className="container" style={{padding: '60px 24px 80px'}}>
        {practicalLevels.map(level => (
          <div key={level.id} style={{marginBottom: '60px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
              <i className={`fas ${level.icon}`} style={{fontSize: '24px', color: level.color}}></i>
              <h2 style={{fontSize: '1.5rem', fontWeight: 800}}>{level.title}</h2>
            </div>
            <p style={{color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem'}}>{level.description}</p>

            <div className="learning-hub-grid">
              {level.lessons.map(lesson => {
                const num = lesson.id.replace('PR', '')
                return (
                  <Link
                    key={lesson.id}
                    to={`/practical/${num}`}
                    className="learning-hub-card"
                    style={isLessonCompleted(lesson.id) ? {borderColor: 'var(--success)'} : {}}
                  >
                    <div className="lesson-num">{num}</div>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.desc}</p>
                    <span className={`level-label difficulty-${lesson.difficulty}`}>
                      {lesson.difficulty === 'beginner' ? '입문' :
                       lesson.difficulty === 'intermediate' ? '중급' : '고급'}
                    </span>
                    {isLessonCompleted(lesson.id) && (
                      <span style={{position: 'absolute', top: '12px', right: '12px', color: 'var(--success)', fontSize: '18px'}}>
                        <i className="fas fa-check-circle"></i>
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
