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
    // Load Google Translate script
    const script = document.createElement('script')
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
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

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="translate.google.com"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  const changeLanguage = (langCode: string, langName: string) => {
    setCurrentLanguage(langName)
    setIsOpen(false)

    if (isTranslateLoaded && window.google && window.google.translate) {
      const translateElement = window.google.translate.TranslateElement.getInstance()
      if (translateElement) {
        if (langCode === 'en') {
          // Reset to original language
          const select = document.querySelector('.goog-te-combo') as HTMLSelectElement
          if (select) {
            select.value = ''
            select.dispatchEvent(new Event('change'))
          }
        } else {
          // Translate to selected language
          const select = document.querySelector('.goog-te-combo') as HTMLSelectElement
          if (select) {
            select.value = langCode
            select.dispatchEvent(new Event('change'))
          }
        }
      }
    }
  }

  return (
    <div className="relative">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>
      
      {/* Custom Language Selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
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
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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