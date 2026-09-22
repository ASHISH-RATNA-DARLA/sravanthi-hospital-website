import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { navLinks, PHONE } from '../data/content';

function NavItem({ to, href, className, onClick, children }) {
  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function Header() {
  const { t, lang, setLanguage, logo } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [lang]);

  return (
    <header id="top" className="fixed top-0 left-0 right-0 z-50 shadow-[0_2px_12px_rgba(0,52,97,0.06)]">
      <div className="bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin h-10 flex items-center justify-between font-label-md text-label-md">
          <div className="flex items-center gap-space-md overflow-x-auto whitespace-nowrap">
            <a className="flex items-center gap-space-xs text-secondary-fixed hover:text-on-primary transition-colors" href={`tel:${PHONE}`}>
              <span className="material-symbols-outlined text-[15px]">phone_in_talk</span>
              <span className="font-label-md text-label-md tracking-wide">{t('topbar.helpline')}</span>
            </a>
            <span className="hidden md:inline text-outline-variant opacity-40">|</span>
            <div className="hidden sm:flex items-center gap-space-xs text-on-primary/90">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              <span className="font-label-md text-label-md">{t('topbar.opd')}</span>
            </div>
            <span className="hidden lg:inline text-outline-variant opacity-40">|</span>
            <div className="hidden lg:flex items-center gap-space-xs text-on-primary/90">
              <span className="material-symbols-outlined text-[15px]">location_on</span>
              <span className="font-label-md text-label-md">{t('topbar.address')}</span>
            </div>
          </div>

          <div className="flex items-center gap-space-sm pl-space-sm">
            <div className="bg-primary-container/60 rounded-full px-space-sm py-0.5 flex items-center gap-space-xs">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`font-label-md text-label-md px-1.5 py-0.5 rounded-full transition-colors ${
                  lang === 'en' ? 'bg-surface-container-lowest text-primary font-bold shadow-sm' : 'text-on-primary/80 hover:text-on-primary'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('te')}
                className={`font-label-md text-label-md px-1.5 py-0.5 rounded-full transition-colors ${
                  lang === 'te' ? 'bg-surface-container-lowest text-primary font-bold shadow-sm' : 'text-on-primary/80 hover:text-on-primary'
                }`}
              >
                తెలుగు
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin h-20 flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm sm:gap-space-md min-w-0">
            <img alt="Sravanthi Hospital" className="h-10 sm:h-12 w-auto object-contain flex-shrink-0" src={logo} />
            <div className="flex flex-col min-w-0">
              <span className="font-title-md text-[15px] sm:text-title-md font-semibold tracking-tight text-primary leading-tight truncate">Sravanthi Hospital</span>
              <span className="hidden sm:block font-caption text-caption text-secondary font-semibold uppercase tracking-wider">Fertility &amp; Laparoscopic Centre</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-space-md">
            {navLinks.map(({ key, to, href }) => (
              <NavItem
                key={key}
                to={to}
                href={href}
                className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors px-space-sm py-1.5 rounded-lg hover:bg-surface-container"
              >
                {t(key)}
              </NavItem>
            ))}
          </nav>

          <div className="flex items-center gap-space-sm sm:gap-space-md">
            <a
              className="hidden sm:inline-flex items-center gap-space-xs font-label-md text-label-md bg-error text-on-error px-space-md py-2 rounded-full hover:bg-error/90 shadow-sm transition-all"
              href={`tel:${PHONE}`}
            >
              <span className="material-symbols-outlined text-[16px]">e911_emergency</span>
              <span>{t('topbar.emergency')}</span>
            </a>
            <a
              className="hidden sm:inline-flex items-center gap-space-xs font-label-md text-label-md bg-secondary text-on-secondary px-space-md py-2.5 rounded-lg hover:bg-secondary-container hover:text-on-secondary-container shadow-sm transition-all"
              href="/#quick-enquiry"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>{t('topbar.book')}</span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
            >
              <span className="material-symbols-outlined text-on-primary text-[20px]">{menuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="lg:hidden flex flex-col px-margin-mobile pb-space-md gap-space-xs">
            {navLinks.map(({ key, to, href }) => (
              <NavItem
                key={key}
                to={to}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors px-space-sm py-2.5 rounded-lg"
              >
                {t(key)}
              </NavItem>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="sm:hidden mt-space-xs inline-flex items-center justify-center gap-space-xs font-label-md text-label-md bg-error text-on-error px-space-md py-2.5 rounded-full"
            >
              <span className="material-symbols-outlined text-[16px]">e911_emergency</span>
              <span>{t('topbar.emergency')}</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
