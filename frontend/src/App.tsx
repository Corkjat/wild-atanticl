import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import TheCottage from './pages/TheCottage'
import Activities from './pages/Activities'
import Gallery from './pages/Gallery'
import Rates from './pages/Rates'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Enquiry from './pages/Enquiry'

function App() {
  return (
    <div className="site">
      <Header />
      <main className="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/castlegregory-house-rental" element={<TheCottage />} />
          <Route path="/things-to-do-in-castlegregory" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/our-blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/make-an-enquiry" element={<Enquiry />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
