import HeroSlider from '../components/HeroSlider'
import Sidebar from '../components/Sidebar'

const sliderImages = [
  '/images/slider-beach.jpg',
  '/images/slider-exterior.jpg',
  '/images/slider-castlegregory.jpg',
  '/images/slider-cottage.jpg',
  '/images/slider-kerry-coast.jpg',
]

export default function Home() {
  return (
    <>
      <HeroSlider images={sliderImages} overlayImage="/images/home-text.png" />

      <div className="page-section">
        <div className="container">
          <div className="two-col">
            <div className="col-main">
              <h2
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: 26,
                  color: '#333',
                  marginBottom: 20,
                }}
              >
                Welcome to the Wild Atlantic Way Cottage
              </h2>

              <p>
                Wild Atlantic Way Cottage is a modern and newly refurbished cottage offering the
                perfect location to enjoy the holiday of your dreams. Nestled on the Dingle
                Peninsula, between Beenoskee mountain and the Atlantic Ocean, this dwelling is
                perfectly located on the road to the beach. The Cottage presents a golden
                opportunity to absorb the natural and stunning beauty of its surroundings. If you
                wish to have a nice and peaceful holiday with a variety of tranquil walks, and at
                the same time having the choice to enjoy the amenities of the area, then this is the
                place for you.
              </p>

              <p style={{ marginTop: 15 }}>
                A picturesque view awaits you at the Wild Atlantic Way Cottage. Sit and relax by the
                picnic table on the patio at the rear of the cottage. Absorb the sounds of nature
                and soak up the beauty that generates from the beautiful green pastures that roll
                down to a fresh water lake, Lough Gill. Lough Gill is a bird sanctuary and from a
                distance you can see the many swans who have made this habitat their home. This lake
                is unique because of its very close proximity to the Atlantic Ocean. The only
                barrier to the sea, are the natural sand-hills.
              </p>

              <div className="image-row">
                <a href="/images/bedroom.jpg" onClick={(e) => e.preventDefault()}>
                  <img src="/images/bedroom.jpg" alt="Wild Atlantic Way Cottage bedroom" />
                </a>
                <a href="/images/kitchen.jpg" onClick={(e) => e.preventDefault()}>
                  <img src="/images/kitchen.jpg" alt="Wild Atlantic Way Cottage kitchen" />
                </a>
                <a href="/images/sitting-room.jpg" onClick={(e) => e.preventDefault()}>
                  <img src="/images/sitting-room.jpg" alt="Wild Atlantic Way Cottage sitting room" />
                </a>
                <a href="/images/exterior.jpg" onClick={(e) => e.preventDefault()}>
                  <img src="/images/exterior.jpg" alt="Wild Atlantic Way Cottage exterior" />
                </a>
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </div>

      <div className="brandon-section">
        <div className="container">
          <h2>Brandon Bay</h2>

          <p>
            Brandon Bay Beach is a surfers paradise. Whether your pursuit is wind-surfing,
            kite-surfing or board-surfing, you can test your skill and endurance against the vibrant
            and relentless waves that rush onto the shore of Brandon Bay Beach, Ireland's longest
            sandy beach. This is virtually on your doorstep and the cottage has a direct access to
            the beach, which is only a ten minute walk away.
          </p>

          <p>
            In the Maharees Peninsula the highly reputable{' '}
            <a href="https://www.jamieknox.com/" target="_blank" rel="noopener noreferrer">
              Jamie Knox Watersports
            </a>{' '}
            offers a wide variety of activities, including surfing lessons, and has a special kiddies
            club. He supplies the best of surfing equipment and accessories.
          </p>

          <p>
            If you are not a water enthusiast, you can take the opportunity of walking along the
            beach and experience the serenity and rumble of the ocean as it embraces the sandy shore.
            On your return walk from the beach, you will view the surroundings from a different
            perspective. The Beenoskee mountain has a commanding presence as it towers over the
            lovely and tiny little village of Stradbally.
          </p>

          <p>
            One of the great advantages of staying in The Wild Atlantic Way Cottage is that the
            nearest pub and restaurant is only a two-minute walk. Further afield, there are other
            pubs and restaurants within a short driving distance. The village of Castlegregory, which
            also has a large supermarket, is only five minutes by car.
          </p>
        </div>
      </div>
    </>
  )
}
