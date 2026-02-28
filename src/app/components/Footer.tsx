import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <footer className="bg-slate-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <svg 
              className="w-6 h-6" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Copyright and Links */}
        <div className="text-center space-y-4">
          <p className="text-sm">
            {t.copyright}
          </p>
          <p className="text-xs text-gray-300">
            {t.poweredBy}
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-orange-400 transition-colors">
              {t.terms}
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              {t.privacy}
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}