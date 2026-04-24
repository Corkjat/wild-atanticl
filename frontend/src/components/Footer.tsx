import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', path: '/' },
  { label: 'The House', path: '/house' },
  { label: 'Activities', path: '/activities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Enquiry', path: '/enquiry' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'white' }}>
      <div className="container" style={{
        padding: '4rem 2rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '3rem',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            Inch Beach House
          </div>
          <div style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Wild Atlantic Way, Kerry
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: '1.8' }}>
            A newly renovated 4-bedroom home with panoramic views over Inch Beach and the Dingle Peninsula.
          </p>
        </div>

        <div>
          <h4 style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)' }}>
            <p>Inch West, Annascaul,<br />Co. Kerry, V92P9E8</p>
            <p>Host: Michelle</p>
            <a href="tel:0857134017" style={{ color: 'rgba(255,255,255,0.7)' }}>085 713 4017</a>
            <a href="mailto:info@inchbeachhouse.ie" style={{ color: 'rgba(255,255,255,0.7)' }}>info@inchbeachhouse.ie</a>
          </div>
        </div>

        <div>
          <h4 style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Pages
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {links.map(l => (
              <Link key={l.path} to={l.path} style={{
                color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', transition: 'color 0.2s',
              }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        margin: '0 2rem',
        padding: '1.5rem 0',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.8rem',
      }}>
        © {new Date().getFullYear()} Inch Beach House · All Rights Reserved
      </div>
    </footer>
  )
}
