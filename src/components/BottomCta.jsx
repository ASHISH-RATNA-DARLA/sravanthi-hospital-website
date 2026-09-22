import { useLanguage } from '../i18n/LanguageContext';
import { PHONE } from '../data/content';

export function BottomCta() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-secondary text-on-secondary">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
        <div className="flex flex-col text-center sm:text-left">
          <span className="font-title-lg text-title-lg font-bold">{t('cta.heading')}</span>
          <span className="font-body-md text-body-md text-on-secondary/90">{t('cta.desc')}</span>
        </div>
        <div className="flex items-center gap-space-sm">
          <a
            className="bg-error text-on-error px-5 py-3 rounded-xl font-label-lg text-label-lg font-bold hover:bg-error/90 transition-all flex items-center gap-2 shadow"
            href={`tel:${PHONE}`}
          >
            <span className="material-symbols-outlined">call</span>
            {t('cta.call')}
          </a>
          <a
            className="bg-primary text-on-primary px-5 py-3 rounded-xl font-label-lg text-label-lg font-bold hover:bg-primary-container transition-all flex items-center gap-2 shadow"
            href="#quick-enquiry"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            {t('cta.book')}
          </a>
        </div>
      </div>
    </section>
  );
}
