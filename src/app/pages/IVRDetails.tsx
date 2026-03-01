import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslations } from "../translations/translations";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
//import ivrHeroImage from "figma:asset/895f58feca6b2a65f9f24f8fb5092c4f72dd2efb.png";

export function IVRDetails() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const features = [
    {
      title: t.callRoutingTitle,
      description: t.callRoutingDescription,
      image: "/imgs/call_routing.png", // Update with your image filename
    },
    {
      title: t.agentEscalationTitle,
      description: t.agentEscalationDescription,
      image: "/imgs/agent_escalation.png", // Update with your image filename
    },
    {
      title: t.selfServiceTitle,
      description: t.selfServiceDescription,
      image: "/imgs/service_automation.png", // Update with your image filename
    },
    {
      title: t.aiVirtualAgentsTitle,
      description: t.aiVirtualAgentsDescription,
      image: "/imgs/virtual_agents.png", // Update with your image filename
    },
    {
      title: t.proactiveNotificationsTitle,
      description: t.proactiveNotificationsDescription,
      image: "/imgs/proactive_notifications.png", // Update with your image filename
    },
    {
      title: t.emergencyNotificationsTitle,
      description: t.emergencyNotificationsDescription,
      image: "/imgs/emergency_notifications.png", // Update with your image filename
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
                src='/imgs/ivr_details.png'
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
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-12 text-center tracking-wide">
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
                  <img
                    src={feature.image}
                    alt={feature.title}
                    
                  />
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
            to="/contact-us"
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