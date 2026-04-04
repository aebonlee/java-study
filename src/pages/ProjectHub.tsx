import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'
import { projectLevels } from '../data/projects'

const difficultyLabel = {
  beginner: '입문',
  intermediate: '중급',
  advanced: '고급',
  expert: '전문가'
}

const difficultyColor = {
  beginner: '#10B981',
  intermediate: '#3B82F6',
  advanced: '#E76F00',
  expert: '#EF4444'
}

export default function ProjectHub() {
  const { isLessonCompleted, getProjectProgress } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const projectProgress = getProjectProgress()
  const totalProjects = 8
  const completedProjects = projectLevels.flatMap(l => l.projects).filter(p => isLessonCompleted(p.id)).length

  return (
    <main>
      <section className="page-header" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" style={{ color: 'rgba(255,255,255,0.8)' }}>홈</Link>
            <i className="fas fa-chevron-right" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}></i>
            <span style={{ color: '#fff' }}>프로젝트</span>
          </div>
          <h1 style={{ color: '#fff' }}>
            <i className="fas fa-project-diagram" style={{ marginRight: '12px' }}></i>
            프로젝트 허브
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)' }}>
            학습한 내용을 실전 프로젝트로 적용해보세요. 4개 레벨, 8개 프로젝트로 구성되어 있습니다.
          </p>
          {projectProgress > 0 && (
            <div style={{ marginTop: '16px', maxWidth: '400px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
                <span>프로젝트 진도</span>
                <span>{completedProjects}/{totalProjects} 완료</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '10px', height: '8px' }}>
                <div style={{ width: `${projectProgress}%`, background: '#fff', borderRadius: '10px', height: '100%', transition: 'width 0.5s ease' }}></div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="container" style={{ padding: '48px 20px' }}>
        {projectLevels.map((level, levelIdx) => (
          <div key={level.id} style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: level.color, display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <i className={`fas ${level.icon}`} style={{ color: '#fff', fontSize: '18px' }}></i>
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.4rem' }}>
                  Level {levelIdx + 1}. {level.title}
                </h2>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>{level.description}</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '20px' }}>
              {level.projects.map(project => {
                const completed = isLessonCompleted(project.id)
                return (
                  <Link
                    to={`/projects/${project.id.replace('PJ', '0').slice(-2)}`}
                    key={project.id}
                    style={{
                      textDecoration: 'none', color: 'inherit',
                      border: '1px solid var(--border-light)',
                      borderRadius: '12px', padding: '24px',
                      background: 'var(--card-bg)',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      position: 'relative', overflow: 'hidden'
                    }}
                    className="project-hub-card"
                  >
                    {completed && (
                      <div style={{
                        position: 'absolute', top: '12px', right: '12px',
                        background: '#10B981', color: '#fff', borderRadius: '20px',
                        padding: '4px 12px', fontSize: '12px', fontWeight: 600
                      }}>
                        <i className="fas fa-check" style={{ marginRight: '4px' }}></i> 완료
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <span style={{
                        background: level.color, color: '#fff',
                        borderRadius: '6px', padding: '2px 10px', fontSize: '13px', fontWeight: 600
                      }}>
                        {project.id}
                      </span>
                      <span style={{
                        background: difficultyColor[project.difficulty] + '20',
                        color: difficultyColor[project.difficulty],
                        borderRadius: '6px', padding: '2px 10px', fontSize: '12px', fontWeight: 500
                      }}>
                        {difficultyLabel[project.difficulty]}
                      </span>
                    </div>
                    <h3 style={{ margin: '0 0 8px', fontSize: '1.15rem' }}>{project.title}</h3>
                    <p style={{ margin: '0 0 16px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {project.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                      {project.tools.map(tool => (
                        <span key={tool} style={{
                          background: 'var(--bg-secondary)', borderRadius: '6px',
                          padding: '3px 8px', fontSize: '11px', color: 'var(--text-secondary)'
                        }}>
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      <i className="fas fa-book" style={{ marginRight: '4px' }}></i>
                      선수: {project.prerequisiteLabel}
                    </div>
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
