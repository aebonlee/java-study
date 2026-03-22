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
              <span className="hero-progress-text">학습 진도 {progress}% ({completedLessons.length}/43)</span>
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
              <div className="stat-number">43</div>
              <div className="stat-label">학습 레슨</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-layer-group"></i></div>
              <div className="stat-number">3</div>
              <div className="stat-label">학습 과정</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-pen-nib"></i></div>
              <div className="stat-number">6</div>
              <div className="stat-label">단계별 퀴즈</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-trophy"></i></div>
              <div className="stat-number">33</div>
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
              <p>Java 기초 17챕터, 서블릿 10레슨, 스프링 16레슨으로 구성된 43개 레슨을 학습합니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-code"></i></div>
              <h3>코드 실행기</h3>
              <p>브라우저에서 바로 Java 코드를 작성하고 실행할 수 있는 실습 환경을 제공합니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-trophy"></i></div>
              <h3>도장깨기 (배지)</h3>
              <p>학습 목표를 달성하면 배지를 획득! 33개 배지를 모두 수집해보세요.</p>
              <Link to="/badges" className="feature-link">배지 확인하기 <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-server"></i></div>
              <h3>서블릿 과정</h3>
              <p>HTTP, 서블릿 생명주기부터 JSP, MVC 패턴, CRUD 게시판까지 실전 웹 개발을 배웁니다.</p>
              <Link to="/servlet" className="feature-link">서블릿 시작 <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-leaf"></i></div>
              <h3>스프링 과정</h3>
              <p>Spring Framework, Spring Boot, JPA, Security, Docker까지 현대적 백엔드를 완성합니다.</p>
              <Link to="/spring" className="feature-link">스프링 시작 <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-chart-line"></i></div>
              <h3>학습 진도 추적</h3>
              <p>완료한 레슨을 추적하고 전체 학습 진도를 한눈에 확인할 수 있습니다.</p>
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
            <p>3개 과정으로 Java 풀스택 개발자가 되세요</p>
          </div>
          <div className="path-grid">
            <div className="path-card">
              <div className="path-step">Course 1</div>
              <h3>Java 학습하기</h3>
              <p>기초 문법부터 객체지향, 제네릭, 람다, 스트림, 멀티스레드까지 Java의 모든 것을 익힙니다.</p>
              <div className="path-topics">
                <span className="path-topic">기초</span>
                <span className="path-topic">OOP</span>
                <span className="path-topic">고급</span>
                <span className="path-topic">웹 개발</span>
              </div>
            </div>
            <div className="path-card">
              <div className="path-step">Course 2</div>
              <h3>서블릿</h3>
              <p>HTTP 프로토콜, 서블릿, JSP, MVC 패턴으로 웹 개발의 기반을 다집니다.</p>
              <div className="path-topics">
                <span className="path-topic">HTTP</span>
                <span className="path-topic">서블릿</span>
                <span className="path-topic">JSP</span>
                <span className="path-topic">MVC</span>
              </div>
            </div>
            <div className="path-card">
              <div className="path-step">Course 3</div>
              <h3>스프링</h3>
              <p>Spring Framework부터 Boot, JPA, Security, Docker까지 현대적 백엔드를 완성합니다.</p>
              <div className="path-topics">
                <span className="path-topic">Spring</span>
                <span className="path-topic">Boot</span>
                <span className="path-topic">JPA</span>
                <span className="path-topic">배포</span>
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
