import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { PHONE, footerSpecialtyLinks, INSTAGRAM_LINK, doctors } from '../data/content';

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
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.social.instagram')}
                className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-container/60 text-on-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.16 1.26-.35 2.43-.4C9.28 1.34 9.68 1.33 12 1.33Zm0 1.8c-3.15 0-3.52 0-4.76.07-1.02.05-1.58.21-1.95.36a3.1 3.1 0 0 0-1.15.75c-.35.35-.57.68-.75 1.15-.15.37-.31.93-.36 1.95-.06 1.24-.07 1.61-.07 4.62s0 3.38.07 4.62c.05 1.02.21 1.58.36 1.95.18.47.4.8.75 1.15.35.35.68.57 1.15.75.37.15.93.31 1.95.36 1.24.06 1.61.07 4.76.07s3.52 0 4.76-.07c1.02-.05 1.58-.21 1.95-.36a3.1 3.1 0 0 0 1.15-.75c.35-.35.57-.68.75-1.15.15-.37.31-.93.36-1.95.06-1.24.07-1.61.07-4.62s0-3.38-.07-4.62c-.05-1.02-.21-1.58-.36-1.95a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.37-.15-.93-.31-1.95-.36C15.52 4 15.15 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md font-bold text-on-primary">{t('footer.specialties.heading')}</h4>
            <ul className="flex flex-col gap-2 font-body-md text-body-md text-surface-container-high/90">
              {footerSpecialtyLinks.map(({ key, to }) => (
                <li key={key}>
                  <Link to={to} className="hover:text-secondary-fixed transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <h4 className="font-title-md text-title-md font-bold text-on-primary">{t('footer.leadership.heading')}</h4>
            <div className="flex flex-col gap-space-sm font-body-md text-body-md text-surface-container-high/90">
              <div>
                <Link to={`/doctors/${doctors.find((d) => d.id === 'chaitanya').slug}`} className="font-label-lg text-label-lg text-on-primary font-bold hover:text-secondary-fixed transition-colors">
                  {t('doctor.chaitanya.name')}
                </Link>
                <p>{t('footer.leadership.chaitanya.role')}</p>
              </div>
              <div>
                <Link to={`/doctors/${doctors.find((d) => d.id === 'praveen').slug}`} className="font-label-lg text-label-lg text-on-primary font-bold hover:text-secondary-fixed transition-colors">
                  {t('doctor.praveen.name')}
                </Link>
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
