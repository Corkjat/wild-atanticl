import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client, urlFor } from '../lib/sanity'

const amenities = [
  {
    title: 'Living Space',
    items: ['Large seating area with panoramic views', '55-inch HDTV with cable/satellite', 'High-speed WiFi', 'Bright, open-plan layout'],
  },
  {
    title: 'Kitchen & Dining',
    items: ['Oven, freezer, toaster', 'Cooking basics (pots, pans, oil, salt & pepper)', 'Crockery, cutlery, wine glasses', 'Dining area and outdoor dining space'],
  },
  {
    title: 'Bedrooms & Laundry',
    items: ['4 comfortable bedrooms', '2 ensuite bathrooms', 'Bed linen provided', 'Room-darkening blinds', 'Washer, drying rack, iron'],
  },
  {
    title: 'Bathrooms',
    items: ['Bath and hot water', 'Hairdryer', 'Clean, modern finishes'],
  },
  {
    title: 'Family Friendly',
    items: ['Travel cot (on request)', 'High chair (on request)'],
  },
  {
    title: 'Outdoor Space',
    items: ['Private garden', 'Outdoor dining area', 'Ideal for relaxing and watching sunsets'],
  },
  {
    title: 'Comfort & Practicalities',
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
  const [images, setImages] = useState<any[]>([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    client.fetch(`*[_type == "galleryImage"] | order(order asc){ image, alt, title }`)
      .then(setImages)
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (images.length < 2) return
    const t = setInterval(() => setCurrent(p => (p + 1) % images.length), 4500)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <>
      {/* Photo slider */}
      {images.length > 0 && (
        <div style={{ position: 'relative', height: '55vh', overflow: 'hidden', marginTop: '70px' }}>
          {images.map((img, i) => (
            <div key={i} style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${urlFor(img.image).width(1600).url()})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              opacity: i === current ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
            }} />
          ))}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,61,94,0.3)' }} />
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
            {images.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px',
                border: 'none', cursor: 'pointer', padding: 0,
                background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
                transition: 'all 0.3s',
              }} />
            ))}
          </div>
        </div>
      )}

      <div className="page-hero" style={{ marginTop: images.length > 0 ? 0 : undefined }}>
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
          <div className="stats-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ color: 'white', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8, marginTop: '0.4rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo grid */}
      {images.length > 0 && (
        <section className="section" style={{ background: 'var(--pale)' }}>
          <div className="container">
            <p className="section-label" style={{ textAlign: 'center' }}>Take a Look Inside</p>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Photos</h2>
            <div className="divider center" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '0.75rem',
            }}>
              {images.map((img, i) => (
                <div key={i} style={{
                  aspectRatio: '4/3', overflow: 'hidden', borderRadius: '8px',
                  boxShadow: '0 2px 12px rgba(11,61,94,0.08)',
                }}>
                  <img
                    src={urlFor(img.image).width(600).height(450).url()}
                    alt={img.alt || img.title || 'Inch Beach House'}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                <div style={{ marginBottom: '1.25rem' }}>
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
