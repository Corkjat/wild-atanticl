import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'THE COTTAGE', path: '/castlegregory-house-rental' },
  { label: 'ACTIVITIES IN THE AREA', path: '/things-to-do-in-castlegregory' },
  { label: 'GALLERY', path: '/gallery' },
  { label: 'RATES', path: '/rates' },
  { label: 'OUR BLOG', path: '/our-blog' },
  { label: 'MAKE AN ENQUIRY', path: '/make-an-enquiry' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="site-header">
      <div className="header-top">
        <Link to="/" className="header-logo">
          <img src="/images/logo.png" alt="Wild Atlantic Way Cottage" />
        </Link>
      </div>
      <nav className="header-nav">
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <ul className={menuOpen ? 'open' : ''}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
