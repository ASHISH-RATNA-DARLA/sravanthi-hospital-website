import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { doctors, images } from '../data/content';
import { Enquiry } from '../components/Enquiry';
import { Seo } from '../components/Seo';
import { buildBreadcrumbSchema } from '../data/schema';

const TITLE = 'Our Doctors | Sravanthi Hospital, Suryapet';
const DESCRIPTION =
  'Dr. T. Chaitanya Sravanthi (Obstetrics & Gynecology, Fertility) and Dr. Praveen Sirasani (Laparoscopic & Laser Surgery) — Sravanthi Hospital, Suryapet.';
const BREADCRUMB = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Doctors', path: '/doctors' },
]);

export default function DoctorsPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      <Seo title={TITLE} description={DESCRIPTION} path="/doctors" jsonLd={BREADCRUMB} />

      <section className="w-full bg-primary text-on-primary py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs font-label-md text-label-md text-primary-fixed">
            <Link to="/" className="hover:text-on-primary transition-colors">
              {t('nav.home')}
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-primary font-bold">{t('nav.doctors')}</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-extrabold text-on-primary max-w-3xl">
            {t('doctors.heading')}
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-2xl">{t('doctors.description')}</p>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-surface-container-lowest rounded-3xl p-space-lg shadow-lg flex flex-col md:flex-row gap-space-lg items-center"
              >
                <div className="w-full md:w-5/12 flex-shrink-0">
                  <Link to={`/doctors/${doctor.slug}`} className="relative rounded-2xl overflow-hidden shadow-md block">
                    <img
                      alt={`${t(doctor.nameKey)} — ${t(doctor.tagKey)}, Sravanthi Hospital Suryapet`}
                      className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                      src={images[doctor.image]}
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-primary/80 backdrop-blur-md text-on-primary px-3 py-1.5 rounded-lg text-center font-label-md text-label-md">
                      {t(doctor.experienceKey)}
                    </div>
                  </Link>
                </div>

                <div className="w-full md:w-7/12 flex flex-col justify-between gap-space-sm">
                  <div>
                    <span className={`font-label-md text-label-md px-2.5 py-0.5 rounded-full font-bold ${doctor.tagClass}`}>
                      {t(doctor.tagKey)}
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold mt-1">
                      <Link to={`/doctors/${doctor.slug}`} className="hover:text-secondary transition-colors">
                        {t(doctor.nameKey)}
                      </Link>
                    </h2>
                    <p className={`font-label-md text-label-md font-semibold ${doctor.credentialsClass}`}>{t(doctor.credentialsKey)}</p>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">{t(doctor.bioKey)}</p>
                  </div>

                  <div className="flex flex-wrap gap-space-sm pt-space-xs">
                    <Link
                      to={`/doctors/${doctor.slug}`}
                      className="py-2.5 px-4 rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-all"
                    >
                      {t('doctor.viewProfile')}
                    </Link>
                    <a
                      href="#quick-enquiry"
                      className={`py-2.5 px-4 rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-all ${doctor.ctaClass}`}
                    >
                      <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                      {t(doctor.ctaKey)}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Enquiry />
    </div>
  );
}
