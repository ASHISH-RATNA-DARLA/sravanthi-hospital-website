import { useLanguage } from '../i18n/LanguageContext';

export function BilingualBanner() {
  const { lang, setLanguage } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin w-full pt-space-xl pb-space-md">
      <div className="bg-surface-container p-space-md rounded-2xl flex flex-col md:flex-row items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex-shrink-0 flex items-center justify-center">
            <span className="material-symbols-outlined">translate</span>
          </div>
          <div>
            <h3 className="font-title-md text-title-md text-primary font-bold">సూర్యాపేట ప్రజల కోసం ప్రత్యేకం (Bilingual Support Available)</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              మా వైద్యులు మరియు సిబ్బంది మీకు తెలుగు మరియు ఇంగ్లీష్ భాషల్లో సమగ్ర వైద్య వివరణను అందిస్తారు.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-xs bg-surface-container-lowest p-1.5 rounded-full shadow-sm">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-full font-label-md text-label-md font-bold transition-colors ${
              lang === 'en' ? 'bg-primary text-on-primary' : 'text-primary'
            }`}
          >
            English Consultation
          </button>
          <button
            type="button"
            onClick={() => setLanguage('te')}
            className={`px-3 py-1 rounded-full font-label-md text-label-md font-bold transition-colors ${
              lang === 'te' ? 'bg-primary text-on-primary' : 'text-primary'
            }`}
          >
            తెలుగు పరామర్శ
          </button>
        </div>
      </div>
    </section>
  );
}
