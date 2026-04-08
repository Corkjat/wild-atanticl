import HeroSlider from '../components/HeroSlider'

const rates = [
  { period: '21st February to 4th April', price: '€797.72' },
  { period: '4th April to 11th April', price: '€809.37' },
  { period: '11th April to 25th April', price: '€792.72' },
  { period: '25th April to 2nd May', price: '€809.37' },
  { period: '2nd May – 9th May', price: '€812.61' },
  { period: '9th May – 30th May', price: '€874.12' },
  { period: '30th May – 27th June', price: '€922.68' },
  { period: '27th June – 4th July', price: '€938.87' },
  { period: '4th July – 22th August', price: '€971.25' },
  { period: '22th August – 12th September', price: '€938.87' },
  { period: '12th September – 17th October', price: '€825.56' },
  { period: '17th October – 31st October', price: '€793.18' },
  { period: '31st October – 19th December', price: '€777.00' },
  { period: '19th December – 6th January 2027', price: '€890.34' },
]

export default function Rates() {
  return (
    <>
      <HeroSlider images={['/images/slider-kerry-coast.jpg']} />

      <div className="page-section">
        <div className="container">
          <h2 className="section-title">Our rates are as follows:</h2>

          <h3 className="rates-heading">Weekly rates 2026</h3>

          <table className="rates-table">
            <thead>
              <tr>
                <th>Period</th>
                <th>Weekly Rate</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((r) => (
                <tr key={r.period}>
                  <td>{r.period}</td>
                  <td>{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cancellation-policy">
            <h3>General Cancellation Policy</h3>
            <p>14 days prior to check-in: 50% refund</p>
            <p>7 days prior to check-in: No refund</p>
          </div>

          <p style={{ marginTop: 20 }}>
            For weekend rates and mid-week rates for minimum 3 nights stay in the off-season, please
            telephone{' '}
            <a href="tel:+353863527678">086 352 7678</a> or{' '}
            <a href="/make-an-enquiry">contact us here</a>.
          </p>
        </div>
      </div>
    </>
  )
}
