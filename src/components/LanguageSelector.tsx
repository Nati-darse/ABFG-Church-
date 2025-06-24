import React, { useState, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('English')
  const [isTranslateLoaded, setIsTranslateLoaded] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' }
  ]

  useEffect(() => {
    // Check if Google Translate is already loaded
    if (window.google && window.google.translate) {
      setIsTranslateLoaded(true)
      return
    }

    // Load Google Translate script only if not already loaded
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script')
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.head.appendChild(script)

      // Initialize Google Translate
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,am',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
              multilanguagePage: true
            },
            'google_translate_element'
          )
          setIsTranslateLoaded(true)
        }
      }
    }
  }, [])

  const changeLanguage = (langCode: string, langName: string) => {
    setCurrentLanguage(langName)
    setIsOpen(false)

    // Wait a bit for Google Translate to be ready
    setTimeout(() => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
      if (selectElement) {
        selectElement.value = langCode === 'en' ? '' : langCode
        selectElement.dispatchEvent(new Event('change', { bubbles: true }))
      }
    }, 100)
  }

  return (
    <div className="relative">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      {/* Custom Language Selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 hover:bg-white rounded-lg transition-colors text-gray-800 shadow-md"
        >
          <Globe size={18} />
          <span className="text-sm font-medium">{currentLanguage}</span>
          <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code, lang.name)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    currentLanguage === lang.name ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-gray-900 dark:text-white font-medium">{lang.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default LanguageSelector