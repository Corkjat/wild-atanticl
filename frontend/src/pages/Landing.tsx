import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import { client } from '../lib/sanity'
import { useSEO } from '../hooks/useSEO'

const faqs = [
  {
    q: 'How far is Inch Beach House from Dingle town?',
    a: 'Inch Beach House is approximately 20 minutes by car from Dingle town (about 18km), making it the perfect base for exploring the Dingle Peninsula, Slea Head Drive, and Conor Pass.',
  },
  {
    q: 'Is Inch Beach safe for swimming?',
    a: 'Yes. Inch Beach is a Blue Flag beach with lifeguard patrols during the summer months. The beach stretches 5km with designated swimming areas and a gently sloping sandy bottom, making it safe for families.',
  },
  {
    q: 'What is the nearest airport to Inch Beach House?',
    a: 'Kerry Airport (Farranfore) is just 25 minutes away. Cork Airport and Shannon Airport are both under 2 hours. Dublin Airport is approximately 3.5 hours by car.',
  },
  {
    q: 'How many guests does Inch Beach House sleep?',
    a: 'Inch Beach House sleeps 8 guests across 4 bedrooms. A travel cot is available on request for younger children.',
  },
  {
    q: 'Is there parking at Inch Beach House?',
    a: 'Yes, free private parking is available on the premises for all guests.',
  },
  {
    q: 'Is Inch Beach House suitable for families with young children?',
    a: 'Yes. We have a travel cot available on request, family board games and toys, a large private garden, and we are just 2km from Inch Beach with its safe, shallow swimming areas.',
  },
]

const highlights = [
  'Uninterrupted sea & mountain views',
  'Just 2km from Inch Beach & Annascaul',
  '4 bedrooms · 3 bathrooms · Sleeps 8',
  'Private garden with outdoor dining',
  'Free Broadband and Sky TV',
  'Free parking on premises',
]

const distances = [
  { place: 'Inch Beach', dist: '2 km' },
  { place: 'Annascaul Village', dist: '2 km' },
  { place: 'Kerry Airport', dist: '25 mins' },
  { place: 'Cork & Shannon', dist: '< 2 hours' },
]

const fallbackTestimonials = [
  {
    quote: 'Beautifully renovated brand new house. Stunning views. The best Airbnb I have ever stayed in Ireland. Every amenity you could possibly think of was provided. 5 mins drive to Inch Beach. Highly recommend.',
    author: 'Aashima', date: 'June 2025',
  },
  {
    quote: 'Just amazing. This has to be one of the nicest Airbnbs we have stayed in to date. The house was spotless, had the most amazing views, and was beautifully decorated. It very much felt like a house built for family holidays.',
    author: 'Stephen', date: 'August 2025',
  },
  {
    quote: 'The place was absolutely perfect – spotless, beautifully maintained, and exactly as described. The views were stunning. Everything was clean, comfortable, and thoughtfully prepared. I\'d definitely recommend it.',
    author: 'Ciara', date: 'September 2025',
  },
  {
    quote: 'The house is absolutely stunning, the pictures don\'t do it justice. Such a beautifully laid out place, amazing furniture and bathrooms. The view out the main window is breathtaking. We\'ll definitely come back.',
    author: 'Mark', date: 'March 2026',
  },
]

export default function Landing() {
  useSEO({
    title: 'Inch Beach House | Holiday Rental, Dingle Peninsula, Kerry',
    description: 'Stunning 4-bedroom holiday home on the Wild Atlantic Way. Panoramic views over Inch Beach, Kerry. Sleeps 8. Book direct with host Michelle.',
    canonical: 'https://inchbeachhouse.com/',
  })
  const [testimonials, setTestimonials] = useState(fallbackTestimonials)
  const [active, setActive] = useState(0)

  useEffect(() => {
    client.fetch(`*[_type == "testimonial"] | order(_createdAt asc){ quote, author, date }`)
      .then((d: any[]) => { if (d.length) setTestimonials(d) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 7000)
    return () => clearInterval(t)
  }, [testimonials.length])

  return (
    <>
      <HeroSlider />

      {/* Highlights */}
      <section className="section" style={{ background: 'var(--pale)' }}>
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Why Stay With Us</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Key Highlights</h2>
          <div className="divider center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1rem' }}>
            {highlights.map((h, i) => (
              <div key={i} style={{
                background: 'white', padding: '1.25rem 1.5rem', borderRadius: '10px',
                display: 'flex', alignItems: 'center', gap: '1rem',
                boxShadow: '0 2px 12px rgba(11,61,94,0.06)',
                borderLeft: '4px solid var(--blue)',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.5 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="container">
          <div className="location-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            <div>
              <p className="section-label">Where We Are</p>
              <h2 className="section-title">Location</h2>
              <div className="divider" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {distances.map((d, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1rem 1.25rem', background: 'var(--pale)', borderRadius: '8px',
                    borderLeft: '4px solid var(--gold)',
                  }}>
                    <span style={{ color: 'var(--text)', fontSize: '0.92rem' }}>{d.place}</span>
                    <span style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '0.95rem' }}>{d.dist}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                Inch West, Annascaul, Co. Kerry, V92P9E8
              </p>
            </div>
            <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(11,61,94,0.15)' }}>
              <iframe
                src="https://maps.google.com/maps?q=V92P9E8,+Ireland&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                width="100%" height="360"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                title="Inch Beach House location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section" style={{ background: 'var(--navy)', scrollMarginTop: '70px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Guest Reviews</p>
          <h2 className="section-title white">What Our Guests Say</h2>
          <div className="divider center" />
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ fontSize: '3.5rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>"</div>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', lineHeight: 1.9,
              color: 'rgba(255,255,255,0.88)', fontStyle: 'italic', minHeight: '120px',
            }}>
              {testimonials[active]?.quote}
            </p>
            <p style={{ color: 'var(--gold)', fontWeight: 600, marginTop: '1.5rem', fontSize: '0.95rem' }}>
              — {testimonials[active]?.author}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
              {testimonials[active]?.date}
            </p>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '2rem' }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  width: i === active ? '28px' : '8px', height: '8px', borderRadius: '4px',
                  border: 'none', cursor: 'pointer', padding: 0,
                  background: i === active ? 'var(--gold)' : 'rgba(255,255,255,0.25)',
                  transition: 'all 0.3s',
                }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Common Questions</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>FAQs</h2>
          <div className="divider center" />
          <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: 'var(--pale)', borderRadius: '12px',
                padding: '1.5rem 2rem', borderLeft: '4px solid var(--gold)',
              }}>
                <h3 style={{ color: 'var(--navy)', fontSize: '1rem', fontFamily: 'var(--font-heading)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="section" style={{ background: 'var(--pale)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <div className="divider center" />
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem', maxWidth: '800px', margin: '0 auto 3rem',
          }}>
            {[
              { label: 'Address', lines: ['Inch West, Annascaul', 'Co. Kerry, V92P9E8'] },
              { label: 'Phone', lines: ['Michelle', '(+353) 85 713 4017'] },
              { label: 'Email', lines: ['info@inchbeachhouse.ie'] },
            ].map((c, i) => (
              <div key={i} style={{
                background: 'white', padding: '2rem', borderRadius: '12px',
                boxShadow: '0 2px 15px rgba(11,61,94,0.07)',
              }}>
                <h4 style={{ color: 'var(--navy)', margin: '0 0 0.5rem', fontSize: '0.75rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{c.label}</h4>
                {c.lines.map((l, j) => <p key={j} style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{l}</p>)}
              </div>
            ))}
          </div>
          <Link to="/enquiry" className="btn btn-navy">Make an Enquiry</Link>
        </div>
      </section>
    </>
  )
}
