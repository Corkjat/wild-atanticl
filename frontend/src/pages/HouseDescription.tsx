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

const fallbackFeatures = [
  '3 rooms en-suite', 'Sleeps up to 6 people', 'Shampoo supplied', 'Free Wi-Fi',
  'Free to air Sky TV channels', 'Wheelchair accessible', 'Travel Cot available',
  'Unlimited Super-fast fibre broadband throughout the cottage',
]

export default function HouseDescription() {
  const { data: page } = useSanityQuery<any>(queries.pageBySlug('house-description'), null)

  const sliderImages = page?.heroImages?.length ? page.heroImages : fallbackSliderImages
  const overlayImage = page?.heroOverlayImage || '/images/perfect-home-text.png'
  const features = page?.features?.length ? page.features : fallbackFeatures
  const notices = page?.notices?.length ? page.notices : [
    'Wild Atlantic Way Cottage is a non-smoking household. Strictly no pets allowed. Strictly no hen/stag parties. Additional charges (which are metered) apply for heating and electricity.'
  ]

  return (
    <>
      <HeroSlider images={sliderImages} overlayImage={overlayImage} />

      <div className="page-section">
        <div className="container">
          <div className="two-col">
            <div className="col-main">
              <h2 className="section-title">The Cottage</h2>

              {page?.content ? (
                <PortableText blocks={page.content} />
              ) : (
                <>
                  <p>
                    The Wild Atlantic Way Cottage has undergone a major refurbishment, culminating in a
                    very bright, stylish and bright dwelling. It consists of a spacious dining/living
                    room, three bedrooms with en-suite facilities, and can sleep up to 6 people. Two
                    rooms have double beds. The third room has two single beds. Please note that these
                    two single beds can be linked to form a super king bed. For the super king bed
                    please request in advance.
                  </p>
                  <p style={{ marginTop: 15 }}>
                    All of the rooms are tastefully decorated and finished to a very high standard.
                    There is a large bright kitchen which encompasses all modern facilities. The cottage
                    is well insulated and is very warm. It is centrally heated with an eco-friendly oil
                    burner.
                  </p>
                  <p style={{ marginTop: 15 }}>
                    The cottage is fronted by a garden and at the side there is a vast green lawn. There
                    is plenty of space for parking at the rear. There is also an open shed to store
                    equipment etc. If you want your equipment, i.e. surfboards, fishing rods, golf
                    clubs, a key will be provided to have them secured in a locked shed. There is also
                    an outdoor tap to wash down wet-suits and we also have a special wetsuit dryer
                    available... ideal for your Castlegregory self-catering holiday!
                  </p>
                </>
              )}

              <h3 style={{ marginTop: 25, marginBottom: 10, fontSize: 16, color: '#333' }}>
                Features include:
              </h3>
              <div className="features-list">
                {features.map((f: string) => <span key={f}>{f}</span>)}
              </div>

              {notices.map((n: string, i: number) => (
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
