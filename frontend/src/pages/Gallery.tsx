import { useState, useEffect } from 'react'
import { client, urlFor } from '../lib/sanity'

export default function Gallery() {
  const [images, setImages] = useState<any[]>([])
  const [heroSlide, setHeroSlide] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    client.fetch(`*[_type == "galleryImage"] | order(orderRank asc){ _id, title, image, alt, category }`)
      .then(setImages)
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (images.length < 2) return
    const t = setInterval(() => setHeroSlide(p => (p + 1) % images.length), 4000)
    return () => clearInterval(t)
  }, [images.length])

  const categories = ['All', ...Array.from(new Set(images.map(i => i.category).filter(Boolean)))]
  const filtered = filter === 'All' ? images : images.filter(i => i.category === filter)

  const navigate = (dir: 1 | -1) => {
    if (selected === null) return
    const next = selected + dir
    if (next < 0) setSelected(images.length - 1)
    else if (next >= images.length) setSelected(0)
    else setSelected(next)
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selected === null) return
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected])

  return (
    <>
      {/* Hero slider */}
      <div style={{ position: 'relative', height: '65vh', minHeight: '480px', overflow: 'hidden', background: 'var(--navy)', marginTop: '70px' }}>
        {images.length > 0 ? images.map((img, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${urlFor(img.image).width(1600).url()})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: i === heroSlide ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }} />
        )) : (
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg, #0B3D5E 0%, #1A7EA8 60%, #5BB8D4 100%)' }} />
        )}

        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(11,61,94,0.2) 0%, rgba(11,61,94,0.65) 100%)' }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
          <div style={{ maxWidth: '700px', color: 'white' }}>
            <p className="section-label" style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Photo Gallery</p>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.15, marginBottom: '1.25rem',
              textShadow: '0 2px 24px rgba(0,0,0,0.4)',
            }}>
              Inside Inch Beach House
            </h1>
            <p style={{
              fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              color: 'rgba(255,255,255,0.85)', lineHeight: 1.75,
              textShadow: '0 1px 8px rgba(0,0,0,0.3)',
            }}>
              Take a look inside and around the house — click any photo to explore in full screen.
            </p>
          </div>
        </div>

        {images.length > 1 && (
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
            {images.map((_, i) => (
              <button key={i} onClick={() => setHeroSlide(i)} style={{
                width: i === heroSlide ? '28px' : '8px', height: '8px',
                borderRadius: '4px', border: 'none', cursor: 'pointer', padding: 0,
                background: i === heroSlide ? 'var(--gold)' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.3s',
              }} />
            ))}
          </div>
        )}
      </div>

      <section className="section">
        <div className="container">
          {categories.length > 1 && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} style={{
                  padding: '0.5rem 1.25rem', borderRadius: '20px', border: '2px solid',
                  borderColor: filter === cat ? 'var(--navy)' : 'var(--border)',
                  background: filter === cat ? 'var(--navy)' : 'transparent',
                  color: filter === cat ? 'white' : 'var(--muted)',
                  fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s',
                }}>
                  {cat}
                </button>
              ))}
            </div>
          )}

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--muted)' }}>
              <h3 style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>Photos Coming Soon</h3>
              <p style={{ fontSize: '0.9rem' }}>Add images via your Sanity Studio to populate the gallery.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {filtered.map((img, i) => {
                const idx = images.indexOf(img)
                return (
                  <div key={img._id} onClick={() => setSelected(idx)} style={{
                    aspectRatio: '4/3', overflow: 'hidden', borderRadius: '10px',
                    cursor: 'pointer', position: 'relative', background: 'var(--pale)',
                    boxShadow: '0 2px 12px rgba(11,61,94,0.08)',
                  }}>
                    <img
                      src={urlFor(img.image).width(600).height(450).url()}
                      alt={img.alt || img.title || ''}
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    {img.title && (
                      <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        background: 'linear-gradient(transparent, rgba(11,61,94,0.7))',
                        padding: '2rem 1rem 0.75rem',
                        color: 'white', fontSize: '0.8rem',
                        opacity: 0, transition: 'opacity 0.3s',
                      }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                      >
                        {img.title}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && images[selected] && (
        <div onClick={() => setSelected(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(11,61,94,0.95)',
          zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
        }}>
          <button onClick={() => setSelected(null)} style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white',
            fontSize: '1.5rem', cursor: 'pointer', width: '44px', height: '44px', borderRadius: '50%',
          }}>✕</button>

          <button onClick={e => { e.stopPropagation(); navigate(-1) }} style={{
            position: 'absolute', left: '0.75rem',
            background: 'rgba(255,255,255,0.12)', border: 'none', color: 'white',
            fontSize: '2rem', cursor: 'pointer', borderRadius: '50%',
            width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}>‹</button>

          <img
            src={urlFor(images[selected].image).width(1400).url()}
            alt={images[selected].alt || ''}
            style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '8px' }}
            onClick={e => e.stopPropagation()}
          />

          <button onClick={e => { e.stopPropagation(); navigate(1) }} style={{
            position: 'absolute', right: '0.75rem',
            background: 'rgba(255,255,255,0.12)', border: 'none', color: 'white',
            fontSize: '2rem', cursor: 'pointer', borderRadius: '50%',
            width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}>›</button>

          <p style={{
            position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem',
          }}>
            {selected + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  )
}
