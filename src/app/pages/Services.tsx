import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslations } from "../translations/translations";
import { Instagram } from "lucide-react";

export function Services() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <Header />
      <main className="flex-1">
        {/* IVR Service Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Side - Illustration */}
              <div className="flex-1">
                <ImageWithFallback
                  src="imgs/services_ivr.png"
                  alt="AI-Powered IVR"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>

              {/* Right Side - Content */}
              <div className="flex-1">
                <h1 className="text-4xl text-gray-600 md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                  {t.ivrTitle}
                </h1>
                <h2 className="text-2xl md:text-3xl mb-6 text-orange-400">
                  {t.ivrSubtitle}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t.ivrDescription}
                </p>
                <Link to="/ivr-details">
                  <button className="bg-white text-gray-800 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold">
                    {t.learnMore}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts and Notifications Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  bg-slate-600">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              {/* Right Side - Illustration */}
              <div className="flex-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1609162554108-6490759499ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBub3RpZmljYXRpb25zJTIwbWVzc2FnaW5nJTIwYWxlcnRzfGVufDF8fHx8MTc3MjIxNjI0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Notifications and Alerts"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>

              {/* Left Side - Content */}
              <div className="flex-1 text-white">
                <h2 className="text-2xl md:text-3xl font-serif mb-4">
                  {t.alertsTitle}
                </h2>
                <h3 className="text-xl mb-6 font-semibold">
                  {t.alertsSubtitle}
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  {t.alertsDescription}
                </p>
                <button className="bg-white text-gray-800 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold">
                  {t.learnMore}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* User Authentication Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Side - Illustration */}
              <div className="flex-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762340275855-ae8f4c2c144e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXV0aGVudGljYXRpb24lMjBzZWN1cml0eSUyMHZlcmlmaWNhdGlvbnxlbnwxfHx8fDE3NzIyMTYyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="User Authentication"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 text-white">
                <h2 className="text-2xl text-gray-600  md:text-3xl font-serif mb-4">
                  {t.userAuthTitle}
                </h2>
                <h3 className="text-xl  text-gray-600 mb-6 font-semibold">
                  {t.userAuthSubtitle}
                </h3>
                <p className="text-lg  text-gray-600 leading-relaxed mb-6">
                  {t.userAuthDescription}
                </p>
                <button className="bg-white text-gray-800 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold">
                  {t.learnMore}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Ready for More Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white bg-slate-400">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              <br></br>
              {t.readyForMore}
            </h2>
            <p className="text-xl mb-8">
              {t.readyForMoreSubtitle}
            </p>
            <Link to="/contact-us">
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