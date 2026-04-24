import { Link } from 'react-router-dom'

const activities = [
  {
    icon: '🏖️', title: 'Inch Beach', distance: '2km',
    bg: 'var(--ocean)',
    description: 'A magnificent 5km stretch of golden sand, perfect for walking, swimming, and surfing. One of the most beautiful beaches in Ireland with breathtaking views year-round.',
    items: ['Long sandy beach ideal for walking', 'Surfing and water sports', 'Stunning views year-round'],
  },
  {
    icon: '🍺', title: 'Annascaul Village', distance: '2km',
    bg: 'var(--navy)',
    description: 'A charming traditional Irish village with welcoming pubs, great food, and a relaxed atmosphere. Home to the legendary Dan Foley\'s bar, a true Kerry institution.',
    items: ['Traditional Irish pubs', 'Cafés and local food', 'Relaxed, welcoming atmosphere'],
  },
  {
    icon: '🥾', title: 'Annascaul Lake Walk', distance: 'Nearby',
    bg: '#2a7d5f',
    description: 'A scenic riverside walk leading to a peaceful mountain lake surrounded by dramatic Kerry scenery. Suitable for all fitness levels and absolutely stunning on a clear day.',
    items: ['Scenic riverside trail', 'Mountain lake views', 'Suitable for all fitness levels'],
  },
  {
    icon: '🌊', title: 'Dingle Peninsula', distance: '20 mins',
    bg: '#1a3d5e',
    description: 'One of Ireland\'s most spectacular peninsulas. Drive the famous Slea Head Drive for breathtaking coastal scenery, or explore Dingle town with its restaurants, music, and culture.',
    items: ['Slea Head Drive', 'Breathtaking coastal scenery', 'Restaurants, music, and culture'],
  },
]

const outdoorActivities = [
  { icon: '🥾', label: 'Hiking' },
  { icon: '🚴', label: 'Cycling' },
  { icon: '🐴', label: 'Horse Riding' },
  { icon: '🏄', label: 'Surfing' },
  { icon: '🛶', label: 'Paddleboarding' },
  { icon: '🎣', label: 'Fishing' },
]

export default function Activities() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Explore Kerry</p>
          <h1 className="section-title" style={{ color: 'white', fontFamily: 'var(--font-heading)' }}>Activities Nearby</h1>
          <p style={{ maxWidth: '580px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
            From stunning beaches to mountain walks, traditional villages to spectacular coastal drives —
            Kerry has it all, right on your doorstep.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {activities.map((a, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '260px 1fr' : '1fr 260px',
                borderRadius: '16px', overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(11,61,94,0.1)',
              }}>
                <div style={{
                  background: a.bg, padding: '3rem 2rem',
                  textAlign: 'center', color: 'white',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  order: i % 2 === 0 ? 0 : 1,
                }}>
                  <span style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{a.icon}</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{a.title}</h3>
                  <p style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.7 }}>
                    {a.distance} away
                  </p>
                </div>
                <div style={{
                  padding: '2.5rem', background: 'var(--pale)',
                  order: i % 2 === 0 ? 1 : 0,
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>{a.description}</p>
                  <ul className="check-list">
                    {a.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor activities */}
      <section className="section" style={{ background: 'var(--pale)' }}>
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Get Active</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Outdoor Activities</h2>
          <div className="divider center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.25rem' }}>
            {outdoorActivities.map((a, i) => (
              <div key={i} style={{
                background: 'white', padding: '2rem 1rem', borderRadius: '12px',
                textAlign: 'center', boxShadow: '0 2px 12px rgba(11,61,94,0.07)',
              }}>
                <span style={{ fontSize: '2.5rem' }}>{a.icon}</span>
                <p style={{ color: 'var(--navy)', marginTop: '0.75rem', fontSize: '0.88rem', fontWeight: 600 }}>{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ocean)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: '1.75rem', marginBottom: '1rem' }}>
            Ready to Experience Kerry?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Enquire now and start planning your perfect getaway.
          </p>
          <Link to="/enquiry" className="btn btn-gold">Make an Enquiry</Link>
        </div>
      </section>
    </>
  )
}
