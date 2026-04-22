import HeroSlider from '../components/HeroSlider'
import Sidebar from '../components/Sidebar'
import PortableText from '../components/PortableText'
import { useSanityQuery } from '../hooks/useSanity'
import { queries } from '../lib/sanity'

const fallbackSliderImages = [
  '/images/cottage-slider-living.jpg',
  '/images/cottage-slider-kitchen.jpg',
  '/images/cottage-slider-bedroom.jpg',
  '/images/cottage-slider-exterior.jpg',
]

export default function HouseDescription() {
  const { data: page, loading } = useSanityQuery<any>(
    queries.pageBySlug('house-description'),
    null
  )

  if (loading) {
    return (
      <div className="page-section">
        <div className="container"><p>Loading...</p></div>
      </div>
    )
  }

  const sliderImages = page?.heroImages?.length ? page.heroImages : fallbackSliderImages
  const overlayImage = page?.heroOverlayImage || '/images/perfect-home-text.png'
  const features: string[] = page?.features || []
  const notices: string[] = page?.notices || []

  return (
    <>
      <HeroSlider images={sliderImages} overlayImage={overlayImage} />

      <div className="page-section">
        <div className="container">
          <div className="two-col">
            <div className="col-main">
              <h2 className="section-title">{page?.title || 'The Cottage'}</h2>

              {page?.content && page.content.length > 0 ? (
                <PortableText blocks={page.content} />
              ) : (
                <p>Content loading...</p>
              )}

              {features.length > 0 && (
                <>
                  <h3 style={{ marginTop: 25, marginBottom: 10, fontSize: 16, color: '#333' }}>
                    Features include:
                  </h3>
                  <div className="features-list">
                    {features.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                </>
              )}

              {notices.map((n, i) => (
                <div key={i} className="notice">
                  <strong>Please note:</strong> {n}
                </div>
              ))}
            </div>
            <Sidebar mapImage={page?.sidebarMap} />
          </div>
        </div>
      </div>
    </>
  )
}
