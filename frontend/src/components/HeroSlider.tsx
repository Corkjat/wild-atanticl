import { useState, useEffect } from 'react'
import { client, urlFor } from '../lib/sanity'

export default function HeroSlider() {
  const [images, setImages] = useState<any[]>([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    client.fetch(`*[_type == "heroImage"] | order(order asc){ image, alt }`)
      .then(setImages)
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (images.length < 2) return
    const t = setInterval(() => setCurrent(p => (p + 1) % images.length), 5000)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: 'var(--navy)' }}>
      {images.length > 0 ? images.map((img, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${urlFor(img.image).width(1920).url()})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: i === current ? 1 : 0,
          transition: 'opacity 1.2s ease-in-out',
        }} />
      )) : (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(150deg, #0B3D5E 0%, #1A7EA8 60%, #5BB8D4 100%)',
        }} />
      )}

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(11,61,94,0.25) 0%, rgba(11,61,94,0.55) 100%)',
      }} />

      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '2rem',
      }}>
        <div style={{ maxWidth: '820px', color: 'white' }}>
          <p className="section-label" style={{ color: 'var(--gold)', marginBottom: '1.25rem' }}>
            Inch Beach · Dingle Peninsula · Kerry
          </p>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            lineHeight: 1.15, marginBottom: '1.5rem',
            textShadow: '0 2px 30px rgba(0,0,0,0.4)',
          }}>
            Panoramic Views Over Inch Beach & the Dingle Peninsula
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.7, marginBottom: '2.5rem',
            textShadow: '0 1px 10px rgba(0,0,0,0.3)',
          }}>
            A newly renovated 4-bedroom home on the Wild Atlantic Way. Sleeps 8.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/house" className="btn btn-gold">Discover the House</a>
            <a href="/enquiry" className="btn btn-outline">Make an Enquiry</a>
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)', display: 'flex', gap: '8px',
        }}>
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? '28px' : '8px', height: '8px',
              borderRadius: '4px', border: 'none', cursor: 'pointer', padding: 0,
              background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.45)',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>
      )}

      <div style={{
        position: 'absolute', bottom: '2.5rem', right: '2rem',
        color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem',
        letterSpacing: '2px', textTransform: 'uppercase',
        writingMode: 'vertical-rl',
      }}>
        Scroll to explore
      </div>
    </div>
  )
}
