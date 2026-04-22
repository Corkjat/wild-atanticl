import HeroSlider from '../components/HeroSlider'
import Testimonials from '../components/Testimonials'
import PortableText from '../components/PortableText'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { useSanityQuery } from '../hooks/useSanity'
import { queries } from '../lib/sanity'

const fallbackSlider = [
  '/images/slider-beach.jpg',
  '/images/slider-exterior.jpg',
  '/images/slider-castlegregory.jpg',
  '/images/slider-cottage.jpg',
  '/images/slider-kerry-coast.jpg',
]

export default function Landing() {
  const { data: settings } = useSiteSettings()
  const { data: page } = useSanityQuery<any>(queries.pageBySlug('home'), null)

  const sliderImages = page?.heroImages?.length ? page.heroImages : fallbackSlider
  const overlayImage = page?.heroOverlayImage || '/images/home-text.png'
  const headline = page?.headline || 'Welcome to the Wild Atlantic Way Cottage'
  const subheadline =
    page?.subheadline ||
    'A modern and newly refurbished cottage on the Dingle Peninsula, between Beenoskee mountain and the Atlantic Ocean.'
  const mapEmbedUrl =
    page?.mapEmbedUrl ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.8!2d-10.05!3d52.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzEyLjAiTiAxMMKwMDMnMDAuMCJX!5e0!3m2!1sen!2sie!4v1600000000000!5m2!1sen!2sie'

  return (
    <>
      {/* 1. Hero Banner */}
      <HeroSlider images={sliderImages} overlayImage={overlayImage} />

      {/* 2. Headline + Intro Text */}
      <div className="page-section">
        <div className="container">
          <div className="landing-intro">
            <h1 className="landing-headline">{headline}</h1>
            <p className="landing-subheadline">{subheadline}</p>
            {page?.content && page.content.length > 0 ? (
              <PortableText blocks={page.content} />
            ) : null}
          </div>
        </div>
      </div>

      {/* 3. Map Section */}
      <div className="map-section">
        <div className="container">
          <h2 className="section-title">Find our Cottage</h2>
          <div className="map-container">
            <iframe
              src={mapEmbedUrl}
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
                {settings.address.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
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
