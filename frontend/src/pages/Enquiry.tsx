import { useState } from 'react'
import HeroSlider from '../components/HeroSlider'
import Sidebar from '../components/Sidebar'

export default function Enquiry() {
  const [showAvailability, setShowAvailability] = useState(false)

  return (
    <>
      <HeroSlider images={['/images/brandon-bay.jpg']} />

      <div className="page-section">
        <div className="container">
          <div className="two-col">
            <div className="col-main">
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Make an Enquiry
              </h2>

              <p style={{ marginBottom: 25 }}>
                Please feel free to email Mary on{' '}
                <a href="mailto:beenoskeekerry@gmail.com">beenoskeekerry@gmail.com</a> or fill out
                the short form below and she will reply to you with all the information you need.
              </p>

              <form
                className="enquiry-form"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Thank you for your enquiry! We will get back to you shortly.')
                }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label>Do you wish to enquire about availability?</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="availability"
                        value="yes"
                        onChange={() => setShowAvailability(true)}
                      />{' '}
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="availability"
                        value="no"
                        onChange={() => setShowAvailability(false)}
                      />{' '}
                      No
                    </label>
                  </div>
                </div>

                {showAvailability && (
                  <>
                    <div className="form-group">
                      <label htmlFor="arrivalDate">Preferred arrival date</label>
                      <input type="date" id="arrivalDate" name="arrivalDate" />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="nights">Number of nights</label>
                        <select id="nights" name="nights">
                          {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="guests">Number of guests</label>
                        <select id="guests" name="guests">
                          {Array.from({ length: 6 }, (_, i) => i + 1).map((n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" />
                </div>

                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </form>
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}
