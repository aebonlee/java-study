import { Link } from 'react-router-dom'
import { springLevels } from '../data/springLessons'
import { useProgress } from '../contexts/ProgressContext'

export default function SpringLearning() {
  const { isLessonCompleted, getSpringProgress } = useProgress()
  const progress = getSpringProgress()

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize: '10px'}}></i>
            <span>스프링 과정</span>
          </div>
          <h1>스프링 학습 과정</h1>
          <p>Spring Framework부터 Spring Boot, JPA, Security까지 (80시간)</p>
          <div style={{marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{flex: 1, maxWidth: '300px', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', overflow: 'hidden'}}>
              <div style={{height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #A7F3D0, #6DB33F)', borderRadius: '4px', transition: 'width 0.6s ease'}}></div>
            </div>
            <span style={{fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)'}}>{progress}% 완료</span>
          </div>
        </div>
      </div>

      <div className="container" style={{padding: '60px 24px 80px'}}>
        {springLevels.map(level => (
          <div key={level.id} style={{marginBottom: '60px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
              <i className={`fas ${level.icon}`} style={{fontSize: '24px', color: level.color}}></i>
              <h2 style={{fontSize: '1.5rem', fontWeight: 800}}>{level.title}</h2>
            </div>
            <p style={{color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem'}}>{level.description}</p>

            <div className="learning-hub-grid">
              {level.lessons.map(lesson => {
                const num = lesson.id.replace('SP', '')
                return (
                  <Link
                    key={lesson.id}
                    to={`/spring/${num}`}
                    className="learning-hub-card"
                    style={isLessonCompleted(lesson.id) ? {borderColor: 'var(--success)'} : {}}
                  >
                    <div className="lesson-num">{num}</div>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.desc}</p>
                    <span className={`level-label difficulty-${lesson.difficulty}`}>
                      {lesson.difficulty === 'beginner' ? '입문' :
                       lesson.difficulty === 'intermediate' ? '중급' :
                       lesson.difficulty === 'advanced' ? '고급' : '전문가'}
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
