import { useLanguage } from '../i18n/LanguageContext';
import { PHONE, MAPS_LINK, MAPS_EMBED_SRC } from '../data/content';

export function Location() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-space-xl bg-surface-container-low scroll-mt-[112px]" id="location">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div>
              <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold">{t('location.label')}</span>
              <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold mt-1">{t('location.heading')}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">{t('location.description')}</p>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-primary font-bold">{t('location.address.label')}</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{t('location.address.value')}</span>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">directions_car</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg text-primary font-bold">{t('location.parking.label')}</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{t('location.parking.value')}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                className="bg-primary text-on-primary px-5 py-3 rounded-xl font-label-lg text-label-lg font-bold hover:bg-primary-container transition-all flex items-center gap-2 shadow"
                href={MAPS_LINK}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined">navigation</span>
                {t('location.mapsBtn')}
              </a>
              <a
                className="bg-surface-container text-primary px-5 py-3 rounded-xl font-label-lg text-label-lg font-bold hover:bg-surface-variant transition-all flex items-center gap-2"
                href={`tel:${PHONE}`}
              >
                <span className="material-symbols-outlined text-secondary">support_agent</span>
                {t('location.callBtn')}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-surface-container">
              <iframe
                title="Sravanthi Hospital location on Google Maps"
                src={MAPS_EMBED_SRC}
                className="w-full h-[360px] sm:h-[420px] rounded-3xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-space-sm rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-space-xs text-on-surface pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">pin_drop</span>
                  <span className="font-label-md text-label-md font-bold text-primary">{t('location.mapCaption')}</span>
                </div>
                <span className="font-caption text-caption text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">
                  {t('location.mapTag')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
