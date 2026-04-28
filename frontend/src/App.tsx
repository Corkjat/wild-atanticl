import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import HouseDescription from './pages/HouseDescription'
import Activities from './pages/Activities'
import Gallery from './pages/Gallery'
import Enquiry from './pages/Enquiry'
import './styles/global.css'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal')
      const io = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
        { threshold: 0.08 }
      )
      els.forEach(el => io.observe(el))
      return () => io.disconnect()
    }, 120)
    return () => clearTimeout(timer)
  }, [pathname])

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
