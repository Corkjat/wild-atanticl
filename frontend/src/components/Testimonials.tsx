import { useSanityQuery } from '../hooks/useSanity'

interface Testimonial {
  _id: string
  name: string
  location: string
  text: string
  rating: number
}

const fallbackTestimonials: Testimonial[] = [
  {
    _id: '1',
    name: 'Sarah & John',
    location: 'London, UK',
    text: "What an absolutely stunning cottage! The views from the back patio are breathtaking - looking out over the green fields down to Lough Gill. The cottage itself is beautifully renovated and has everything you need. Brandon Bay beach is just a short walk away. We'll definitely be back!",
    rating: 5,
  },
  {
    _id: '2',
    name: 'Michael O\'Brien',
    location: 'Dublin, Ireland',
    text: "A perfect base for exploring the Dingle Peninsula. The cottage is modern, warm and very comfortable. Mary was an excellent host and provided great recommendations for local restaurants and activities. The location is ideal - close to the beach and the village of Castlegregory.",
    rating: 5,
  },
  {
    _id: '3',
    name: 'Hans & Greta',
    location: 'Munich, Germany',
    text: "We spent a wonderful week at the Wild Atlantic Way Cottage. The cottage is exactly as described - clean, well-equipped and in a fantastic location. We enjoyed surfing at Brandon Bay, hiking on Mount Brandon and visiting Dingle. Highly recommended!",
    rating: 5,
  },
]

const query = `*[_type == "testimonial"] | order(_createdAt desc){
  _id, name, location, text, rating
}`

export default function Testimonials() {
  const { data: testimonials } = useSanityQuery<Testimonial[]>(query, fallbackTestimonials)

  return (
    <div className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Guests Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t._id} className="testimonial-card">
              <div className="testimonial-stars">
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <blockquote className="testimonial-text">
                "{t.text}"
              </blockquote>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                {t.location && <span> — {t.location}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
