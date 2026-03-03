import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslations } from "../translations/translations";
import { Instagram } from "lucide-react";

export function SmartAssistant() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-100 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Side - Illustration */}
              <div className="flex-1">
                <ImageWithFallback
                  src="imgs/smart_assistant_banner.png"
                  alt="Smart Assistant Communication Channels"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>

              {/* Right Side - Content */}
              <div className="flex-1">
                <h1 className="text-4xl text-gray-600 md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                  {t.smartAssistantTitle}
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-orange-400">
                  {t.smartAssistantTagline}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t.smartAssistantDescription}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">
                      📞
                    </span>
                    <span className="text-gray-600">{t.neverMissCall}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">
                      💬
                    </span>
                    <span className="text-gray-600">{t.expandCommunication}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">
                      🌐
                    </span>
                    <span className="text-gray-600">{t.multilingualAvailability}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">
                      🎨
                    </span>
                    <span className="text-gray-600">{t.fullyBrandable}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">
                      👥
                    </span>
                    <span className="text-gray-600">{t.choosePersonas}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 text-xl">
                      📈
                    </span>
                    <span className="text-gray-600">{t.scalesWithBusiness}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Side - Features */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  {t.keyFeatures}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {t.keyFeaturesSubtitle}
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">
                      ⏰
                    </span>
                    <span className="text-gray-700">
                      {t.automatedAssistance}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">
                      ✏️
                    </span>
                    <span className="text-gray-700">
                      {t.customizableResponses}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">
                      📊
                    </span>
                    <span className="text-gray-700">
                      {t.analyticsDashboard}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">
                      🔗
                    </span>
                    <span className="text-gray-700">
                      {t.multiChannelIntegration}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">
                      🎭
                    </span>
                    <span className="text-gray-700">
                      {t.personaSelection}
                    </span>
                  </li>
                </ul>
                <a 
                  href="http://members.smartdialog-ai.com/campaign.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-500 transition-colors"
                >
                <button className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors">
                  {t.subscribeNow}
                </button>
                </a>
              </div>

              {/* Right Side - Illustration */}
              <div className="flex-1">
                <ImageWithFallback
                  src="imgs/smart_assistant_features.png"
                  alt="IVR System"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ready for More Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white bg-slate-400">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <br></br>{t.readyForMore}
            </h2>
            <p className="text-xl mb-8">
              {t.readyForMoreSubtitle}
            </p>
            <Link
              to="/contact-us"
              
            >
              <button className="bg-white text-gray-800 px-12 py-4 rounded-md hover:bg-gray-100 transition-colors font-semibold mb-12">
                {t.contactUs}
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}