import { Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const FloatingTranslateButton = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Changer la langue"
      title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
    >
      <div className="flex items-center gap-2">
        <Globe className="w-6 h-6" />
        <span className="font-bold text-sm uppercase">
          {language === 'fr' ? 'EN' : 'FR'}
        </span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
      </div>
    </button>
  )
}

export default FloatingTranslateButton
