import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => prev === name ? null : name)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">J</span>
          JavaMaster
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <div className={`nav-dropdown ${openDropdown === 'basics' ? 'open' : ''}`}>
            <button className="nav-link" onClick={() => toggleDropdown('basics')}>
              기초 <i className="fas fa-chevron-down" style={{fontSize: '10px', marginLeft: '4px'}}></i>
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/java-learning/01" onClick={() => setMenuOpen(false)}>Ch.1 Java 소개</Link>
              <Link to="/java-learning/02" onClick={() => setMenuOpen(false)}>Ch.2 변수와 자료형</Link>
              <Link to="/java-learning/03" onClick={() => setMenuOpen(false)}>Ch.3 연산자와 제어문</Link>
              <Link to="/java-learning/04" onClick={() => setMenuOpen(false)}>Ch.4 배열과 문자열</Link>
            </div>
          </div>

          <div className={`nav-dropdown ${openDropdown === 'intermediate' ? 'open' : ''}`}>
            <button className="nav-link" onClick={() => toggleDropdown('intermediate')}>
              중급 <i className="fas fa-chevron-down" style={{fontSize: '10px', marginLeft: '4px'}}></i>
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/java-learning/05" onClick={() => setMenuOpen(false)}>Ch.5 클래스와 객체</Link>
              <Link to="/java-learning/06" onClick={() => setMenuOpen(false)}>Ch.6 상속과 다형성</Link>
              <Link to="/java-learning/07" onClick={() => setMenuOpen(false)}>Ch.7 인터페이스</Link>
              <Link to="/java-learning/08" onClick={() => setMenuOpen(false)}>Ch.8 예외처리와 컬렉션</Link>
            </div>
          </div>

          <div className={`nav-dropdown ${openDropdown === 'advanced' ? 'open' : ''}`}>
            <button className="nav-link" onClick={() => toggleDropdown('advanced')}>
              고급 <i className="fas fa-chevron-down" style={{fontSize: '10px', marginLeft: '4px'}}></i>
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/java-learning/09" onClick={() => setMenuOpen(false)}>Ch.9 제네릭과 열거형</Link>
              <Link to="/java-learning/10" onClick={() => setMenuOpen(false)}>Ch.10 람다와 스트림</Link>
              <Link to="/java-learning/11" onClick={() => setMenuOpen(false)}>Ch.11 멀티스레드</Link>
              <Link to="/java-learning/12" onClick={() => setMenuOpen(false)}>Ch.12 파일 I/O</Link>
            </div>
          </div>

          <div className={`nav-dropdown ${openDropdown === 'web' ? 'open' : ''}`}>
            <button className="nav-link" onClick={() => toggleDropdown('web')}>
              웹 개발 <i className="fas fa-chevron-down" style={{fontSize: '10px', marginLeft: '4px'}}></i>
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/java-learning/13" onClick={() => setMenuOpen(false)}>Ch.13 서블릿 기초</Link>
              <Link to="/java-learning/14" onClick={() => setMenuOpen(false)}>Ch.14 JSP와 MVC</Link>
              <Link to="/java-learning/15" onClick={() => setMenuOpen(false)}>Ch.15 Spring 기초</Link>
              <Link to="/java-learning/16" onClick={() => setMenuOpen(false)}>Ch.16 Spring Boot</Link>
              <Link to="/java-learning/17" onClick={() => setMenuOpen(false)}>Ch.17 Spring MVC</Link>
            </div>
          </div>

          <Link to="/java-learning" className={`nav-link ${isActive('/java-learning')}`} onClick={() => setMenuOpen(false)}>
            전체 커리큘럼
          </Link>
        </div>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="테마 변경">
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">
            <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  )
}
