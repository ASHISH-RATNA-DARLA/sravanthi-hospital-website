import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { PHONE, images, heroStats } from '../data/content';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-primary text-on-primary pb-space-xl pt-space-lg lg:pt-space-xl">
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="bg-surface-container-lowest/15 backdrop-blur-sm text-secondary-fixed px-3 py-1 rounded-full font-label-md text-label-md uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[15px]">favorite</span>
                {t('hero.badge')}
              </span>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-label-md font-bold">
                {t('hero.est')}
              </span>
            </div>

            <div className="flex flex-col gap-space-xs">
              <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl font-extrabold tracking-tight text-on-primary leading-tight">
                {t('hero.title1')} <br />
                <span className="text-secondary-fixed">{t('hero.title2')}</span>
              </h1>
            </div>

            <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md pt-space-xs">
              {heroStats.map((stat) => (
                <div key={stat.labelKey} className="bg-primary-container/80 backdrop-blur rounded-xl px-space-md py-space-sm flex flex-col gap-0.5 justify-center">
                  <span className="font-title-md text-title-md text-on-primary font-bold leading-none">{t(stat.valueKey)}</span>
                  <span className="font-label-md text-label-md text-primary-fixed leading-snug">{t(stat.labelKey)}</span>
                </div>
              ))}
            </div>
            <p className="font-caption text-caption text-surface-container-high/70 pt-space-xs">{t('hero.statsNote')}</p>

            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <a
                className="bg-secondary text-on-secondary px-6 py-3.5 rounded-xl font-label-lg text-label-lg font-bold shadow-lg hover:bg-secondary-container transition-all flex items-center gap-2"
                href="#quick-enquiry"
              >
                <span className="material-symbols-outlined">calendar_month</span>
                {t('hero.ctaBook')}
              </a>
              <a
                className="bg-surface-container-lowest text-primary px-6 py-3.5 rounded-xl font-label-lg text-label-lg font-bold shadow-md hover:bg-surface-container transition-all flex items-center gap-2"
                href={`tel:${PHONE}`}
              >
                <span className="material-symbols-outlined text-secondary">phone_in_talk</span>
                {PHONE} (24/7)
              </a>
              <Link className="text-on-primary/90 hover:text-on-primary underline font-label-lg text-label-lg flex items-center gap-1 pl-1" to="/specialties">
                {t('hero.ctaExplore')}
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container">
              <img
                alt="Sravanthi Hospital Lobby Suryapet"
                className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                src={images.heroLobby}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-space-md flex flex-col gap-space-xs text-on-primary">
                <div className="flex items-center gap-space-xs text-secondary-fixed font-label-md text-label-md uppercase">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
                  {t('hero.imageTag')}
                </div>
                <span className="font-title-md text-title-md font-bold text-on-primary">{t('hero.imageTitle')}</span>
                <p className="font-body-md text-body-md text-surface-container-high/90">{t('hero.imageDesc')}</p>
              </div>

              <div className="absolute -top-4 -right-4 bg-surface-container-lowest text-on-surface p-space-sm rounded-xl shadow-xl hidden sm:flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">health_and_safety</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-primary font-bold">{t('hero.floatingTitle')}</span>
                  <span className="font-caption text-caption text-on-surface-variant">{t('hero.floatingDesc')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
