import Sidebar from '../components/Sidebar'
import PortableText from '../components/PortableText'
import { useSanityQuery } from '../hooks/useSanity'
import { queries } from '../lib/sanity'

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
  const { data: page } = useSanityQuery<any>(queries.pageBySlug('things-to-do-in-castlegregory'), null)

  const content = page?.content || []
  const soMuchIndex = content.findIndex((b: any) =>
    b.children?.some((c: any) => c.text?.includes('So much to do'))
  )
  const topContent = soMuchIndex > 0 ? content.slice(0, soMuchIndex) : content
  const bottomContent = soMuchIndex > 0 ? content.slice(soMuchIndex) : []

  return (
    <>
      <div className="page-section">
        <div className="container">
          <div className="two-col">
            <div className="col-main">
              {page ? (
                <PortableText blocks={topContent} />
              ) : (
                <>
                  <h2 className="section-title">Things to do in Castlegregory</h2>
                  <p>In the Maharees Peninsula you can experience Scuba Diving and explore the wonders that lay under the ocean around the islands.</p>
                </>
              )}

              <div className="activities-images">
                {topImages.map((img) => (
                  <img key={img.src} src={img.src} alt={img.alt} />
                ))}
              </div>
            </div>
            <Sidebar mapImage={page?.sidebarMap} />
          </div>
        </div>
      </div>

      {bottomContent.length > 0 && (
        <div className="so-much-section">
          <div className="container">
            <PortableText blocks={bottomContent} />
          </div>
        </div>
      )}

      {!page && (
        <div className="so-much-section">
          <div className="container">
            <h2 className="section-title">So much to do!</h2>
            <p>The town of Dingle provides the gateway to more exotic scenery and leads you on to the breathtaking scenery on the Slea Head Drive.</p>
          </div>
        </div>
      )}
    </>
  )
}
