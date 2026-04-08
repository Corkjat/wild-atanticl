import { Link } from 'react-router-dom'

export default function Sidebar() {
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
          <img src="/images/map.jpg" alt="Find our Cottage" />
        </a>
      </div>
      <Link to="/make-an-enquiry" className="btn-enquiry">
        MAKE AN ENQUIRY
      </Link>
    </div>
  )
}
