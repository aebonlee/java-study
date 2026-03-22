import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>
                <span className="logo-icon">J</span>
                JavaMaster
              </h3>
              <p>Java 기초부터 Spring Boot까지, 체계적인 학습 플랫폼입니다. 누구나 무료로 Java 프로그래밍을 배울 수 있습니다.</p>
              <div className="footer-social">
                <a href="https://github.com/aebonlee/java-study" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>학습 과정</h4>
              <ul>
                <li><Link to="/java-learning/01">기초: Java 소개</Link></li>
                <li><Link to="/java-learning/05">중급: 클래스와 객체</Link></li>
                <li><Link to="/java-learning/09">고급: 제네릭</Link></li>
                <li><Link to="/java-learning/13">웹: 서블릿</Link></li>
                <li><Link to="/java-learning/15">웹: Spring</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>바로가기</h4>
              <ul>
                <li><Link to="/java-learning">전체 커리큘럼</Link></li>
                <li><Link to="/">홈</Link></li>
                <li><a href="https://github.com/aebonlee/java-study" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 JavaMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="맨 위로"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  )
}
