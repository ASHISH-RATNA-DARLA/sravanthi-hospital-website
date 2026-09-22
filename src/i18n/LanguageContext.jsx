import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

function detectInitialLanguage() {
  const stored = localStorage.getItem('sravanthi-lang');
  if (stored) return stored;

  const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  const prefersTelugu = browserLangs.some((code) => code?.toLowerCase().startsWith('te'));
  return prefersTelugu ? 'te' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage);

  useEffect(() => {
    localStorage.setItem('sravanthi-lang', lang);
    document.documentElement.lang = lang === 'te' ? 'te' : 'en';
    document.body.classList.toggle('lang-te', lang === 'te');
  }, [lang]);

  const value = useMemo(() => {
    const t = (key) => translations[lang][key] || translations.en[key] || key;
    const toggleLanguage = () => setLang((prev) => (prev === 'en' ? 'te' : 'en'));
    const setLanguage = (next) => setLang(next);
    const logo = lang === 'te' ? '/assets/logo-te.png' : '/assets/logo-en.png';

    return { lang, t, toggleLanguage, setLanguage, logo };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
