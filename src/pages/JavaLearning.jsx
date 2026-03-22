import { Link } from 'react-router-dom'
import { levels } from '../data/lessons'
import { servletLevels } from '../data/servletLessons'
import { springLevels } from '../data/springLessons'
import { practicalLevels } from '../data/practicalLessons'
import { projectLevels } from '../data/projects'
import { useProgress } from '../contexts/ProgressContext'

const courses = [
  { key: 'java', label: 'Java 학습하기', icon: 'fa-java fab', color: '#5382A1', levels: levels, getRoute: (id) => `/java-learning/${id}`, getNum: (id) => id },
  { key: 'servlet', label: '서블릿', icon: 'fa-server fas', color: '#E76F00', levels: servletLevels, getRoute: (id) => `/servlet/${id.replace('S', '')}`, getNum: (id) => id.replace('S', '') },
  { key: 'spring', label: '스프링', icon: 'fa-leaf fas', color: '#6DB33F', levels: springLevels, getRoute: (id) => `/spring/${id.replace('SP', '')}`, getNum: (id) => id.replace('SP', '') },
  { key: 'practical', label: '실무 Java', icon: 'fa-toolbox fas', color: '#8B5CF6', levels: practicalLevels, getRoute: (id) => `/practical/${id.replace('PR', '')}`, getNum: (id) => id.replace('PR', '') },
  { key: 'project', label: '프로젝트', icon: 'fa-diagram-project fas', color: '#3B82F6', levels: projectLevels, getRoute: (id) => `/projects/${id.replace('PJ', '').padStart(2, '0')}`, getNum: (id) => id.replace('PJ', ''), isProject: true },
]

export default function JavaLearning() {
  const { isLessonCompleted, getTotalProgress } = useProgress()
  const progress = getTotalProgress()

  const getItems = (level) => level.lessons || level.projects || []
  const totalLessons = courses.reduce((sum, c) => sum + c.levels.reduce((s, l) => s + getItems(l).length, 0), 0)

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize: '10px'}}></i>
            <span>전체 커리큘럼</span>
          </div>
          <h1>전체 커리큘럼</h1>
          <p>Java 기초부터 Spring Boot, 실무, 프로젝트까지 — {totalLessons}개 학습 콘텐츠</p>
          <div style={{marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div style={{flex: 1, maxWidth: '300px', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', overflow: 'hidden'}}>
              <div style={{height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #FFD43B, #E76F00)', borderRadius: '4px', transition: 'width 0.6s ease'}}></div>
            </div>
            <span style={{fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)'}}>{progress}% 완료</span>
          </div>
        </div>
      </div>

      <div className="container" style={{padding: '48px 24px 80px'}}>
        {courses.map(course => (
          <div key={course.key} style={{marginBottom: '56px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px', paddingBottom: '12px', borderBottom: `3px solid ${course.color}`}}>
              <i className={course.icon} style={{fontSize: '22px', color: course.color}}></i>
              <h2 style={{fontSize: '1.35rem', fontWeight: 800}}>{course.label}</h2>
              <span style={{fontSize: '0.8rem', color: 'var(--text-light)', marginLeft: '4px'}}>
                ({course.levels.reduce((s, l) => s + getItems(l).length, 0)}개)
              </span>
            </div>

            {course.levels.map(level => (
              <div key={level.id} style={{marginBottom: '40px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px'}}>
                  <i className={`fas ${level.icon}`} style={{fontSize: '18px', color: level.color}}></i>
                  <h3 style={{fontSize: '1.1rem', fontWeight: 700}}>{level.title}</h3>
                </div>
                <p style={{color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.9rem'}}>{level.description}</p>

                <div className="learning-hub-grid">
                  {getItems(level).map(item => (
                    <Link
                      key={item.id}
                      to={course.getRoute(item.id)}
                      className="learning-hub-card"
                      style={isLessonCompleted(item.id) ? {borderColor: 'var(--success)'} : {}}
                    >
                      <div className="lesson-num">{course.getNum(item.id)}</div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <span className={`level-label difficulty-${item.difficulty}`}>
                        {item.difficulty === 'beginner' ? '입문' :
                         item.difficulty === 'intermediate' ? '중급' :
                         item.difficulty === 'advanced' ? '고급' : '전문가'}
                      </span>
                      {isLessonCompleted(item.id) && (
                        <span style={{position: 'absolute', top: '12px', right: '12px', color: 'var(--success)', fontSize: '18px'}}>
                          <i className="fas fa-check-circle"></i>
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}
