import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { pillars, pillarAccent } from '../data/content';

export function Specialties() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-space-xl bg-surface scroll-mt-[112px]" id="specialties">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg gap-space-sm">
          <div>
            <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold">{t('specialties.label')}</span>
            <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold mt-1">{t('specialties.heading')}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">{t('specialties.description')}</p>
          </div>
          <a className="inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:text-secondary font-bold" href="#quick-enquiry">
            {t('specialties.compare')}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {pillars.map((pillar) => {
            const accent = pillarAccent[pillar.accent];
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md flex flex-col justify-between relative group hover:shadow-xl transition-all scroll-mt-[112px]"
              >
                <div className={`h-2 w-20 rounded-full ${accent.bar} mb-space-md`} />
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className={`font-label-md text-label-md uppercase px-2.5 py-0.5 rounded-full font-bold ${accent.tag}`}>{t(pillar.tagKey)}</span>
                    <span className={`material-symbols-outlined text-[32px] ${accent.icon}`}>{pillar.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">{t(pillar.titleKey)}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t(pillar.descKey)}</p>

                  <div className="bg-surface-container-low p-space-sm rounded-xl my-space-xs">
                    <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-surface">
                      {pillar.featureKeys.map((key) => (
                        <li key={key} className="flex items-center gap-2">
                          <span className={`material-symbols-outlined text-[18px] ${accent.check}`}>check_circle</span>
                          <span>{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pillar.noteKey && (
                    <span className="inline-flex items-center gap-1.5 self-start bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full font-caption text-caption font-semibold">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {t(pillar.noteKey)}
                    </span>
                  )}
                </div>

                <div className="pt-space-md flex flex-col gap-space-xs">
                  <a
                    href="#quick-enquiry"
                    className="w-full bg-surface-container text-primary font-label-lg text-label-lg py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-on-primary transition-colors"
                  >
                    {t(pillar.ctaKey)}
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </a>
                  <Link
                    to={`/specialties/${pillar.slug}`}
                    className="w-full text-center font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors py-1"
                  >
                    {t('specialties.learnMore')}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
