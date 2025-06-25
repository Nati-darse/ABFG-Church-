import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, Globe, ChevronDown } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.events'), href: '/events' },
    { name: t('nav.media'), href: '/media' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  const handleLanguageChange = (lang: 'en' | 'am') => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
    setIsLangOpen(false)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/cross-icon.svg" 
              alt="Church Logo" 
              className="h-8 w-8 text-primary-600 dark:text-primary-400" 
            />
            <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
              Alembank Church
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 ${
                  location.pathname === item.href ? 'text-primary-600 dark:text-primary-400 font-medium' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/prayer-request" className="btn-secondary">
                {t('nav.prayerRequest')}
              </Link>
              <Link to="/donate" className="btn-primary">
                {t('nav.donate')}
              </Link>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {/* Language Toggle */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Change language"
              >
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      language === 'en' ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : ''
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('am')}
                    className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      language === 'am' ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : ''
                    }`}
                  >
                    አማርኛ
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-primary-600 dark:text-primary-400 font-medium' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Language:</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-3 py-1 text-sm rounded ${
                      language === 'en' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange('am')}
                    className={`px-3 py-1 text-sm rounded ${
                      language === 'am' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    አማ
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link to="/prayer-request" className="btn-secondary text-center" onClick={() => setIsOpen(false)}>
                  {t('nav.prayerRequest')}
                </Link>
                <Link to="/donate" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
                  {t('nav.donate')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar