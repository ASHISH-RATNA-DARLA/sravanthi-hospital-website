import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { pillars, pillarAccent, processSteps, doctors, images } from '../data/content';
import { Enquiry } from '../components/Enquiry';
import { Seo } from '../components/Seo';
import { buildBreadcrumbSchema } from '../data/schema';

const TITLE = 'Our Specialties — Fertility, Maternity & Laparoscopic Surgery | Sravanthi Hospital Suryapet';
const DESCRIPTION =
  'Explore Fertility & Reproductive Medicine, Maternity & Mother-Baby Care, and Laparoscopic & Laser Surgery at Sravanthi Hospital, Suryapet — treatments, doctors, and how to book.';
const BREADCRUMB = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Specialties', path: '/specialties' },
]);

export default function SpecialtiesPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      <Seo title={TITLE} description={DESCRIPTION} path="/specialties" jsonLd={BREADCRUMB} />
      <section className="w-full bg-primary text-on-primary py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs font-label-md text-label-md text-primary-fixed">
            <Link to="/" className="hover:text-on-primary transition-colors">
              {t('nav.home')}
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-primary font-bold">{t('nav.specialties')}</span>
          </div>
          <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary-fixed font-bold">
            {t('specialties.page.tag')}
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-extrabold text-on-primary max-w-3xl">{t('specialties.page.title')}</h1>
          <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-2xl">{t('specialties.page.desc')}</p>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <h2 className="font-headline-md text-headline-md text-primary font-bold text-center mb-space-lg">
            {t('specialties.page.processHeading')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
            {processSteps.map((step, index) => (
              <div key={step.titleKey} className="bg-surface-container-low rounded-2xl p-space-lg flex flex-col gap-space-xs relative">
                <span className="font-headline-md text-headline-md text-surface-container-high absolute top-space-sm right-space-md select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">{step.icon}</span>
                </div>
                <h3 className="font-title-md text-title-md text-primary font-bold">{t(step.titleKey)}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {pillars.map((pillar, index) => {
        const accent = pillarAccent[pillar.accent];
        const doctor = doctors.find((d) => d.id === pillar.doctorId);
        const altBg = index % 2 === 1 ? 'bg-surface-container-low' : 'bg-surface';

        return (
          <section key={pillar.id} id={pillar.id} className={`w-full py-space-xl scroll-mt-[112px] ${altBg}`}>
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-8 flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className={`font-label-md text-label-md uppercase px-2.5 py-0.5 rounded-full font-bold ${accent.tag}`}>{t(pillar.tagKey)}</span>
                    <span className={`material-symbols-outlined text-[32px] ${accent.icon}`}>{pillar.icon}</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold">{t(pillar.titleKey)}</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{t(pillar.descKey)}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t(pillar.pageDescKey)}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    {pillar.featureKeys.map((key) => (
                      <div key={key} className="bg-surface-container-lowest p-space-sm rounded-xl flex items-center gap-space-sm shadow-sm">
                        <span className={`material-symbols-outlined text-[20px] flex-shrink-0 ${accent.check}`}>check_circle</span>
                        <span className="font-body-md text-body-md text-on-surface">{t(key)}</span>
                      </div>
                    ))}
                  </div>

                  {pillar.noteKey && (
                    <span className="inline-flex items-center gap-1.5 self-start bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full font-caption text-caption font-semibold">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {t(pillar.noteKey)}
                    </span>
                  )}

                  <div className="pt-space-sm">
                    <a
                      href="/#quick-enquiry"
                      className="inline-flex items-center gap-2 bg-surface-container-lowest text-primary shadow-md px-6 py-3 rounded-xl font-label-lg text-label-lg font-bold hover:bg-primary hover:text-on-primary transition-colors"
                    >
                      {t(pillar.ctaKey)}
                      <span className="material-symbols-outlined text-[18px]">north_east</span>
                    </a>
                  </div>
                </div>

                {doctor && (
                  <div className="lg:col-span-4">
                    <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-lg flex flex-col gap-space-sm">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                        {t('specialties.page.meetDoctor')}
                      </span>
                      <div className="flex items-center gap-space-sm">
                        <img
                          alt={t(doctor.nameKey)}
                          className="w-16 h-16 rounded-xl object-cover object-top flex-shrink-0"
                          src={images[doctor.image]}
                          loading="lazy"
                        />
                        <div className="flex flex-col">
                          <span className="font-title-md text-title-md text-primary font-bold">{t(doctor.nameKey)}</span>
                          <span className={`font-label-md text-label-md font-semibold ${doctor.credentialsClass}`}>{t(doctor.tagKey)}</span>
                        </div>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t(doctor.bioKey)}</p>
                      <a
                        href="/#doctors"
                        className={`w-full py-2.5 px-4 rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-all ${doctor.ctaClass}`}
                      >
                        <span className="material-symbols-outlined text-[18px]">badge</span>
                        {t(doctor.nameKey)}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <Enquiry />
    </div>
  );
}
