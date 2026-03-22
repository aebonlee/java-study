import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import { useProgress } from '../../contexts/ProgressContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const { theme, toggleTheme } = useTheme()
  const { getTotalProgress } = useProgress()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  const totalProgress = getTotalProgress()

  const navItems = [
    {
      label: '기초', children: [
        { to: '/java-learning/01', label: 'Ch.1 Java 소개', icon: 'fas fa-coffee' },
        { to: '/java-learning/02', label: 'Ch.2 변수와 자료형', icon: 'fas fa-database' },
        { to: '/java-learning/03', label: 'Ch.3 연산자와 제어문', icon: 'fas fa-code-branch' },
        { to: '/java-learning/04', label: 'Ch.4 배열과 문자열', icon: 'fas fa-list' },
      ]
    },
    {
      label: '중급', children: [
        { to: '/java-learning/05', label: 'Ch.5 클래스와 객체', icon: 'fas fa-cube' },
        { to: '/java-learning/06', label: 'Ch.6 상속과 다형성', icon: 'fas fa-sitemap' },
        { to: '/java-learning/07', label: 'Ch.7 인터페이스', icon: 'fas fa-puzzle-piece' },
        { to: '/java-learning/08', label: 'Ch.8 예외처리와 컬렉션', icon: 'fas fa-boxes-stacked' },
      ]
    },
    {
      label: '고급', children: [
        { to: '/java-learning/09', label: 'Ch.9 제네릭과 열거형', icon: 'fas fa-gears' },
        { to: '/java-learning/10', label: 'Ch.10 람다와 스트림', icon: 'fas fa-stream' },
        { to: '/java-learning/11', label: 'Ch.11 멀티스레드', icon: 'fas fa-diagram-project' },
        { to: '/java-learning/12', label: 'Ch.12 파일 I/O', icon: 'fas fa-file-code' },
      ]
    },
    {
      label: '웹 개발', children: [
        { to: '/java-learning/13', label: 'Ch.13 서블릿 기초', icon: 'fas fa-server' },
        { to: '/java-learning/14', label: 'Ch.14 JSP와 MVC', icon: 'fas fa-window-maximize' },
        { to: '/java-learning/15', label: 'Ch.15 Spring 기초', icon: 'fas fa-leaf' },
        { to: '/java-learning/16', label: 'Ch.16 Spring Boot', icon: 'fas fa-bolt' },
        { to: '/java-learning/17', label: 'Ch.17 Spring MVC', icon: 'fas fa-layer-group' },
      ]
    },
    { to: '/java-learning', label: '커리큘럼' },
    { to: '/quiz', label: '퀴즈' },
    { to: '/badges', label: '도장깨기' },
    { to: '/guide', label: '가이드' },
    { to: '/my', label: '마이페이지' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-wrapper">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">J</span>
          <span className="logo-text">Java<span className="logo-accent">Master</span></span>
        </Link>

        <ul className={`nav-menu${mobileOpen ? ' active' : ''}`}>
          {navItems.map((item, i) =>
            item.children ? (
              <li
                key={i}
                className="nav-item-dropdown"
                onMouseEnter={() => setActiveDropdown(i)}
                onMouseLeave={() => setActiveDropdown(null)}
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
                        <i className={child.icon}></i> {child.label}
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
