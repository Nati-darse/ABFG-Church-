import React from 'react'
import { Link } from 'react-router-dom'
import { Church, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-gold-400" />
              <span className="text-xl font-bold">Alembank FGC</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A branch of Ethiopian Full Gospel Believers' Church, serving the community in Addis Ababa with love, faith, and hope.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-white transition-colors">Media</Link></li>
              <li><Link to="/prayer-requests" className="text-gray-300 hover:text-white transition-colors">Prayer Requests</Link></li>
            </ul>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Service Times</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gold-400" />
                <div>
                  <p className="font-medium">Sunday Service</p>
                  <p className="text-gray-300 text-sm">9:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gold-400" />
                <div>
                  <p className="font-medium">Wednesday Prayer</p>
                  <p className="text-gray-300 text-sm">6:00 PM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gold-400" />
                <div>
                  <p className="font-medium">Friday Youth</p>
                  <p className="text-gray-300 text-sm">7:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-gold-400 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-300 text-sm">Alembank, Addis Ababa<br />Ethiopia</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gold-400" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">+251 11 XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gold-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300 text-sm">info@alembankfgc.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Alembank Full Gospel Church. All rights reserved. Made with ❤️ for the glory of God.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer