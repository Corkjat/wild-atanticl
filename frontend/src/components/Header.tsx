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
            background: 'none', border: 'none',
            color: 'white', fontSize: '1.4rem', cursor: 'pointer',
            width: '44px', height: '44px', alignItems: 'center', justifyContent: 'center',
            borderRadius: '6px', transition: 'background 0.2s',
          }}
          className="show-mobile"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div style={{ background: '#0a3555', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '0.5rem 1.5rem 1.5rem' }}>
          {navItems.map(item => (
            <Link key={item.path} to={item.path} onClick={() => setOpen(false)} style={{
              display: 'flex', alignItems: 'center',
              color: pathname === item.path ? 'var(--gold)' : 'rgba(255,255,255,0.85)',
              padding: '0.9rem 0',
              fontSize: '0.88rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 500,
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              gap: '0.75rem',
            }}>
              {pathname === item.path && (
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
              )}
              {item.label}
            </Link>
          ))}
          <div style={{ marginTop: '1.25rem' }}>
            <Link to="/enquiry" onClick={() => setOpen(false)} className="btn btn-gold" style={{ display: 'block', textAlign: 'center' }}>
              Make an Enquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
