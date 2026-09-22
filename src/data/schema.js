import { translations } from '../i18n/translations';
import { faqItems, images } from './content';
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

export function buildServiceSchema(pillar) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: en[pillar.titleKey],
      url: `${SITE_URL}/specialties/${pillar.slug}`,
      about: { '@type': 'MedicalSpecialty', name: en[pillar.titleKey] },
      mainContentOfPage: en[pillar.pageDescKey],
    },
  ];
  if (pillar.faqIds?.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: pillar.faqIds.map((id) => {
        const item = faqItems.find((f) => f.id === id);
        return {
          '@type': 'Question',
          name: en[item.qKey],
          acceptedAnswer: { '@type': 'Answer', text: en[item.aKey] },
        };
      }),
    });
  }
  return schemas;
}

export function buildPhysicianSchema(doctor) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: en[doctor.nameKey],
    url: `${SITE_URL}/doctors/${doctor.slug}`,
    image: `${SITE_URL}${images[doctor.image]}`,
    description: en[doctor.tagKey],
    alumniOf: doctor.alumniOf.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
    hasCredential: doctor.credentialList.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: c,
    })),
    worksFor: { '@type': 'Hospital', name: 'Sravanthi Hospital', url: `${SITE_URL}/` },
  };
}
