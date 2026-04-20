import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import HouseDescription from './pages/HouseDescription'
import Activities from './pages/Activities'
import Gallery from './pages/Gallery'
import Enquiry from './pages/Enquiry'

function App() {
  return (
    <div className="site">
      <Header />
      <main className="site-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/house-description" element={<HouseDescription />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
