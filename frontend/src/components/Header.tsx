import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'The House', path: '/house' },
  { label: 'Activities', path: '/activities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Enquiry', path: '/enquiry' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'rgba(11, 61, 94, 0.96)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 2px 20px rgba(0,0,0,0.15)',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '70px',
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: '1.15rem', fontWeight: 600 }}>
            Inch Beach House
          </div>
          <div style={{ color: 'var(--gold)', fontSize: '0.65rem', letterSpacing: '2.5px', textTransform: 'uppercase', marginTop: '2px' }}>
            Dingle Peninsula · Kerry
          </div>
        </Link>

        <nav className="hide-mobile" style={{ display: 'flex', gap: '2rem' }}>
          {navItems.map(item => (
            <Link key={item.path} to={item.path} style={{
              color: pathname === item.path ? 'var(--gold)' : 'rgba(255,255,255,0.85)',
              fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase',
              fontWeight: 500, transition: 'color 0.2s',
              borderBottom: pathname === item.path ? '2px solid var(--gold)' : '2px solid transparent',
              paddingBottom: '2px',
            }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none', background: 'none', border: 'none',
            color: 'white', fontSize: '1.4rem', cursor: 'pointer', lineHeight: 1,
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(11, 61, 94, 0.99)', padding: '1rem 1.5rem 2rem' }}>
          {navItems.map(item => (
            <Link key={item.path} to={item.path} onClick={() => setOpen(false)} style={{
              display: 'block',
              color: pathname === item.path ? 'var(--gold)' : 'rgba(255,255,255,0.85)',
              padding: '0.85rem 0',
              fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
