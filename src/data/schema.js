import { translations } from '../i18n/translations';
import { faqItems } from './content';
import { SITE_URL } from '../components/Seo';

const en = translations.en;

export function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: en[item.qKey],
      acceptedAnswer: {
        '@type': 'Answer',
        text: en[item.aKey],
      },
    })),
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
