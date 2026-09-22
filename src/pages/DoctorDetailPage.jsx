import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';
import { doctors, pillars, images } from '../data/content';
import { Enquiry } from '../components/Enquiry';
import { Seo } from '../components/Seo';
import { buildBreadcrumbSchema, buildPhysicianSchema } from '../data/schema';

const en = translations.en;

const SEO_COPY = {
  'dr-t-chaitanya-sravanthi': {
    title: 'Dr. T. Chaitanya Sravanthi — Gynecologist, Suryapet | Sravanthi Hospital',
    description:
      'Dr. T. Chaitanya Sravanthi (MBBS, MS, FRM) — Obstetrics & Gynecology, Reproductive Medicine at Sravanthi Hospital, Suryapet. 15+ years experience. Consultation 2–8 PM.',
  },
  'dr-praveen-sirasani': {
    title: 'Dr. Praveen Sirasani — Laparoscopic Surgeon, Suryapet | Sravanthi Hospital',
    description:
      'Dr. Praveen Sirasani (MS, FMAS, FIAGES) — General Surgery, Laparoscopic & Laser Surgery at Sravanthi Hospital, Suryapet. 15+ years experience. Consultation 10 AM–7 PM.',
  },
};

export default function DoctorDetailPage() {
  const { doctorId } = useParams();
  const { t } = useLanguage();
  const doctor = doctors.find((d) => d.slug === doctorId);

  if (!doctor) return <Navigate to="/doctors" replace />;

  const relatedPillars = pillars.filter((p) => p.doctorId === doctor.id);
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Doctors', path: '/doctors' },
    { name: en[doctor.nameKey], path: `/doctors/${doctor.slug}` },
  ]);
  const physicianSchema = buildPhysicianSchema(doctor);
  const seo = SEO_COPY[doctor.slug];

  return (
    <div className="flex flex-col w-full">
      <Seo title={seo.title} description={seo.description} path={`/doctors/${doctor.slug}`} jsonLd={[breadcrumb, physicianSchema]} />

      <section className="w-full bg-primary text-on-primary py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs font-label-md text-label-md text-primary-fixed flex-wrap">
            <Link to="/" className="hover:text-on-primary transition-colors">
              {t('nav.home')}
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link to="/doctors" className="hover:text-on-primary transition-colors">
              {t('nav.doctors')}
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-primary font-bold">{t(doctor.nameKey)}</span>
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt={`${t(doctor.nameKey)} — ${t(doctor.tagKey)}, Sravanthi Hospital Suryapet`}
                  className="w-full h-72 sm:h-96 object-cover object-top"
                  src={images[doctor.image]}
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-primary/80 backdrop-blur-md text-on-primary px-3 py-1.5 rounded-lg text-center font-label-md text-label-md">
                  {t(doctor.experienceKey)}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <span className={`font-label-md text-label-md px-2.5 py-0.5 rounded-full font-bold w-fit ${doctor.tagClass}`}>
                {t(doctor.tagKey)}
              </span>
              <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold">
                {t(doctor.nameKey)}
              </h1>
              <p className={`font-label-lg text-label-lg font-semibold ${doctor.credentialsClass}`}>{t(doctor.credentialsKey)}</p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{t(doctor.bioKey)}</p>

              <div className="bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between text-on-surface w-fit gap-space-md">
                <span className="font-caption text-caption text-on-surface-variant uppercase">{t('doctor.hours.label')}</span>
                <span className="font-label-lg text-label-lg text-primary font-bold">{t(doctor.hoursKey)}</span>
              </div>

              {relatedPillars.length > 0 && (
                <div className="flex flex-col gap-space-xs pt-space-sm">
                  <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold">
                    {t('nav.specialties')}
                  </span>
                  <div className="flex flex-wrap gap-space-sm">
                    {relatedPillars.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/specialties/${p.slug}`}
                        className="inline-flex items-center gap-2 bg-surface-container-low text-primary px-4 py-2 rounded-xl font-label-md text-label-md font-bold hover:bg-primary hover:text-on-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">{p.icon}</span>
                        {t(p.titleKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-space-sm">
                <a
                  href="#quick-enquiry"
                  className={`inline-flex items-center gap-2 py-3 px-6 rounded-xl font-label-lg text-label-lg font-bold transition-all ${doctor.ctaClass}`}
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  {t(doctor.ctaKey)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Enquiry />
    </div>
  );
}
