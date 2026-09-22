import { useLanguage } from '../i18n/LanguageContext';
import { PHONE, footerSpecialtyKeys } from '../data/content';

export function Footer() {
  const { t, logo } = useLanguage();

  return (
    <footer className="w-full bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <img alt="Sravanthi Hospital" className="h-8 w-auto object-contain bg-surface-container-lowest rounded p-1" src={logo} />
              <div className="flex flex-col">
                <span className="font-title-md text-title-md font-bold text-on-primary">Sravanthi Hospital</span>
                <span className="font-caption text-caption text-secondary-fixed uppercase tracking-wider">{t('hero.est')}</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-surface-container-high/90 leading-relaxed">{t('footer.tagline')}</p>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <span className="inline-flex items-center gap-1 bg-primary-container/60 text-on-primary px-2.5 py-0.5 rounded-full font-label-md text-label-md">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">verified</span>
                {t('footer.badge.certified')}
              </span>
              <span className="inline-flex items-center gap-1 bg-primary-container/60 text-on-primary px-2.5 py-0.5 rounded-full font-label-md text-label-md">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">schedule</span>
                {t('footer.badge.open')}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md font-bold text-on-primary">{t('footer.specialties.heading')}</h4>
            <ul className="flex flex-col gap-2 font-body-md text-body-md text-surface-container-high/90">
              {footerSpecialtyKeys.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md font-bold text-on-primary">{t('footer.leadership.heading')}</h4>
            <div className="flex flex-col gap-space-sm font-body-md text-body-md text-surface-container-high/90">
              <div>
                <p className="font-label-lg text-label-lg text-on-primary font-bold">{t('doctor.chaitanya.name')}</p>
                <p>{t('footer.leadership.chaitanya.role')}</p>
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-on-primary font-bold">{t('doctor.praveen.name')}</p>
                <p>{t('footer.leadership.praveen.role')}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md font-bold text-on-primary">{t('footer.location.heading')}</h4>
            <ul className="flex flex-col gap-2 font-body-md text-body-md text-surface-container-high/90">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">location_on</span>
                <span>{t('location.address.value')}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">pin_drop</span>
                <span>{t('location.pluscode.value')}</span>
              </li>
              <li className="flex items-center gap-2">
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-secondary-fixed transition-colors">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">call</span>
                  {t('footer.location.helpline')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-on-primary/10">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm font-caption text-caption text-surface-container-high/80">
          <span>&copy; 2021 - {new Date().getFullYear()} {t('footer.rights')}</span>
          <div className="flex items-center gap-space-md">
            <a href="/#facilities" className="hover:text-secondary-fixed transition-colors">
              {t('footer.patientRights')}
            </a>
            <a href="/#location" className="hover:text-secondary-fixed transition-colors">
              {t('footer.emergencyDirections')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
