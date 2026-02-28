import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslations } from "../translations/translations";

export function HeroSection() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Illustration */}
          <div className="flex-1">
            <ImageWithFallback
              src="imgs/hero_banner.png"
              alt="Team communication illustration"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">
              {t.welcome}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
              {t.heroTitle1}
              <br />
              {t.heroTitle2}
              <br />
              {t.heroTitle3}
              <br />
              {t.heroTitle4}
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              {t.heroDescription}
            </p>
            <Link to="/services">
              <button className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors">
                {t.learnMore}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}