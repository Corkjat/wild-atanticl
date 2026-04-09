import HeroSlider from '../components/HeroSlider'
import { useSanityQuery } from '../hooks/useSanity'
import { queries } from '../lib/sanity'

interface Rate {
  _id: string
  year: string
  period: string
  price: string
  order: number
}

const fallbackRates: Rate[] = [
  { _id: '1', year: '2026', period: '21st February to 4th April', price: '€797.72', order: 1 },
  { _id: '2', year: '2026', period: '4th April to 11th April', price: '€809.37', order: 2 },
  { _id: '3', year: '2026', period: '11th April to 25th April', price: '€792.72', order: 3 },
  { _id: '4', year: '2026', period: '25th April to 2nd May', price: '€809.37', order: 4 },
  { _id: '5', year: '2026', period: '2nd May – 9th May', price: '€812.61', order: 5 },
  { _id: '6', year: '2026', period: '9th May – 30th May', price: '€874.12', order: 6 },
  { _id: '7', year: '2026', period: '30th May – 27th June', price: '€922.68', order: 7 },
  { _id: '8', year: '2026', period: '27th June – 4th July', price: '€938.87', order: 8 },
  { _id: '9', year: '2026', period: '4th July – 22th August', price: '€971.25', order: 9 },
  { _id: '10', year: '2026', period: '22th August – 12th September', price: '€938.87', order: 10 },
  { _id: '11', year: '2026', period: '12th September – 17th October', price: '€825.56', order: 11 },
  { _id: '12', year: '2026', period: '17th October – 31st October', price: '€793.18', order: 12 },
  { _id: '13', year: '2026', period: '31st October – 19th December', price: '€777.00', order: 13 },
  { _id: '14', year: '2026', period: '19th December – 6th January 2027', price: '€890.34', order: 14 },
]

export default function Rates() {
  const { data: rates } = useSanityQuery<Rate[]>(queries.rates, fallbackRates)

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
                <tr key={r._id}>
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
            telephone <a href="tel:+353863527678">086 352 7678</a> or{' '}
            <a href="/make-an-enquiry">contact us here</a>.
          </p>
        </div>
      </div>
    </>
  )
}
