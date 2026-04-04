import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useProgress } from '../../contexts/ProgressContext'
import { useAuth } from '../../contexts/AuthContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { theme, toggleTheme } = useTheme()
  const { getTotalProgress } = useProgress()
  const { user, isAuthenticated, isAdmin, signOut } = useAuth()
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setUserMenuOpen(false)
  }, [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const totalProgress = getTotalProgress()

  const navItems = [
    {
      label: '자바학습하기',
      mega: true,
      grid2x2: true,
      sections: [
        {
          title: '기초',
          color: '#10B981',
          children: [
            { to: '/java-learning/01', label: 'Java 소개' },
            { to: '/java-learning/02', label: '변수와 자료형' },
            { to: '/java-learning/03', label: '연산자와 제어문' },
            { to: '/java-learning/04', label: '배열과 문자열' },
          ]
        },
        {
          title: '중급',
          color: '#3B82F6',
          children: [
            { to: '/java-learning/05', label: '클래스와 객체' },
            { to: '/java-learning/06', label: '상속과 다형성' },
            { to: '/java-learning/07', label: '인터페이스' },
            { to: '/java-learning/08', label: '예외처리와 컬렉션' },
          ]
        },
        {
          title: '고급',
          color: '#E76F00',
          children: [
            { to: '/java-learning/09', label: '제네릭과 열거형' },
            { to: '/java-learning/10', label: '람다와 스트림' },
            { to: '/java-learning/11', label: '멀티스레드' },
            { to: '/java-learning/12', label: '파일 I/O' },
          ]
        },
        {
          title: '웹 개발',
          color: '#EF4444',
          children: [
            { to: '/java-learning/13', label: '서블릿 기초' },
            { to: '/java-learning/14', label: 'JSP와 MVC' },
            { to: '/java-learning/15', label: 'Spring Framework' },
            { to: '/java-learning/16', label: 'Spring Boot' },
            { to: '/java-learning/17', label: 'Spring MVC 데이터' },
          ]
        },
      ]
    },
    {
      label: '서블릿',
      children: [
        { to: '/servlet/01', label: '서블릿 개요와 환경설정' },
        { to: '/servlet/02', label: 'HTTP 프로토콜과 요청/응답' },
        { to: '/servlet/03', label: '서블릿 생명주기' },
        { to: '/servlet/04', label: '폼 처리와 파라미터' },
        { to: '/servlet/05', label: '세션과 쿠키' },
        { to: '/servlet/06', label: '필터와 리스너' },
        { to: '/servlet/07', label: 'JSP 기초와 EL/JSTL' },
        { to: '/servlet/08', label: 'MVC 패턴 구현' },
        { to: '/servlet/09', label: '파일 업로드와 DB 연동' },
        { to: '/servlet/10', label: '미니 프로젝트: CRUD 게시판' },
      ]
    },
    {
      label: '스프링',
      mega: true,
      sections: [
        {
          title: 'Framework',
          color: '#10B981',
          children: [
            { to: '/spring/01', label: 'Framework 소개' },
            { to: '/spring/02', label: 'IoC와 DI' },
            { to: '/spring/03', label: 'Bean과 컨테이너' },
            { to: '/spring/04', label: 'AOP (관점지향)' },
            { to: '/spring/05', label: 'MVC 기초' },
            { to: '/spring/06', label: '데이터 바인딩과 검증' },
            { to: '/spring/07', label: 'MyBatis 연동' },
            { to: '/spring/08', label: 'Security 기초' },
          ]
        },
        {
          title: 'Boot',
          color: '#3B82F6',
          children: [
            { to: '/spring/09', label: 'Boot 시작하기' },
            { to: '/spring/10', label: 'REST API 구현' },
            { to: '/spring/11', label: 'Spring Data JPA' },
            { to: '/spring/12', label: '예외처리 표준화' },
            { to: '/spring/13', label: 'Security + JWT' },
            { to: '/spring/14', label: '테스트 (JUnit5)' },
            { to: '/spring/15', label: 'Swagger 문서화' },
            { to: '/spring/16', label: '배포 (Docker)' },
          ]
        },
      ]
    },
    {
      label: '실무',
      mega: true,
      grid2x2: true,
      sections: [
        {
          title: '도구',
          color: '#8B5CF6',
          children: [
            { to: '/practical/01', label: 'IntelliJ IDEA' },
            { to: '/practical/02', label: 'Git과 GitHub' },
            { to: '/practical/03', label: 'Maven과 Gradle' },
          ]
        },
        {
          title: '데이터',
          color: '#EC4899',
          children: [
            { to: '/practical/04', label: 'SQL 기초' },
            { to: '/practical/05', label: 'JDBC 심화' },
            { to: '/practical/06', label: 'JSON 처리' },
          ]
        },
        {
          title: '품질',
          color: '#F59E0B',
          children: [
            { to: '/practical/07', label: '클린 코드' },
            { to: '/practical/08', label: '로깅과 디버깅' },
          ]
        },
        {
          title: '인프라',
          color: '#06B6D4',
          children: [
            { to: '/practical/09', label: '날짜/시간 API' },
            { to: '/practical/10', label: 'Linux와 서버' },
          ]
        },
      ]
    },
    {
      label: '프로젝트',
      mega: true,
      grid2x2: true,
      sections: [
        {
          title: '기초',
          color: '#10B981',
          children: [
            { to: '/projects/01', label: '콘솔 주소록' },
            { to: '/projects/02', label: '성적 관리' },
          ]
        },
        {
          title: '심화',
          color: '#3B82F6',
          children: [
            { to: '/projects/03', label: '도서 관리' },
            { to: '/projects/04', label: '채팅 앱' },
          ]
        },
        {
          title: '웹',
          color: '#E76F00',
          children: [
            { to: '/projects/05', label: '서블릿 게시판' },
            { to: '/projects/06', label: '서블릿 쇼핑몰' },
          ]
        },
        {
          title: 'Spring',
          color: '#6DB33F',
          children: [
            { to: '/projects/07', label: 'REST 블로그' },
            { to: '/projects/08', label: 'E-Commerce' },
          ]
        },
      ]
    },
    { to: '/java-learning', label: '커리큘럼' },
    { to: '/quiz', label: '퀴즈' },
    { to: '/badges', label: '도장깨기' },
    { to: '/guide', label: '가이드' },
    { to: '/my', label: '마이페이지' },
  ]

  const isMobile = () => window.innerWidth <= 1100

  const handleMouseEnter = (i) => {
    if (!isMobile()) setActiveDropdown(i)
  }
  const handleMouseLeave = () => {
    if (!isMobile()) setActiveDropdown(null)
  }

  const userAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const userName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-wrapper">
        <Link to="/" className="logo">
          <h1>
            <span className="brand-java">Java</span>
            <span className="brand-master">Master</span>
          </h1>
        </Link>

        {mobileOpen && (
          <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />
        )}
        <ul className={`nav-menu${mobileOpen ? ' active' : ''}`}>
          {navItems.map((item, i) =>
            item.mega ? (
              <li
                key={i}
                className="nav-item-dropdown"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className="nav-link nav-link-dropdown"
                  onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}
                >
                  {item.label}
                  <i className="fas fa-chevron-down dropdown-arrow" style={{
                    fontSize: '10px', marginLeft: 4,
                    transition: 'transform 0.3s',
                    transform: activeDropdown === i ? 'rotate(180deg)' : 'none'
                  }}></i>
                </span>
                <div className={`dropdown-mega${activeDropdown === i ? ' active' : ''}${item.grid2x2 ? ' dropdown-mega-2x2' : ''}`}>
                  {item.sections.map(section => (
                    <div key={section.title} className="dropdown-mega-section">
                      <div className="dropdown-section-header">
                        {section.title}
                      </div>
                      <ul>
                        {section.children.map(child => (
                          <li key={child.to}>
                            <NavLink to={child.to} onClick={() => setMobileOpen(false)}>
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            ) : item.children ? (
              <li
                key={i}
                className="nav-item-dropdown"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className="nav-link nav-link-dropdown"
                  onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}
                >
                  {item.label}
                  <i className="fas fa-chevron-down dropdown-arrow" style={{
                    fontSize: '10px', marginLeft: 4,
                    transition: 'transform 0.3s',
                    transform: activeDropdown === i ? 'rotate(180deg)' : 'none'
                  }}></i>
                </span>
                <ul className={`dropdown-menu${activeDropdown === i ? ' active' : ''}`}>
                  {item.children.map(child => (
                    <li key={child.to}>
                      <NavLink to={child.to} onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        <div className="nav-actions">
          <div className="nav-progress-badge" title={`전체 진도: ${totalProgress}%`}>
            <svg width="28" height="28" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--border-light)" strokeWidth="3" />
              <circle
                cx="18" cy="18" r="15.5" fill="none"
                stroke="var(--accent)" strokeWidth="3"
                strokeDasharray={`${totalProgress * 0.9738} 97.38`}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
                style={{ transition: 'stroke-dasharray 0.5s ease' }}
              />
            </svg>
            <span className="progress-text">{totalProgress}%</span>
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="테마 변경">
            {theme === 'dark' ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>

          {/* Auth UI */}
          {isAuthenticated ? (
            <div className="nav-user-menu" ref={userMenuRef}>
              <button
                className="nav-user-trigger"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                aria-label="사용자 메뉴"
              >
                {userAvatar ? (
                  <img src={userAvatar} alt={userName} className="nav-user-avatar" />
                ) : (
                  <div className="nav-user-avatar nav-user-avatar-placeholder">
                    {userName?.charAt(0)?.toUpperCase()}
                  </div>
                )}
              </button>
              <div className={`nav-user-balloon${userMenuOpen ? ' active' : ''}`}>
                <div className="nav-balloon-arrow" />
                <div className="nav-user-info">
                  <div className="nav-user-name">{userName}</div>
                  <div className="nav-user-email">{user?.email}</div>
                </div>
                <div className="nav-balloon-links">
                  <Link to="/my" className="nav-balloon-link" onClick={() => setUserMenuOpen(false)}>
                    <i className="fa-solid fa-user-circle" /> 마이페이지
                  </Link>
                  {isAdmin && (
                    <Link to="/admin" className="nav-balloon-link" onClick={() => setUserMenuOpen(false)}>
                      <i className="fa-solid fa-shield-halved" /> 관리자
                    </Link>
                  )}
                </div>
                <button className="nav-balloon-logout" onClick={() => { signOut(); setUserMenuOpen(false); navigate('/login') }}>
                  <i className="fa-solid fa-right-from-bracket" /> 로그아웃
                </button>
              </div>
            </div>
          ) : (
            <button className="nav-login-btn" onClick={() => navigate('/login')}>
              <i className="fa-solid fa-user" /> 로그인
            </button>
          )}

          <button
            className={`mobile-toggle${mobileOpen ? ' active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
