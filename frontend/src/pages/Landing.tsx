import HeroSlider from '../components/HeroSlider'
import Testimonials from '../components/Testimonials'
import { useSiteSettings } from '../hooks/useSiteSettings'

const sliderImages = [
  '/images/slider-beach.jpg',
  '/images/slider-exterior.jpg',
  '/images/slider-castlegregory.jpg',
  '/images/slider-cottage.jpg',
  '/images/slider-kerry-coast.jpg',
]

export default function Landing() {
  const { data: settings } = useSiteSettings()

  return (
    <>
      {/* 1. Hero Banner with rotating photos */}
      <HeroSlider images={sliderImages} overlayImage="/images/home-text.png" />

      {/* 2. Headline + Intro Text */}
      <div className="page-section">
        <div className="container">
          <div className="landing-intro">
            <h1 className="landing-headline">
              Welcome to the Wild Atlantic Way Cottage
            </h1>
            <p className="landing-subheadline">
              A modern and newly refurbished cottage on the Dingle Peninsula, between
              Beenoskee mountain and the Atlantic Ocean.
            </p>
            <p>
              Wild Atlantic Way Cottage offers the perfect location to enjoy the holiday of
              your dreams. Nestled on the Dingle Peninsula, this dwelling is perfectly located
              on the road to the beach. The Cottage presents a golden opportunity to absorb the
              natural and stunning beauty of its surroundings. If you wish to have a nice and
              peaceful holiday with a variety of tranquil walks, and at the same time having the
              choice to enjoy the amenities of the area, then this is the place for you.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Map Section */}
      <div className="map-section">
        <div className="container">
          <h2 className="section-title">Find our Cottage</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.8!2d-10.05!3d52.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzEyLjAiTiAxMMKwMDMnMDAuMCJX!5e0!3m2!1sen!2sie!4v1600000000000!5m2!1sen!2sie"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wild Atlantic Way Cottage Location"
            />
          </div>
        </div>
      </div>

      {/* 4. Testimonials */}
      <Testimonials />

      {/* 5. Contact Details */}
      <div className="contact-section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <p>
                Farrantooleen, Stradbally, Castlegregory,
                <br />
                Dingle Peninsula, Co Kerry, Ireland
                <br />
                {settings.eircode}
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>
                <a href={`tel:${settings.phone.replace(/\s/g, '')}`}>{settings.phone}</a>
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
