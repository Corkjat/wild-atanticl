import { Link } from 'react-router-dom'
import { urlFor } from '../lib/sanity'

interface SidebarProps {
  mapImage?: any
}

export default function Sidebar({ mapImage }: SidebarProps) {
  const mapSrc = mapImage ? urlFor(mapImage).width(300).url() : '/images/map.jpg'

  return (
    <div className="col-sidebar">
      <h2 className="section-title" style={{ textAlign: 'left' }}>
        Find our Cottage
      </h2>
      <div className="sidebar-map">
        <a
          href="https://maps.google.com/?q=Farrantooleen,+Stradbally,+Castlegregory,+Kerry,+Ireland"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mapSrc} alt="Find our Cottage" />
        </a>
      </div>
      <Link to="/enquiry" className="btn-enquiry">
        MAKE AN ENQUIRY
      </Link>
    </div>
  )
}
