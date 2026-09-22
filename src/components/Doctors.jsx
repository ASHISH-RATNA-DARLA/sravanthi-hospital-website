import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { doctors, images } from '../data/content';

export function Doctors() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-space-xl bg-surface-container-low scroll-mt-[112px]" id="doctors">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center max-w-2xl mx-auto pb-space-xl">
          <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold">{t('doctors.label')}</span>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold mt-1">{t('doctors.heading')}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">{t('doctors.description')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-lg flex flex-col md:flex-row gap-space-lg items-center">
              <div className="w-full md:w-5/12 flex-shrink-0">
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <img
                    alt={`${t(doctor.nameKey)} — ${t(doctor.tagKey)}, Sravanthi Hospital Suryapet`}
                    className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                    src={images[doctor.image]}
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-primary/80 backdrop-blur-md text-on-primary px-3 py-1.5 rounded-lg text-center font-label-md text-label-md">
                    {t(doctor.experienceKey)}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-7/12 flex flex-col justify-between gap-space-sm">
                <div>
                  <span className={`font-label-md text-label-md px-2.5 py-0.5 rounded-full font-bold ${doctor.tagClass}`}>{t(doctor.tagKey)}</span>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1">{t(doctor.nameKey)}</h3>
                  <p className={`font-label-md text-label-md font-semibold ${doctor.credentialsClass}`}>{t(doctor.credentialsKey)}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">{t(doctor.bioKey)}</p>
                </div>

                <div className="bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between text-on-surface">
                  <span className="font-caption text-caption text-on-surface-variant uppercase">{t('doctor.hours.label')}</span>
                  <span className="font-label-lg text-label-lg text-primary font-bold">{t(doctor.hoursKey)}</span>
                </div>

                <div className="pt-space-xs flex flex-wrap gap-space-sm">
                  <a
                    href="#quick-enquiry"
                    className={`flex-1 py-2.5 px-4 rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-all ${doctor.ctaClass}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    {t(doctor.ctaKey)}
                  </a>
                  <Link
                    to={`/doctors/${doctor.slug}`}
                    className="py-2.5 px-4 rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all"
                  >
                    {t('doctor.viewProfile')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
