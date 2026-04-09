import { useState } from 'react'
import { useSanityQuery } from '../hooks/useSanity'
import { queries, urlFor } from '../lib/sanity'

// Static fallback images
import galleryDataStatic from '../data/galleryFallback'

interface GalleryImage {
  _id: string
  title: string
  image: any
  alt: string
  category: string
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const { data: sanityImages } = useSanityQuery<GalleryImage[]>(queries.galleryImages, [])

  // Use Sanity images if available, otherwise static
  const useSanity = sanityImages.length > 0
  const cottageImages = useSanity
    ? sanityImages.filter((i) => i.category === 'cottage' || !i.category)
    : galleryDataStatic

  return (
    <>
      <div className="page-section">
        <div className="container-wide">
          <h2 className="section-title">Cottage Gallery</h2>
          <p style={{ textAlign: 'center', marginBottom: 30 }}>
            click on any image below to view a larger version.
          </p>

          <div className="gallery-grid">
            {cottageImages.map((img: any, i: number) => {
              const src = useSanity
                ? urlFor(img.image).width(400).height(267).url()
                : img.src
              const fullSrc = useSanity
                ? urlFor(img.image).width(1200).url()
                : img.src
              const alt = img.alt || img.title || 'Wild Atlantic Way Cottage'

              return (
                <a
                  key={useSanity ? img._id : i}
                  href={fullSrc}
                  onClick={(e) => {
                    e.preventDefault()
                    setLightbox(fullSrc)
                  }}
                >
                  <img src={src} alt={alt} loading="lazy" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            &times;
          </button>
          <img src={lightbox} alt="" />
        </div>
      )}
    </>
  )
}
