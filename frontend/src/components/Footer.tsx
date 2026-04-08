import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      {/* Pre-Footer with contact info */}
      <div className="pre-footer">
        <div className="container">
          <div className="pre-footer-logo">
            <img src="/images/wild-atlantic-way-logo.png" alt="Wild Atlantic Way logo" />
          </div>
          <div className="pre-footer-contact">
            <img
              src="/images/footer-logo.png"
              alt="Wild Atlantic Way Cottage"
              style={{ maxWidth: 180, marginBottom: 10, display: 'block', margin: '0 auto 10px' }}
            />
            <p>
              Farrantooleen, Stradbally, Castlegregory,
              <br />
              Dingle Peninsula, Co Kerry, Ireland V92 TK8K
            </p>
            <p>
              Tel: <a href="tel:+353863527678">+353 86 352 7678</a>
            </p>
            <p>
              Email: <a href="mailto:beenoskeekerry@gmail.com">beenoskeekerry@gmail.com</a>
            </p>
          </div>
          <div className="pre-footer-tripadvisor">
            <a
              href="https://www.tripadvisor.ie/VacationRentalReview-g211857-d15062162-Wild_Atlantic_Way_Cottage-Castlegregory_Dingle_Peninsula_County_Kerry.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/tripadvisor-logo.png" alt="Wild Atlantic Way Cottage Tripadvisor" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
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
