import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Events from './pages/Events'
import Media from './pages/Media'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import PrayerRequest from './pages/PrayerRequest'
import SEO from './components/common/SEO'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <SEO />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/events" element={<Events />} />
                <Route path="/media" element={<Media />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/prayer-request" element={<PrayerRequest />} />
              </Routes>
            </main>
            <Footer />
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'var(--toast-bg)',
                  color: 'var(--toast-color)',
                },
              }}
            />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App