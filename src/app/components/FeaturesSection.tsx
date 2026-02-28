import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations/translations';

export function FeaturesSection() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const features = [
    {
      title: t.feature1Title,
      image: 'https://images.unsplash.com/photo-1592495989226-03f88104f8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGdyYXBoJTIwbW9uZXklMjBzdWNjZXNzfGVufDF8fHx8MTc3MjIxMzM2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: t.feature1Description,
      bullets: [t.feature1Bullet1, t.feature1Bullet2],
      result: t.feature1Result
    },
    {
      title: t.feature2Title,
      image: 'https://images.unsplash.com/photo-1647866427893-0057366e91b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWFkc2V0JTIwdGVhbXxlbnwxfHx8fDE3NzIxNjkxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t.feature2Description,
      bullets: [t.feature2Bullet1, t.feature2Bullet2, t.feature2Bullet3],
      result: t.feature2Result
    },
    {
      title: t.feature3Title,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBjaGFydHMlMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcyMjEzMzYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t.feature3Description,
      bullets: [t.feature3Bullet1, t.feature3Bullet2, t.feature3Bullet3],
      result: t.feature3Result
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-12 text-center tracking-wide">
          {t.featuresTitle}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              {/* Header */}
              <div className="bg-slate-600 text-white p-6 text-center rounded-t-lg">
                <h3 className="font-semibold text-lg">{feature.title}</h3>
              </div>
              
              {/* Image */}
              <div className="bg-gray-100 p-6 flex items-center justify-center h-48">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              
              {/* Content */}
              <div className="bg-slate-600 text-white p-6 flex-1 rounded-b-lg">
                <p className="text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2 mb-4">
                  {feature.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm flex gap-2">
                      <span className="text-orange-400">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm">
                  <span className="font-semibold">{t.result}</span> {feature.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}