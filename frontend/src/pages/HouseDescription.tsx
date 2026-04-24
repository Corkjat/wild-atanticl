import { Link } from 'react-router-dom'

const amenities = [
  {
    icon: '🛋️', title: 'Living Space',
    items: ['Large seating area with panoramic views', '55-inch HDTV with cable/satellite', 'High-speed WiFi', 'Bright, open-plan layout'],
  },
  {
    icon: '🍳', title: 'Kitchen & Dining',
    items: ['Oven, freezer, toaster', 'Cooking basics (pots, pans, oil, salt & pepper)', 'Crockery, cutlery, wine glasses', 'Dining area and outdoor dining space'],
  },
  {
    icon: '🛏️', title: 'Bedrooms & Laundry',
    items: ['4 comfortable bedrooms', '2 ensuite bathrooms', 'Bed linen provided', 'Room-darkening blinds', 'Washer, drying rack, iron'],
  },
  {
    icon: '🚿', title: 'Bathrooms',
    items: ['Bath and hot water', 'Hairdryer', 'Clean, modern finishes'],
  },
  {
    icon: '👶', title: 'Family Friendly',
    items: ['Travel cot (on request)', 'High chair (on request)'],
  },
  {
    icon: '🌿', title: 'Outdoor Space',
    items: ['Private garden', 'Outdoor dining area', 'Ideal for relaxing and watching sunsets'],
  },
  {
    icon: '🏠', title: 'Comfort & Practicalities',
    items: ['Central heating', 'Free parking on premises', 'Smoke alarm', 'Reliable WiFi (suitable for work stays)'],
  },
]

const stats = [
  { value: '4', label: 'Bedrooms' },
  { value: '3', label: 'Bathrooms' },
  { value: '8', label: 'Sleeps' },
  { value: '2km', label: 'To Beach' },
]

export default function HouseDescription() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Inch Beach, Kerry</p>
          <h1 className="section-title" style={{ color: 'white', fontFamily: 'var(--font-heading)' }}>The House</h1>
          <p style={{ maxWidth: '680px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            This newly renovated home has been designed to maximise its exceptional setting, with bright,
            open spaces and large windows framing panoramic views of the Atlantic coastline and surrounding mountains.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: 'var(--ocean)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ color: 'white', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8, marginTop: '0.4rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Amenities */}
      <section className="section">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Everything You Need</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>What's Included</h2>
          <div className="divider center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {amenities.map((a, i) => (
              <div key={i} style={{
                background: 'var(--pale)', padding: '2rem', borderRadius: '12px',
                borderTop: '4px solid var(--ocean)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{a.icon}</span>
                  <h3 style={{ color: 'var(--navy)', fontSize: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{a.title}</h3>
                </div>
                <ul className="check-list">
                  {a.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>
            Ready to Book Your Stay?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Get in touch and we'll help you plan the perfect Kerry escape.
          </p>
          <Link to="/enquiry" className="btn btn-gold">Make an Enquiry</Link>
        </div>
      </section>
    </>
  )
}
