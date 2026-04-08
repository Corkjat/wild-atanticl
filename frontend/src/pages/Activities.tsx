import Sidebar from '../components/Sidebar'

const topImages = [
  { src: '/images/windsurfing-kerry.jpg', alt: 'Windsurfing Kerry' },
  { src: '/images/standing-stone.jpg', alt: 'Standing stone' },
  { src: '/images/kerry-kitesurfing.jpg', alt: 'Kerry kitesurfing' },
  { src: '/images/diving-in-kerry.jpg', alt: 'Diving in Kerry' },
  { src: '/images/paddleboarding-kerry.jpg', alt: 'Paddleboarding Kerry' },
  { src: '/images/beach-horseriding.jpg', alt: 'Beach horseriding' },
  { src: '/images/glentenassig-forest-park.jpg', alt: 'Glentenassig Forest Park' },
  { src: '/images/kitesurfing-kerry.jpg', alt: 'Kitesurfing Kerry' },
]

export default function Activities() {
  return (
    <>
      <div className="page-section">
        <div className="container">
          <div className="two-col">
            <div className="col-main">
              <h2 className="section-title">Things to do in Castlegregory</h2>

              <p>
                In the Maharees Peninsula you can experience Scuba Diving and explore the wonders
                that lay under the ocean around the islands, which are locally known as The Seven
                Hogs. Fishing off the shore of Brandon Bay Beach is another leisurely pursuit that
                can be enjoyed.
              </p>

              <p style={{ marginTop: 15 }}>
                Enjoy a horse-trek along the sandy beach and this is available at a reasonable rate
                and is supervised. See{' '}
                <a
                  href="https://www.oconnorshorseriding.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  O'Connor's Horseriding
                </a>{' '}
                for more details.
              </p>

              <p style={{ marginTop: 15 }}>
                Brandon Mountain is the country's second highest mountain and is not too far away.
                The starting point for this challenging climb is near the village of Cloghane.
              </p>

              <p style={{ marginTop: 15 }}>
                The very popular town of Dingle is a twenty-minute drive over the iconic Conor Pass.
                This is a truly and spectacular journey over the scenic and rugged terrain. You can
                stop at the waterfall and climb to the enchanting Pedlars Lake. When you reach the
                summit of the Conor Pass you can pull in at the car park and view the spectacular
                scenery of both sides of the peninsula. If you are in Dingle, you must do a boat
                trip to see Fungi the dolphin.
              </p>

              <div className="activities-images">
                {topImages.map((img) => (
                  <img key={img.src} src={img.src} alt={img.alt} />
                ))}
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </div>

      <div className="so-much-section">
        <div className="container">
          <h2 className="section-title">So much to do!</h2>

          <p>
            The town of Dingle provides the gateway to more exotic scenery and leads you on to the
            breathtaking scenery on the Slea Head Drive. Basking out in the Atlantic are the famed
            Blasket Islands. Tours are available to The Great Blasket and there are also tours for
            whale-watching. On the mainland you can visit The Blasket Island Centre, which reveals
            the rich history of the islands. In recent times, Star Wars was shot near this location.
          </p>

          <p style={{ marginTop: 15 }}>
            Due to its central location, The Wild Atlantic Way Cottage is well positioned to explore
            the famous Ring of Kerry. Also the town of Killarney is about 45 minutes in a car.
            Tralee is the county's largest town and is less than a half an hour away.
          </p>

          <p style={{ marginTop: 15 }}>
            If you are a golfing enthusiast, there is a nine-hole golf course a few minutes down the
            road. It is situated between the lake and the ocean. Bird-Watching is another pursuit
            that you can enjoy in the area. Also, there are a number of archaeological sites in the
            region.
          </p>

          <p style={{ marginTop: 15 }}>
            After experiencing the magic of The Wild Atlantic Way, there is every chance that some
            day you will want to return to relive the unforgettable memories.
          </p>
        </div>
      </div>
    </>
  )
}
