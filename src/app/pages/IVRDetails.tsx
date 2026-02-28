import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslations } from "../translations/translations";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ivrHeroImage from "figma:asset/895f58feca6b2a65f9f24f8fb5092c4f72dd2efb.png";

export default function IVRDetails() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const features = [
    {
      title: t.callRoutingTitle,
      description: t.callRoutingDescription,
      icon: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Person icon */}
          <circle cx="50" cy="30" r="12" fill="#6B7280" />
          <path d="M50 50 L30 70 M50 50 L70 70" stroke="#6B7280" strokeWidth="4" strokeLinecap="round"/>
          {/* Orange dots */}
          <circle cx="30" cy="75" r="6" fill="#FF6B35" />
          <circle cx="70" cy="75" r="6" fill="#FF6B35" />
        </svg>
      ),
    },
    {
      title: t.agentEscalationTitle,
      description: t.agentEscalationDescription,
      icon: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Person with headset */}
          <circle cx="50" cy="35" r="12" fill="#6B7280" />
          <ellipse cx="50" cy="55" rx="15" ry="18" fill="#6B7280" />
          <path d="M 35 35 Q 30 35 30 40" stroke="#6B7280" strokeWidth="3" fill="none"/>
          <path d="M 65 35 Q 70 35 70 40" stroke="#6B7280" strokeWidth="3" fill="none"/>
          {/* Orange arrow pointing up */}
          <path d="M 50 75 L 50 85 M 50 75 L 45 80 M 50 75 L 55 80" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: t.selfServiceTitle,
      description: t.selfServiceDescription,
      icon: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Person */}
          <circle cx="40" cy="35" r="12" fill="#6B7280" />
          <ellipse cx="40" cy="60" rx="15" ry="20" fill="#6B7280" />
          {/* Orange gear */}
          <circle cx="70" cy="50" r="14" fill="none" stroke="#FF6B35" strokeWidth="4"/>
          <circle cx="70" cy="50" r="7" fill="#FF6B35" />
          <rect x="68" y="32" width="4" height="8" fill="#FF6B35" />
          <rect x="68" y="60" width="4" height="8" fill="#FF6B35" />
          <rect x="58" y="48" width="8" height="4" fill="#FF6B35" />
          <rect x="74" y="48" width="8" height="4" fill="#FF6B35" />
        </svg>
      ),
    },
    {
      title: t.aiVirtualAgentsTitle,
      description: t.aiVirtualAgentsDescription,
      icon: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Person with headset */}
          <circle cx="35" cy="35" r="12" fill="#6B7280" />
          <ellipse cx="35" cy="55" rx="15" ry="18" fill="#6B7280" />
          <path d="M 20 35 Q 15 35 15 40" stroke="#6B7280" strokeWidth="3" fill="none"/>
          <path d="M 50 35 Q 55 35 55 40" stroke="#6B7280" strokeWidth="3" fill="none"/>
          {/* Orange gear */}
          <circle cx="72" cy="45" r="14" fill="none" stroke="#FF6B35" strokeWidth="4"/>
          <circle cx="72" cy="45" r="7" fill="#FF6B35" />
          <rect x="70" y="27" width="4" height="8" fill="#FF6B35" />
          <rect x="70" y="55" width="4" height="8" fill="#FF6B35" />
          <rect x="60" y="43" width="8" height="4" fill="#FF6B35" />
          <rect x="76" y="43" width="8" height="4" fill="#FF6B35" />
          {/* Orange arrow */}
          <path d="M 58 60 L 68 70 M 68 70 L 62 70 M 68 70 L 68 64" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: t.proactiveNotificationsTitle,
      description: t.proactiveNotificationsDescription,
      icon: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Person */}
          <circle cx="35" cy="35" r="12" fill="#6B7280" />
          <ellipse cx="35" cy="60" rx="15" ry="20" fill="#6B7280" />
          {/* Orange notification bell */}
          <path d="M 65 35 Q 65 25 75 25 Q 85 25 85 35 L 85 50 Q 85 55 82 58 L 68 58 Q 65 55 65 50 Z" fill="#FF6B35"/>
          <rect x="72" y="58" width="6" height="4" rx="2" fill="#FF6B35"/>
          <circle cx="75" cy="20" r="3" fill="#FF6B35"/>
          {/* Orange arrow */}
          <path d="M 58 65 L 68 75 M 68 75 L 62 75 M 68 75 L 68 69" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: t.emergencyNotificationsTitle,
      description: t.emergencyNotificationsDescription,
      icon: (
        <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Person */}
          <circle cx="35" cy="35" r="12" fill="#6B7280" />
          <ellipse cx="35" cy="60" rx="15" ry="20" fill="#6B7280" />
          {/* Orange alert icon */}
          <rect x="65" y="30" width="25" height="25" rx="3" fill="#FF6B35"/>
          <path d="M 77.5 38 L 77.5 45 M 77.5 50 L 77.5 51" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          {/* Orange arrow */}
          <path d="M 58 65 L 68 75 M 68 75 L 62 75 M 68 75 L 68 69" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="bg-gray-600 text-white p-8 lg:p-12 rounded-lg">
              <h1 className="text-sm uppercase tracking-wider mb-6">
                {t.ivrPageTitle}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                {t.ivrPageHeading}
              </h2>
              <p className="text-gray-100 leading-relaxed">
                {t.ivrPageDescription}
              </p>
            </div>

            {/* Right Side - Illustration */}
            <div className="relative">
              <ImageWithFallback
                src={ivrHeroImage}
                alt="IVR AI Assistant Illustration"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm uppercase tracking-wider text-gray-600 mb-12">
            {t.howCanIvrHelp}
          </h2>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                {/* Card Header */}
                <div className="bg-gray-600 text-white px-6 py-4 text-center font-semibold">
                  {feature.title}
                </div>

                {/* Icon Section */}
                <div className="bg-orange-50 py-12 flex items-center justify-center">
                  {feature.icon}
                </div>

                {/* Description Section */}
                <div className="bg-gray-600 text-white px-6 py-8 flex-1">
                  <p className="text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">
            {t.feelingExcited}
          </h2>
          <p className="text-gray-200 mb-8">
            {t.findHowWeCanHelp}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-gray-800 px-12 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            {t.contactUs}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}