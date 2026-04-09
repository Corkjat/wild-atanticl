import { Link } from 'react-router-dom'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { urlFor } from '../lib/sanity'

export default function Footer() {
  const { data: settings } = useSiteSettings()

  const wawLogoSrc = settings.wildAtlanticWayLogo
    ? urlFor(settings.wildAtlanticWayLogo).width(200).url()
    : '/images/wild-atlantic-way-logo.png'

  const footerLogoSrc = settings.footerLogo
    ? urlFor(settings.footerLogo).width(180).url()
    : '/images/footer-logo.png'

  const tripadvisorSrc = settings.tripadvisorLogo
    ? urlFor(settings.tripadvisorLogo).width(150).url()
    : '/images/tripadvisor-logo.png'

  return (
    <>
      <div className="pre-footer">
        <div className="container">
          <div className="pre-footer-logo">
            <img src={wawLogoSrc} alt="Wild Atlantic Way logo" />
          </div>
          <div className="pre-footer-contact">
            <img
              src={footerLogoSrc}
              alt="Wild Atlantic Way Cottage"
              style={{ maxWidth: 180, marginBottom: 10, display: 'block', margin: '0 auto 10px' }}
            />
            <p>
              {settings.address.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
              {' '}{settings.eircode}
            </p>
            <p>
              Tel: <a href={`tel:${settings.phone.replace(/\s/g, '')}`}>{settings.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${settings.email}`}>{settings.email}</a>
            </p>
          </div>
          <div className="pre-footer-tripadvisor">
            <a href={settings.tripadvisorUrl} target="_blank" rel="noopener noreferrer">
              <img src={tripadvisorSrc} alt="Wild Atlantic Way Cottage Tripadvisor" />
            </a>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <p>
            &copy; Wild Atlantic Way Cottage &bull; All Rights Reserved &bull;{' '}
            <Link to="/privacy-cookie-policy">Privacy &amp; Cookie Policy</Link>
          </p>
        </div>
      </footer>
    </>
  )
}
