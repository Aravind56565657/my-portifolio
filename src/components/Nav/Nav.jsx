import { useState, useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTheme } from '../../context/ThemeContext'
import { navLinks } from '../../data/content'
import './Nav.css'

export default function Nav() {
  const navRef = useScrollReveal()
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav className={`nav-bar ${isOpen ? 'nav-open' : ''}`} ref={navRef}>
      <div className="wrap">
        <a href="#" className="nav-logo" onClick={() => setIsOpen(false)}>Aravind Kumar</a>

        <button
          className="nav-burger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        <div className={`nav-right ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={() => setIsOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <span className="theme-toggle-icon theme-sun" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </span>
            <span className="theme-toggle-icon theme-moon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className={`nav-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
    </nav>
  )
}

