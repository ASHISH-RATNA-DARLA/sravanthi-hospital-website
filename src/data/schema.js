import { translations } from '../i18n/translations';
import { faqItems, images, PHONE, MAPS_LINK, INSTAGRAM_LINK, SERVICE_AREAS } from './content';
import { SITE_URL } from '../components/Seo';

const en = translations.en;

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Vidya Nagar',
  addressLocality: 'Suryapet',
  addressRegion: 'Telangana',
  postalCode: '508213',
  addressCountry: 'IN',
};

const GEO = {
  '@type': 'GeoCoordinates',
  latitude: 17.1408,
  longitude: 79.6201,
};

const HOSPITAL_REF = {
  '@type': 'Hospital',
  name: 'Sravanthi Hospital',
  url: `${SITE_URL}/`,
  telephone: `+91${PHONE}`,
  address: ADDRESS,
};

export function buildHospitalSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    '@id': `${SITE_URL}/#hospital`,
    name: 'Sravanthi Hospital',
    alternateName: 'Sravanthi Hospital Fertility & Laparoscopic Centre',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/assets/favicon-192.png`,
    image: `${SITE_URL}/assets/hospital.png`,
    description:
      'Fertility, maternity, gynecology, and laparoscopic & laser surgery centre in Vidya Nagar, Suryapet, Telangana. Emergency care 24/7.',
    foundingDate: '2021',
    telephone: `+91${PHONE}`,
    sameAs: [MAPS_LINK, INSTAGRAM_LINK],
    address: ADDRESS,
    geo: GEO,
    hasMap: MAPS_LINK,
    priceRange: '₹₹',
    medicalSpecialty: [
      'Gynecologic',
      'Obstetric',
      'Reproductive',
      'Surgical',
    ],
    areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '20:00',
        description: 'OPD timings',
      },
    ],
    availableService: [
      { '@type': 'MedicalTherapy', name: 'Fertility & Reproductive Medicine' },
      { '@type': 'MedicalTherapy', name: 'Intrauterine Insemination (IUI)' },
      { '@type': 'MedicalTherapy', name: 'Maternity & High-Risk Pregnancy Care' },
      { '@type': 'MedicalProcedure', name: 'Laparoscopic Surgery' },
      { '@type': 'MedicalProcedure', name: 'Laser Proctology' },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+91${PHONE}`,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Telugu'],
      },
      {
        '@type': 'ContactPoint',
        telephone: `+91${PHONE}`,
        contactType: 'emergency',
        areaServed: 'IN',
        availableLanguage: ['English', 'Telugu'],
      },
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Sravanthi Hospital',
    url: `${SITE_URL}/`,
    inLanguage: ['en-IN', 'te-IN'],
    publisher: { '@id': `${SITE_URL}/#hospital` },
  };
}

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
      description: en[pillar.pageDescKey],
      about: { '@type': 'MedicalSpecialty', name: en[pillar.titleKey] },
      mainContentOfPage: en[pillar.pageDescKey],
      specialty: en[pillar.titleKey],
      significantLink: `${SITE_URL}/#quick-enquiry`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: `${en[pillar.titleKey]} — Sravanthi Hospital`,
      description: en[pillar.pageDescKey],
      url: `${SITE_URL}/specialties/${pillar.slug}`,
      telephone: `+91${PHONE}`,
      address: ADDRESS,
      geo: GEO,
      parentOrganization: HOSPITAL_REF,
      areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'City', name })),
      medicalSpecialty: en[pillar.titleKey],
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
    description: `${en[doctor.tagKey]}. ${en[doctor.bioKey]}`,
    telephone: `+91${PHONE}`,
    medicalSpecialty: doctor.medicalSpecialty,
    alumniOf: doctor.alumniOf.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
    hasCredential: doctor.credentialList.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: c,
    })),
    worksFor: HOSPITAL_REF,
    address: ADDRESS,
    areaServed: SERVICE_AREAS.map((name) => ({ '@type': 'City', name })),
    availableLanguage: ['English', 'Telugu'],
  };
}
