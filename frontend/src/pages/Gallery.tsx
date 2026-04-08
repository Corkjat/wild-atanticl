import { useState } from 'react'

const cottageImages = [
  { src: '/images/gallery/wild-atlantic-way-cottage-exterior-2.jpg', alt: 'Wild Atlantic Way Cottage exterior' },
  { src: '/images/gallery/wild-atlantic-way-cottage-9.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-11.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-10.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-8.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-view.jpg', alt: 'Wild Atlantic Way Cottage view' },
  { src: '/images/gallery/wild-atlantic-way-cottage-7.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-6.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-4.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-2.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-3.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-14.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-13.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/sitting-room.jpg', alt: 'Wild Atlantic Way Cottage sitting room' },
  { src: '/images/gallery/wild-atlantic-way-cottage-sitting-room-2.jpg', alt: 'Wild Atlantic Way Cottage sitting room' },
  { src: '/images/gallery/wild-atlantic-way-cottage-living-room-2.jpg', alt: 'Wild Atlantic Way Cottage living room' },
  { src: '/images/kitchen.jpg', alt: 'Wild Atlantic Way Cottage kitchen' },
  { src: '/images/gallery/wild-atlantic-way-cottage-living-room.jpg', alt: 'Wild Atlantic Way Cottage living room' },
  { src: '/images/gallery/wild-atlantic-way-cottage-bedroom-4.jpg', alt: 'Wild Atlantic Way Cottage bedroom' },
  { src: '/images/cottage-bedroom-detail.jpg', alt: 'Wild Atlantic Way Cottage bedroom' },
  { src: '/images/gallery/wild-atlantic-way-cottage-bedroom-3.jpg', alt: 'Wild Atlantic Way Cottage bedroom' },
  { src: '/images/gallery/wild-atlantic-way-cottage-bathroom.jpg', alt: 'Wild Atlantic Way Cottage bathroom' },
  { src: '/images/gallery/gallery7.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-entrance-hall.jpg', alt: 'Wild Atlantic Way Cottage entrance hall' },
  { src: '/images/gallery/wild-atlantic-way-cottage-patio-2.jpg', alt: 'Wild Atlantic Way Cottage patio' },
  { src: '/images/gallery/wild-atlantic-way-cottage-relaxation.jpg', alt: 'Wild Atlantic Way Cottage relaxation' },
  { src: '/images/gallery/wild-atlantic-way-cottage-rear.jpg', alt: 'Wild Atlantic Way Cottage rear' },
  { src: '/images/gallery/wild-atlantic-way-cottage-patio.jpg', alt: 'Wild Atlantic Way Cottage patio' },
  { src: '/images/gallery/wild-atlantic-way-cottage-aerial-2.jpg', alt: 'Wild Atlantic Way Cottage aerial' },
  { src: '/images/gallery/wild-atlantic-way-cottage-entrance.jpg', alt: 'Wild Atlantic Way Cottage entrance' },
  { src: '/images/gallery/gallery1.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery29.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery28.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery13.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery3.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery2.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery12.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/Wild-Atlantic-Way-Cottage-detail.jpg', alt: 'Wild Atlantic Way Cottage detail' },
  { src: '/images/gallery/wild-atlantic-way-cottage-bedroom.jpg', alt: 'Wild Atlantic Way Cottage bedroom' },
  { src: '/images/gallery/gallery20.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery24.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery22.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery26.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/Wild-Atlantic-Way-Cottage-door.jpg', alt: 'Wild Atlantic Way Cottage door' },
  { src: '/images/gallery/gallery42.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery47.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery46.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery45.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery48.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery43.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery41.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/Wild-Atlantic-Way-Cottage-patio-drinks.jpg', alt: 'Wild Atlantic Way Cottage patio drinks' },
  { src: '/images/gallery/gallery35.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery34.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/gallery33.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-exterior.jpg', alt: 'Wild Atlantic Way Cottage exterior' },
  { src: '/images/gallery/wild-atlantic-way-cottage-5.jpg', alt: 'Wild Atlantic Way Cottage' },
  { src: '/images/gallery/wild-atlantic-way-cottage-1.jpg', alt: 'Wild Atlantic Way Cottage' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <div className="page-section">
        <div className="container-wide">
          <h2 className="section-title">Cottage Gallery</h2>
          <p style={{ textAlign: 'center', marginBottom: 30 }}>
            click on any image below to view a larger version.
          </p>

          <div className="gallery-grid">
            {cottageImages.map((img) => (
              <a
                key={img.src}
                href={img.src}
                onClick={(e) => {
                  e.preventDefault()
                  setLightbox(img.src)
                }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </a>
            ))}
          </div>

          <h3 className="gallery-section-title">The Local Area &amp; Activities</h3>
          {/* Local area images would go here - using placeholder text */}
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
