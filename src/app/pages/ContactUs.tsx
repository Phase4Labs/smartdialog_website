import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslations } from "../translations/translations";
import { Mail, MapPin, Phone, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info.ts";

export function ContactUs() {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a5bf24/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        newsletter: false,
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.contactPageTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contactHeading}
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Contact Form */}
              <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
                  {t.contactSubheading}
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t.nameLabel}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t.emailLabel}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      {t.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder={t.messageLabel}
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="newsletter"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-orange-500 cursor-pointer"
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-gray-700 text-sm cursor-pointer"
                    >
                      {t.signUpNewsletter}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-3 px-8 rounded-md hover:bg-gray-900 transition-colors font-semibold shadow-md hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.928l3-2.636A7.962 7.962 0 016 17.291z"
                        />
                      </svg>
                    ) : (
                      t.sendButton
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <p className="text-green-500 text-xs text-center">
                      {t.messageSent}
                    </p>
                  )}

                  {submitStatus === "error" && (
                    <p className="text-red-500 text-xs text-center">
                      {errorMessage}
                    </p>
                  )}

                  <p className="text-gray-500 text-xs text-center">
                    {t.privacyNotice}
                  </p>
                </form>
              </div>

              {/* Right Side - Contact Information */}
              <div className="space-y-6">
                {/* Contact Information Card */}
                <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t.contactInformation}
                  </h3>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      {t.mailAddress}
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <a 
                      href="mailto:contact@smartdialog-ai.com"
                      className="text-gray-700 hover:text-orange-500 transition-colors"
                    >
                      {t.emailAddress}
                    </a>
                  </div>

                  {/*<div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t.callOrSMS}</p>
                  </div> */}
                </div>

                {/* WhatsApp Card */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
                  <a
                    href="https://wa.me/+16573780660"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 text-lg font-semibold"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {t.messageWhatsApp}
                  </a>
                </div>

                {/* Hours Card */}
                <div className="bg-slate-600 text-white rounded-lg shadow-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-orange-400" />
                    <h3 className="text-2xl font-bold">
                      {t.hours}
                    </h3>
                  </div>
                  <p className="text-lg mb-2">{t.openToday}</p>
                  <p className="text-sm text-gray-300">
                    {t.allHoursCST}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}