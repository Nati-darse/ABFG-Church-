import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Events from './pages/Events'
import Media from './pages/Media'
import PrayerRequests from './pages/PrayerRequests'
import Contact from './pages/Contact'
import Donations from './pages/Donations'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/media" element={<Media />} />
          <Route path="/prayer-requests" element={<PrayerRequests />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App