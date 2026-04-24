import { useState } from 'react'

type FormState = {
  name: string
  email: string
  checkIn: string
  checkOut: string
  guests: string
  message: string
}

export default function Enquiry() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', checkIn: '', checkOut: '', guests: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const sub = encodeURIComponent(`Enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCheck-in: ${form.checkIn}\nCheck-out: ${form.checkOut}\nGuests: ${form.guests}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@inchbeachhouse.ie?subject=${sub}&body=${body}`
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.875rem 1rem',
    border: '2px solid var(--border)', borderRadius: '8px',
    fontSize: '0.95rem', color: 'var(--text)', background: 'white',
    transition: 'border-color 0.2s', outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block', color: 'var(--navy)', marginBottom: '0.5rem',
    fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase',
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Get in Touch</p>
          <h1 className="section-title" style={{ color: 'white', fontFamily: 'var(--font-heading)' }}>Plan Your Stay</h1>
          <p style={{ maxWidth: '580px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            We'd love to host you at Inch Beach House. Whether you're planning a relaxing break or an active Kerry
            adventure, feel free to get in touch — we're happy to help.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Form */}
            <div>
              <p className="section-label">Send a Message</p>
              <h2 className="section-title">Enquiry Form</h2>
              <div className="divider" />

              {sent ? (
                <div style={{
                  background: 'var(--pale)', padding: '3rem', borderRadius: '16px',
                  textAlign: 'center', border: '2px solid var(--border)',
                }}>
                  <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</p>
                  <h3 style={{ color: 'var(--navy)', fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>Enquiry Sent!</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Thank you — we'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={labelStyle}>Check-in Date</label>
                      <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Check-out Date</label>
                      <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Number of Guests</label>
                    <select name="guests" value={form.guests} onChange={handleChange} style={inputStyle}>
                      <option value="">Select number of guests</option>
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message" rows={6} value={form.message} onChange={handleChange}
                      placeholder="Tell us a bit about your plans, any questions you have..."
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-navy" style={{ alignSelf: 'flex-start', padding: '1rem 2.5rem' }}>
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'var(--pale)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <h3 style={{ color: 'var(--navy)', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  Contact Details
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { label: 'Host', value: 'Michelle' },
                    { label: 'Phone', value: '085 713 4017', href: 'tel:0857134017' },
                    { label: 'Email', value: 'info@inchbeachhouse.ie', href: 'mailto:info@inchbeachhouse.ie' },
                    { label: 'Address', value: 'Inch West, Annascaul, Co. Kerry, V92P9E8' },
                  ].map((item, i) => (
                    <div key={i}>
                      <p style={{ color: 'var(--muted)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.25rem' }}>{item.label}</p>
                      {item.href
                        ? <a href={item.href} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.92rem' }}>{item.value}</a>
                        : <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.92rem', lineHeight: 1.5 }}>{item.value}</p>
                      }
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--navy)', padding: '2rem', borderRadius: '16px', textAlign: 'center', color: 'white' }}>
                <p style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🏡</p>
                <h3 style={{ color: 'var(--gold)', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>
                  Book on Airbnb
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                  For instant confirmation, book directly via Airbnb.
                </p>
                <a
                  href="https://www.airbnb.com"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ display: 'block', textAlign: 'center' }}
                >
                  View on Airbnb
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
