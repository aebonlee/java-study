import { Link } from 'react-router-dom'
import { useProgress } from '../contexts/ProgressContext'
import { useBadge } from '../contexts/BadgeContext'

export default function Home() {
  const { getTotalProgress, completedLessons } = useProgress()
  const { earnedBadges } = useBadge()
  const progress = getTotalProgress()

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="floating-code">public class Main {'{'}</div>
        <div className="floating-code">System.out.println("Hello");</div>
        <div className="floating-code">@SpringBootApplication</div>
        <div className="floating-code">interface Runnable {'{'}</div>

        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-fire"></i>
            2026 최신 커리큘럼
          </div>
          <h1>Java의 모든 것,<br /><span>JavaMaster</span>에서</h1>
          <p>
            Java 기초 문법부터 객체지향, 서블릿, Spring Boot까지.<br />
            체계적인 커리큘럼으로 Java 개발자가 되는 여정을 시작하세요.
          </p>
          <div className="hero-buttons">
            <Link to="/java-learning/01" className="btn btn-accent">
              <i className="fas fa-play"></i> 학습 시작하기
            </Link>
            <Link to="/java-learning" className="btn btn-outline">
              <i className="fas fa-book-open"></i> 커리큘럼 보기
            </Link>
          </div>
          {progress > 0 && (
            <div className="hero-progress">
              <div className="hero-progress-bar">
                <div className="hero-progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="hero-progress-text">학습 진도 {progress}% ({completedLessons.length}/17)</span>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-book"></i></div>
              <div className="stat-number">17</div>
              <div className="stat-label">학습 챕터</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-layer-group"></i></div>
              <div className="stat-number">4</div>
              <div className="stat-label">학습 단계</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-pen-nib"></i></div>
              <div className="stat-number">4</div>
              <div className="stat-label">단계별 퀴즈</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-trophy"></i></div>
              <div className="stat-number">24</div>
              <div className="stat-label">달성 배지</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>왜 JavaMaster인가요?</h2>
            <p>실무 중심의 체계적인 Java 학습 경험을 제공합니다</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-graduation-cap"></i></div>
              <h3>체계적 커리큘럼</h3>
              <p>기초부터 Spring Boot까지 단계별로 설계된 17개 챕터로 빈틈없이 학습합니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-pen-nib"></i></div>
              <h3>단계별 퀴즈</h3>
              <p>각 단계를 마치면 퀴즈로 실력을 점검하고, 합격 기준을 달성하세요.</p>
              <Link to="/quiz" className="feature-link">퀴즈 풀러 가기 <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-trophy"></i></div>
              <h3>도장깨기 (배지)</h3>
              <p>학습 목표를 달성하면 배지를 획득! 24개 배지를 모두 수집해보세요.</p>
              <Link to="/badges" className="feature-link">배지 확인하기 <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-server"></i></div>
              <h3>웹 개발 완성</h3>
              <p>Servlet, JSP, Spring Framework, Spring Boot까지 웹 개발의 전체 과정을 다룹니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-moon"></i></div>
              <h3>다크 모드</h3>
              <p>눈의 피로를 줄이는 다크 모드를 지원하여 편안한 학습 환경을 제공합니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-chart-line"></i></div>
              <h3>학습 진도 추적</h3>
              <p>완료한 챕터를 추적하고 전체 학습 진도를 한눈에 확인할 수 있습니다.</p>
              <Link to="/my" className="feature-link">마이페이지 <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="path-section">
        <div className="container">
          <div className="section-header">
            <h2>학습 로드맵</h2>
            <p>4단계 학습 과정으로 Java 전문가가 되세요</p>
          </div>
          <div className="path-grid">
            <div className="path-card">
              <div className="path-step">Step 1</div>
              <h3>기초</h3>
              <p>Java 설치부터 변수, 자료형, 제어문, 배열까지 프로그래밍의 기본을 익힙니다.</p>
              <div className="path-topics">
                <span className="path-topic">환경설정</span>
                <span className="path-topic">변수</span>
                <span className="path-topic">제어문</span>
                <span className="path-topic">배열</span>
              </div>
            </div>
            <div className="path-card">
              <div className="path-step">Step 2</div>
              <h3>객체지향</h3>
              <p>클래스, 상속, 다형성, 인터페이스 등 OOP의 핵심 개념을 깊이 학습합니다.</p>
              <div className="path-topics">
                <span className="path-topic">클래스</span>
                <span className="path-topic">상속</span>
                <span className="path-topic">인터페이스</span>
                <span className="path-topic">컬렉션</span>
              </div>
            </div>
            <div className="path-card">
              <div className="path-step">Step 3</div>
              <h3>고급 Java</h3>
              <p>제네릭, 람다, 스트림, 멀티스레드 등 모던 Java의 핵심 기능을 배웁니다.</p>
              <div className="path-topics">
                <span className="path-topic">제네릭</span>
                <span className="path-topic">람다</span>
                <span className="path-topic">스트림</span>
                <span className="path-topic">스레드</span>
              </div>
            </div>
            <div className="path-card">
              <div className="path-step">Step 4</div>
              <h3>웹 개발</h3>
              <p>Servlet, JSP부터 Spring Framework, Spring Boot까지 웹 개발을 완성합니다.</p>
              <div className="path-topics">
                <span className="path-topic">서블릿</span>
                <span className="path-topic">JSP</span>
                <span className="path-topic">Spring</span>
                <span className="path-topic">Boot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>지금 바로 Java 학습을 시작하세요</h2>
          <p>모든 학습 콘텐츠는 무료로 제공됩니다</p>
          <div className="cta-buttons">
            <Link to="/java-learning/01" className="btn btn-accent btn-lg">
              <i className="fas fa-rocket"></i> 첫 번째 챕터 시작
            </Link>
            <Link to="/guide" className="btn btn-outline btn-lg">
              <i className="fas fa-book"></i> 이용 가이드
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
