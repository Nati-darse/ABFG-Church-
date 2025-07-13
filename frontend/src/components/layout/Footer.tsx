import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/fullgospellogo.png" alt="Church Logo" className="h-8 w-auto filter invert" />
              <span className="text-xl font-bold">Alembank Full Gospel Church</span>
            </div>
            <p className="text-gray-300 mb-4">
              A branch of Ethiopian Full Gospel Believers' Church, dedicated to spreading the Gospel 
              and building a strong Christian community in Addis Ababa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Services</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Events</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Media</Link></li>
              <li><Link to="/prayer-request" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Prayer Request</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">{t('footer.phone')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">{t('footer.email')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Alembank Full Gospel Church. All rights reserved. Made with ❤️ for the glory of God.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer