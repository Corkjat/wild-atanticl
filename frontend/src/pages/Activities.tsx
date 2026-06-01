import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client, urlFor } from '../lib/sanity'
import { useSEO } from '../hooks/useSEO'

const activities = [
  {
    key: 'inch-beach',
    title: 'Inch Beach', distance: '2km',
    bg: 'var(--ocean)',
    description: 'A magnificent 5km stretch of golden sand, perfect for walking, swimming, and surfing. One of the most beautiful beaches in Ireland with breathtaking views year-round.',
    items: ['Long sandy beach ideal for walking', 'Surfing and water sports', 'Stunning views year-round'],
  },
  {
    key: 'annascaul-village',
    title: 'Annascaul Village', distance: '2km',
    bg: 'var(--navy)',
    description: "A charming traditional Irish village with welcoming pubs, great food, and a relaxed atmosphere. Home to the legendary Dan Foley's bar, a true Kerry institution.",
    items: ['Traditional Irish pubs', 'Cafés and local food', 'Relaxed, welcoming atmosphere'],
  },
  {
    key: 'annascaul-lake-walk',
    title: 'Annascaul Lake Walk', distance: 'Nearby',
    bg: '#2a7d5f',
    description: 'A scenic riverside walk leading to a peaceful mountain lake surrounded by dramatic Kerry scenery. Suitable for all fitness levels and absolutely stunning on a clear day.',
    items: ['Scenic riverside trail', 'Mountain lake views', 'Suitable for all fitness levels'],
  },
  {
    key: 'dingle-peninsula',
    title: 'Dingle Peninsula', distance: '20 mins',
    bg: '#1a3d5e',
    description: "One of Ireland's most spectacular peninsulas. Drive the famous Slea Head Drive for breathtaking coastal scenery, or explore Dingle town with its restaurants, music, and culture.",
    items: ['Slea Head Drive', 'Breathtaking coastal scenery', 'Restaurants, music, and culture'],
  },
]

const outdoorActivities = [
  'Hiking & Hillwalking',
  'Cycling',
  'Horse Riding',
  'Surfing',
  'Paddleboarding',
  'Fishing',
]

export default function Activities() {
  useSEO({
    title: 'Things to Do Near Inch Beach | Dingle Peninsula, Kerry',
    description: 'Discover the best activities near Inch Beach House — surfing, Slea Head Drive, Dingle town pubs, Conor Pass and walking trails. Stay at Inch Beach House.',
    canonical: 'https://inchbeachhouse.com/activities',
  })
  const [activityImages, setActivityImages] = useState<Record<string, any[]>>({})

  useEffect(() => {
    client.fetch(`*[_type == "activityImage"] | order(order asc){ activity, image, alt }`)
      .then((data: any[]) => {
        const grouped: Record<string, any[]> = {}
        data.forEach(img => {
          if (!grouped[img.activity]) grouped[img.activity] = []
          grouped[img.activity].push(img)
        })
        setActivityImages(grouped)
      })
      .catch(() => {})
  }, [])

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Explore Kerry</p>
          <h1 className="section-title" style={{ color: 'white', fontFamily: 'var(--font-heading)' }}>Activities Nearby</h1>
          <p style={{ maxWidth: '580px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
            From stunning beaches to mountain walks, traditional villages to spectacular coastal drives —
            Kerry has it all, right on your doorstep.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {activities.map((a, i) => {
              const imgs = activityImages[a.key] || []
              const img = imgs[0]
              const labelFirst = i % 2 === 0
              return (
                <div key={i} className="activity-card" style={{
                  display: 'grid',
                  gridTemplateColumns: '220px 1fr 1fr',
                  borderRadius: '16px', overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(11,61,94,0.1)',
                  minHeight: '260px',
                }}>
                  <div className="activity-card-label" style={{
                    background: a.bg, padding: '2.5rem 2rem',
                    textAlign: 'center', color: 'white',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    order: labelFirst ? 0 : 2,
                  }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{a.title}</h3>
                    <p style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.7 }}>
                      {a.distance} away
                    </p>
                  </div>
                  <div style={{ order: 1, overflow: 'hidden', background: 'var(--border)' }}>
                    {img ? (
                      <img
                        src={urlFor(img.image).width(600).height(400).fit('crop').url()}
                        alt={img.alt || a.title}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: `${a.bg}22`, minHeight: '260px' }} />
                    )}
                  </div>
                  <div className="activity-card-content" style={{
                    padding: '2.5rem 2rem', background: 'var(--pale)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    order: labelFirst ? 2 : 0,
                  }}>
                    <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.92rem' }}>{a.description}</p>
                    <ul className="check-list">
                      {a.items.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--pale)' }}>
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Get Active</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Outdoor Activities</h2>
          <div className="divider center" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.25rem' }}>
            {outdoorActivities.map((a, i) => (
              <div key={i} style={{
                background: 'white', padding: '1.5rem 1rem', borderRadius: '12px',
                textAlign: 'center', boxShadow: '0 2px 12px rgba(11,61,94,0.07)',
                borderTop: '3px solid var(--ocean)',
              }}>
                <p style={{ color: 'var(--navy)', fontSize: '0.9rem', fontWeight: 600 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-tail content sections */}
      <section className="section">
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Plan Your Days</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Explore the Dingle Peninsula</h2>
          <div className="divider center" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', maxWidth: '820px', margin: '0 auto' }}>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                Surfing lessons at Inch Beach — what to expect
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                Inch Beach faces directly into the Atlantic swell, making it one of Ireland's most consistent surf spots. The beach picks up waves year-round, with the best conditions typically from September through April. During summer, surf schools operate from the beach offering lessons and board hire for all abilities.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                The rolling, sandy-bottomed waves are forgiving for beginners and the 5km stretch means plenty of room even on busy days. Water temperatures in summer average 14–16°C, so a full wetsuit is always recommended — most surf schools include one in lesson packages.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                Staying at Inch Beach House puts you just 2km from the surf — close enough to check conditions from the window before you get in the car.{' '}
                <Link to="/enquiry" style={{ color: 'var(--ocean)', fontWeight: 600 }}>Book your stay</Link> and wake up to waves on your doorstep.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                Slea Head Drive from Inch Beach — route, distance and tips
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                The Slea Head Drive is a 30km circular route starting and ending in Dingle town, tracing the westernmost tip of the peninsula. From Inch Beach House, Dingle town is just 20 minutes by car — making this one of the easiest and most rewarding day trips you can do.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                The route passes Ventry Harbour (a sheltered beach perfect for a swim), the ancient Fahan Beehive Huts, the dramatic cliffs at Slea Head with views across to the Blasket Islands, and the village of Dunquin — one of the most westerly points in Europe. Allow at least 3–4 hours to stop and explore properly. The Blasket Islands Visitor Centre at Dunquin is well worth a stop.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                Drive the route heading westward in the late afternoon for the best light on the Blaskets.{' '}
                <Link to="/enquiry" style={{ color: 'var(--ocean)', fontWeight: 600 }}>Book your stay at Inch Beach House</Link> and make Slea Head your first full day.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                Conor Pass drive — Ireland's highest mountain road, 25 mins from Inch
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                At 456 metres, Conor Pass is the highest mountain pass in Ireland and the views from the top are genuinely breathtaking — Dingle Bay and Brandon Bay spread out below, with the Maharees Peninsula to the north and the Atlantic beyond. On a clear day you can see the Shannon Estuary. From Inch Beach House it's just 25 minutes by car.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                The road is narrow — if you meet oncoming traffic one car must reverse to a passing point — so take your time and enjoy the scenery. A small car park at the summit lets you get out and walk along the ridge. Best tackled mid-morning before the coaches arrive.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                Combine Conor Pass with a visit to Dingle town for a perfect full day out.{' '}
                <Link to="/enquiry" style={{ color: 'var(--ocean)', fontWeight: 600 }}>Make an enquiry</Link> and we'll share all our local tips on arrival.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                Best pubs in Dingle town with live traditional music
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                Dingle is one of the finest towns in Ireland for traditional music. Dick Mack's on Green Street is the most famous — a centuries-old leather workshop turned pub with a tiny snug and regular trad sessions. John Benny's on Strand Street is beloved by locals and runs sessions most evenings. An Droichead Beag ("The Small Bridge") is another stalwart, particularly lively at weekends.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                Sessions typically start around 9pm and run until midnight or later. Most pubs serve food until 9pm and the atmosphere is unhurried, warm, and full of genuine character — not a tourist performance but the real thing.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                Dingle is 20 minutes from the house — close enough for an evening out and a taxi back.{' '}
                <Link to="/enquiry" style={{ color: 'var(--ocean)', fontWeight: 600 }}>Book your Kerry break</Link> and let the music be your evening entertainment.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                Where to eat the best seafood in Dingle
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                Dingle has more excellent restaurants per head than almost anywhere in Ireland. Out of the Blue on the waterfront is the most celebrated — they serve only fish landed that morning, there is no set menu (the catch dictates the dishes daily), and they close if the boats don't go out. Booking ahead is essential. The Chart House on the Mall is a beautiful stone-walled restaurant serving fresh Kerry produce including outstanding Atlantic seafood and local lamb.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                For something more casual, Benner's Bar does excellent chowder and fish and chips. Murphy's Ice Cream on Strand Street is famous across Ireland — the brown bread ice cream is not to be missed. Annascaul village, just 2km from the house, also has good local options including the South Pole Inn (named after Annascaul native and Antarctic explorer Tom Crean).
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                <Link to="/enquiry" style={{ color: 'var(--ocean)', fontWeight: 600 }}>Book Inch Beach House</Link> and we'll share our full restaurant recommendations on arrival.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '1.35rem', marginBottom: '1rem' }}>
                Family-friendly beaches near Dingle Peninsula — distances from Inch Beach House
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                Inch Beach itself (2km from the house) is the obvious starting point — 5km of golden sand, Blue Flag status, lifeguards in summer, a beach café, and gently sloping water ideal for young children and confident swimmers alike. Dogs are welcome outside the designated bathing area.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '0.85rem', fontSize: '0.95rem' }}>
                Ventry Beach (about 25 minutes away) is a sheltered horseshoe bay with very calm water — perfect for young children and nervous swimmers. Coumeenoole Beach near Slea Head (35 minutes) is more dramatic with stunning clifftop scenery, though better suited to experienced swimmers. Banna Strand in north Kerry (45 minutes) is another long Blue Flag beach popular with families.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                Inch Beach House has a large private garden for the evenings when little ones need to run around.{' '}
                <Link to="/enquiry" style={{ color: 'var(--ocean)', fontWeight: 600 }}>Book your family holiday in Kerry</Link> — travel cot and board games available on request.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ocean)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: '1.75rem', marginBottom: '1rem' }}>
            Ready to Experience Kerry?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Enquire now and start planning your perfect getaway.
          </p>
          <Link to="/enquiry" className="btn btn-gold">Make an Enquiry</Link>
        </div>
      </section>
    </>
  )
}
