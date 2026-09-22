import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { faqItems } from '../data/content';

export function Faq() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState(faqItems[0].id);

  return (
    <section className="w-full py-space-xl bg-surface-container-low scroll-mt-[112px]" id="faq">
      <div className="max-w-4xl mx-auto px-margin-mobile lg:px-margin">
        <div className="text-center pb-space-lg">
          <span className="font-label-lg text-label-lg uppercase tracking-wider text-secondary font-bold">{t('faq.label')}</span>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold mt-1">{t('faq.heading')}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">{t('faq.description')}</p>
        </div>

        <div className="flex flex-col gap-space-sm">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-space-md px-space-md py-space-sm text-left"
                >
                  <span className="font-title-md text-title-md text-primary font-bold">{t(item.qKey)}</span>
                  <span className="material-symbols-outlined text-primary flex-shrink-0">{isOpen ? 'remove' : 'add'}</span>
                </button>
                {isOpen && (
                  <p className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">{t(item.aKey)}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
