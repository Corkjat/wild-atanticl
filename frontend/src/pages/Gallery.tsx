import { useState, useEffect } from 'react'
import { client, urlFor } from '../lib/sanity'

export default function Gallery() {
  const [images, setImages] = useState<any[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    client.fetch(`*[_type == "galleryImage"] | order(order asc){ _id, title, image, alt, category }`)
      .then(setImages)
      .catch(() => {})
  }, [])

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
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Photo Gallery</p>
          <h1 className="section-title" style={{ color: 'white', fontFamily: 'var(--font-heading)' }}>Gallery</h1>
          <p style={{ maxWidth: '480px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            Take a look inside and around Inch Beach House.
          </p>
        </div>
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
            position: 'absolute', left: '1rem',
            background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white',
            fontSize: '1.8rem', cursor: 'pointer', padding: '0.5rem 1rem', borderRadius: '8px',
          }}>‹</button>

          <img
            src={urlFor(images[selected].image).width(1400).url()}
            alt={images[selected].alt || ''}
            style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '8px' }}
            onClick={e => e.stopPropagation()}
          />

          <button onClick={e => { e.stopPropagation(); navigate(1) }} style={{
            position: 'absolute', right: '1rem',
            background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white',
            fontSize: '1.8rem', cursor: 'pointer', padding: '0.5rem 1rem', borderRadius: '8px',
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
