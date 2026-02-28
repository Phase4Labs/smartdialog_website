import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ChevronDown, User } from 'lucide-react';
import { useLanguage, type Language  } from '../contexts/LanguageContext';
import { useTranslations } from '../translations/translations';

// Placeholder logo and flags - replace with your actual assets
const logoSrc = '/imgs/logo.png';
//const usFlag = 'https://images.unsplash.com/photo-1634587621091-2c3a46ad5fa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVU0ElMjBBbWVyaWNhbiUyMGZsYWd8ZW58MXx8fHwxNzcyMjIxNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080';
//const esFlag = 'https://images.unsplash.com/photo-1710803135809-55a1a607155f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcGFpbiUyMFNwYW5pc2glMjBmbGFnfGVufDF8fHx8MTc3MjIyMTU1OHww&ixlib=rb-4.1.0&q=80&w=1080';
//const ptFlag = 'https://images.unsplash.com/photo-1598284252498-999b7bbe8e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb3J0dWdhbCUyMGZsYWd8ZW58MXx8fHwxNzcyMjIxNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080';

export function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslations(language);
  const location = useLocation();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'pt', label: 'Português' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoSrc} alt="Smart Dialog" className="h-12 drop-shadow-md hover:drop-shadow-lg transition-all duration-300 hover:scale-105" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={location.pathname === '/' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500 transition-colors'}>
              {t.home}
            </Link>
            <Link to="/smart-assistant" className={location.pathname === '/smart-assistant' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500 transition-colors'}>
              {t.smartAssistant}
            </Link>
            <Link to="/services" className={location.pathname === '/services' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500 transition-colors'}>
              {t.services}
            </Link>
            <Link to="/contact-us" className={location.pathname === '/contact-us' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500 transition-colors'}>
              {t.contact}
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-gray-700 hover:text-orange-500 transition-colors flex items-center gap-2"
              >
                <img src='/icons/language_small_icon.png' alt={currentLanguage?.label} className="w-5 h-5" />
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[180px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 ${
                        language === lang.code ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="http://members.smartdialog-ai.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <User className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}