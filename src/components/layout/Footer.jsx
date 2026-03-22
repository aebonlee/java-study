import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const quickLinks = [
    { path: '/java-learning', label: 'Java 학습' },
    { path: '/quiz', label: '퀴즈 센터' },
    { path: '/badges', label: '도장깨기' },
    { path: '/my', label: '마이페이지' },
    { path: '/guide', label: '이용 가이드' },
  ]

  const courseLinks = [
    { path: '/java-learning/01', label: '기초: Java 소개' },
    { path: '/java-learning/05', label: '중급: 클래스와 객체' },
    { path: '/java-learning/09', label: '고급: 제네릭' },
    { path: '/java-learning/13', label: '웹: 서블릿' },
    { path: '/java-learning/15', label: '웹: Spring' },
  ]

  const familySites = [
    { name: 'Coding Study', url: 'https://coding.dreamitbiz.com' },
    { name: 'DreamIT Biz', url: 'https://dreamitbiz.com' },
  ]

  const handleFamilySite = (e) => {
    const url = e.target.value
    if (url) {
      window.open(url, '_blank', 'noopener')
      e.target.value = ''
    }
  }

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
              <p>Java 기초부터 Spring Boot까지, 체계적인 학습 플랫폼입니다.</p>
              <p className="footer-desc">누구나 무료로 Java 프로그래밍을 배울 수 있습니다.</p>
              <div className="footer-family">
                <select onChange={handleFamilySite} defaultValue="">
                  <option value="" disabled>Family Site</option>
                  {familySites.map((s, i) => (
                    <option key={i} value={s.url}>{s.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="footer-links">
              <h4>학습 과정</h4>
              <ul>
                {courseLinks.map((item, i) => (
                  <li key={i}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-links">
              <h4>바로가기</h4>
              <ul>
                {quickLinks.map((item, i) => (
                  <li key={i}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-links">
              <h4>연락처</h4>
              <ul className="footer-contact">
                <li><i className="fas fa-envelope"></i> <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a></li>
                <li><i className="fas fa-comment"></i> 카카오톡 문의</li>
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
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="맨 위로"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  )
}
