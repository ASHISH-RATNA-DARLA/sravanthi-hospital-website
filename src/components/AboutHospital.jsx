import { useLanguage } from '../i18n/LanguageContext';

export function AboutHospital() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-space-sm">
          <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold">{t('about.tag')}</span>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold">{t('about.heading')}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{t('about.p1')}</p>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{t('about.p2')}</p>
        </div>
      </div>
    </section>
  );
}
