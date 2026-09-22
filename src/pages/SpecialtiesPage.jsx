import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { pillars, pillarAccent, processSteps } from '../data/content';
import { Enquiry } from '../components/Enquiry';
import { Seo } from '../components/Seo';
import { buildBreadcrumbSchema } from '../data/schema';

const TITLE = 'Gynecology, Fertility, Maternity & Surgery | Sravanthi Hospital, Suryapet';
const DESCRIPTION =
  'Gynecologist, fertility (IVF/IUI), maternity & laparoscopic surgery (gallbladder, hernia, piles) — Sravanthi Hospital, Suryapet, Telangana. Treatments and doctors.';
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

      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            {pillars.map((pillar) => {
              const accent = pillarAccent[pillar.accent];
              return (
                <Link
                  key={pillar.slug}
                  to={`/specialties/${pillar.slug}`}
                  className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all group"
                >
                  <div className="flex flex-col gap-space-sm">
                    <div className={`h-2 w-20 rounded-full ${accent.bar}`} />
                    <div className="flex items-center justify-between">
                      <span className={`font-label-md text-label-md uppercase px-2.5 py-0.5 rounded-full font-bold ${accent.tag}`}>
                        {t(pillar.tagKey)}
                      </span>
                      <span className={`material-symbols-outlined text-[32px] ${accent.icon}`}>{pillar.icon}</span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">{t(pillar.titleKey)}</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t(pillar.descKey)}</p>
                  </div>
                  <div className="pt-space-md flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold group-hover:text-secondary transition-colors">
                    {t('specialties.learnMore')}
                    <span className="material-symbols-outlined text-[18px]">north_east</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Enquiry />
    </div>
  );
}
