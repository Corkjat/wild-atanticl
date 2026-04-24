import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import HouseDescription from './pages/HouseDescription'
import Activities from './pages/Activities'
import Gallery from './pages/Gallery'
import Enquiry from './pages/Enquiry'
import './styles/global.css'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/house" element={<HouseDescription />} />
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
