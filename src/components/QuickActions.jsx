import { useLanguage } from '../i18n/LanguageContext';
import { quickActions } from '../data/content';

export function QuickActions() {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin w-full -mt-8 relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {quickActions.map((card) =>
          card.variant === 'solid' ? (
            <a
              key={card.id}
              href={card.href}
              className="bg-secondary text-on-secondary p-space-md rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between pb-space-sm">
                <div className="w-12 h-12 rounded-xl bg-on-secondary/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px] animate-pulse">{card.icon}</span>
                </div>
                <span className="bg-surface-container-lowest text-secondary px-2.5 py-0.5 rounded-full font-label-md text-label-md font-bold">
                  {t(card.badgeKey)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-secondary font-bold">{t(card.titleKey)}</span>
                <span className="font-body-md text-body-md text-on-secondary/90">{t(card.descKey)}</span>
              </div>
            </a>
          ) : (
            <a
              key={card.id}
              href={card.href}
              className="bg-surface-container-lowest p-space-md rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between pb-space-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[26px]">{card.icon}</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">
                  chevron_right
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-primary font-bold">{t(card.titleKey)}</span>
                <span className="font-body-md text-body-md text-on-surface-variant">{t(card.descKey)}</span>
              </div>
            </a>
          ),
        )}
      </div>
    </section>
  );
}
