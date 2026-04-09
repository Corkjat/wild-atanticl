import HeroSlider from '../components/HeroSlider'
import Sidebar from '../components/Sidebar'
import PortableText from '../components/PortableText'
import { useSanityQuery } from '../hooks/useSanity'
import { queries } from '../lib/sanity'

const fallbackSliderImages = [
  '/images/slider-beach.jpg',
  '/images/slider-exterior.jpg',
  '/images/slider-castlegregory.jpg',
  '/images/slider-cottage.jpg',
  '/images/slider-kerry-coast.jpg',
]

export default function Home() {
  const { data: page } = useSanityQuery<any>(queries.pageBySlug('home'), null)

  const sliderImages = page?.heroImages?.length ? page.heroImages : fallbackSliderImages
  const overlayImage = page?.heroOverlayImage || '/images/home-text.png'
  const sidebarMap = page?.sidebarMap || null

  // Split content into welcome section and brandon bay section
  const content = page?.content || []
  const brandonIndex = content.findIndex((b: any) =>
    b.children?.some((c: any) => c.text?.includes('Brandon Bay'))
  )
  const welcomeContent = brandonIndex > 0 ? content.slice(0, brandonIndex) : content
  const brandonContent = brandonIndex > 0 ? content.slice(brandonIndex) : []

  return (
    <>
      <HeroSlider images={sliderImages} overlayImage={overlayImage} />

      <div className="page-section">
        <div className="container">
          <div className="two-col">
            <div className="col-main">
              {page ? (
                <div className="home-welcome-content">
                  <PortableText blocks={welcomeContent} />
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 26, color: '#333', marginBottom: 20 }}>
                    Welcome to the Wild Atlantic Way Cottage
                  </h2>
                  <p>
                    Wild Atlantic Way Cottage is a modern and newly refurbished cottage offering the
                    perfect location to enjoy the holiday of your dreams. Nestled on the Dingle
                    Peninsula, between Beenoskee mountain and the Atlantic Ocean, this dwelling is
                    perfectly located on the road to the beach.
                  </p>
                </>
              )}

              <div className="image-row">
                <a href="/images/bedroom.jpg"><img src="/images/bedroom.jpg" alt="Wild Atlantic Way Cottage bedroom" /></a>
                <a href="/images/kitchen.jpg"><img src="/images/kitchen.jpg" alt="Wild Atlantic Way Cottage kitchen" /></a>
                <a href="/images/sitting-room.jpg"><img src="/images/sitting-room.jpg" alt="Wild Atlantic Way Cottage sitting room" /></a>
                <a href="/images/exterior.jpg"><img src="/images/exterior.jpg" alt="Wild Atlantic Way Cottage exterior" /></a>
              </div>
            </div>
            <Sidebar mapImage={sidebarMap} />
          </div>
        </div>
      </div>

      {brandonContent.length > 0 && (
        <div className="brandon-section">
          <div className="container">
            <PortableText blocks={brandonContent} />
          </div>
        </div>
      )}

      {!page && (
        <div className="brandon-section">
          <div className="container">
            <h2>Brandon Bay</h2>
            <p>Brandon Bay Beach is a surfers paradise. Whether your pursuit is wind-surfing, kite-surfing or board-surfing, you can test your skill and endurance against the vibrant and relentless waves that rush onto the shore of Brandon Bay Beach, Ireland's longest sandy beach.</p>
          </div>
        </div>
      )}
    </>
  )
}
