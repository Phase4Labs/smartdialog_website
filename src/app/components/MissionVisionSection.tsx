import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations/translations';

export function MissionVisionSection() {
  const [showMore, setShowMore] = useState(false);
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-12 text-center tracking-wide">
          {t.whySmartDialogs}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="flex flex-col">
            <div className="bg-yellow-50 p-8 text-center rounded-t-lg">
              <div className="mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjB0ZWFtJTIwY29tbXVuaWNhdGlvbiUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzIyMTMzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Unified Communication Channels"
                  className="w-full h-40 object-cover rounded"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                {t.missionCard1Title}<br/>{t.missionCard1Title2}
              </h3>
              <p className="text-xs text-gray-700 font-semibold">
                {t.missionCard1Subtitle}<br/>{t.missionCard1Subtitle2}
              </p>
            </div>
            <div className="bg-slate-600 text-white p-6 flex-1 rounded-b-lg">
              <h4 className="font-semibold text-lg mb-4 text-center">{t.missionTitle}</h4>
              <p className="text-sm leading-relaxed">
                {t.missionText}
              </p>
            </div>
          </div>

          {/* Center Card - Together We Succeed */}
          <div className="flex flex-col">
            <div className="bg-white p-8 text-center rounded-t-lg border border-gray-200">
              <div className="mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739298061766-e2751d92e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGhpZ2glMjBmaXZlJTIwY29sbGFib3JhdGlvbiUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyMjEzMzYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Together We Succeed"
                  className="w-full h-40 object-cover rounded"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-2xl">
                {t.togetherTitle1}<br/>{t.togetherTitle2}
              </h3>
            </div>
            <div className="bg-slate-600 text-white p-6 flex-1 rounded-b-lg">
              <p className="text-sm leading-relaxed mb-4">
                {t.togetherText1}
              </p>
              {showMore && (
                <p className="text-sm leading-relaxed mb-4">
                  {t.togetherText2}
                </p>
              )}
              <button 
                onClick={() => setShowMore(!showMore)}
                className="text-orange-400 text-sm hover:text-orange-300 transition-colors"
              >
                + {showMore ? t.showLess : t.showMore}
              </button>
            </div>
          </div>

          {/* Vision Card */}
          <div className="flex flex-col">
            <div className="bg-yellow-50 p-8 text-center rounded-t-lg">
              <div className="mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBjaGFydHMlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcyMjEzMzYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Integrated Communication Design"
                  className="w-full h-40 object-cover rounded"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                {t.visionCard1Title}<br/>{t.visionCard1Title2}<br/>{t.visionCard1Title3}
              </h3>
              <p className="text-xs text-gray-700 font-semibold">
                {t.visionCard1Subtitle}<br/>{t.visionCard1Subtitle2}<br/>{t.visionCard1Subtitle3}
              </p>
            </div>
            <div className="bg-slate-600 text-white p-6 flex-1 rounded-b-lg">
              <h4 className="font-semibold text-lg mb-4 text-center">{t.visionTitle}</h4>
              <p className="text-sm leading-relaxed">
                {t.visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}