export const PHONE = '8344271555';
export const WHATSAPP = '918344271555';
export const MAPS_LINK = 'https://maps.app.goo.gl/SHMZB6FAeN6PWFLj9';
export const INSTAGRAM_LINK = 'https://www.instagram.com/dr_sravanthi_hospital';
export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent('Sravanthi Hospital, Vidya Nagar, Suryapet, Telangana')}&z=16&output=embed`;

export const navLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.specialties', to: '/specialties' },
  { key: 'nav.doctors', href: '/#doctors' },
  { key: 'nav.facilities', href: '/#facilities' },
  { key: 'nav.location', href: '/#location' },
];

export const processSteps = [
  { icon: 'forum', titleKey: 'process.step1.title', descKey: 'process.step1.desc' },
  { icon: 'assignment', titleKey: 'process.step2.title', descKey: 'process.step2.desc' },
  { icon: 'volunteer_activism', titleKey: 'process.step3.title', descKey: 'process.step3.desc' },
];

export const heroStats = [
  { valueKey: 'hero.stat1.value', labelKey: 'hero.stat1.label' },
  { valueKey: 'hero.stat2.value', labelKey: 'hero.stat2.label' },
  { valueKey: 'hero.stat3.value', labelKey: 'hero.stat3.label' },
  { valueKey: 'hero.stat4.value', labelKey: 'hero.stat4.label' },
  { valueKey: 'hero.stat5.value', labelKey: 'hero.stat5.label' },
  { valueKey: 'hero.stat6.value', labelKey: 'hero.stat6.label' },
];

export const images = {
  heroLobby: '/assets/hospital.png',
  drChaitanya: '/assets/sravanthi_profile.png',
  drPraveen: '/assets/praveen_profile.png',
};

export const quickActions = [
  {
    id: 'opd',
    href: '#quick-enquiry',
    icon: 'event_available',
    variant: 'light',
    titleKey: 'quick.opd.title',
    descKey: 'quick.opd.desc',
  },
  {
    id: 'emergency',
    href: `tel:${PHONE}`,
    icon: 'emergency',
    variant: 'solid',
    badgeKey: 'quick.emergency.badge',
    titleKey: 'quick.emergency.title',
    descKey: 'quick.emergency.desc',
  },
  {
    id: 'fertility',
    href: '#fertility-care',
    icon: 'family_restroom',
    variant: 'light',
    titleKey: 'quick.fertility.title',
    descKey: 'quick.fertility.desc',
  },
  {
    id: 'maternity',
    href: '#maternity-care',
    icon: 'child_care',
    variant: 'light',
    titleKey: 'quick.maternity.title',
    descKey: 'quick.maternity.desc',
  },
];

export const pillars = [
  {
    id: 'fertility-care',
    icon: 'egg',
    accent: 'secondary',
    tagKey: 'pillar.fertility.tag',
    titleKey: 'pillar.fertility.title',
    descKey: 'pillar.fertility.desc',
    pageDescKey: 'pillar.fertility.pageDesc',
    featureKeys: ['pillar.fertility.f1', 'pillar.fertility.f2', 'pillar.fertility.f3', 'pillar.fertility.f4', 'pillar.fertility.f5'],
    ctaKey: 'pillar.fertility.cta',
    noteKey: 'pillar.fertility.note',
    doctorId: 'chaitanya',
  },
  {
    id: 'maternity-care',
    icon: 'pregnant_woman',
    accent: 'primary',
    tagKey: 'pillar.maternity.tag',
    titleKey: 'pillar.maternity.title',
    descKey: 'pillar.maternity.desc',
    pageDescKey: 'pillar.maternity.pageDesc',
    featureKeys: ['pillar.maternity.f1', 'pillar.maternity.f2', 'pillar.maternity.f3', 'pillar.maternity.f4', 'pillar.maternity.f5'],
    ctaKey: 'pillar.maternity.cta',
    doctorId: 'chaitanya',
  },
  {
    id: 'surgical-care',
    icon: 'medical_services',
    accent: 'tertiary',
    tagKey: 'pillar.surgery.tag',
    titleKey: 'pillar.surgery.title',
    descKey: 'pillar.surgery.desc',
    pageDescKey: 'pillar.surgery.pageDesc',
    featureKeys: ['pillar.surgery.f1', 'pillar.surgery.f2', 'pillar.surgery.f3', 'pillar.surgery.f4', 'pillar.surgery.f5'],
    ctaKey: 'pillar.surgery.cta',
    doctorId: 'praveen',
  },
];

export const pillarAccent = {
  secondary: {
    bar: 'bg-secondary',
    tag: 'bg-secondary-fixed text-on-secondary-fixed',
    icon: 'text-secondary',
    check: 'text-secondary',
  },
  primary: {
    bar: 'bg-primary',
    tag: 'bg-primary-fixed text-on-primary-fixed',
    icon: 'text-primary',
    check: 'text-primary',
  },
  tertiary: {
    bar: 'bg-tertiary',
    tag: 'bg-tertiary-fixed text-on-tertiary-fixed',
    icon: 'text-tertiary',
    check: 'text-tertiary',
  },
};

export const doctors = [
  {
    id: 'chaitanya',
    image: 'drChaitanya',
    tagKey: 'doctor.chaitanya.tag',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed',
    nameKey: 'doctor.chaitanya.name',
    credentialsKey: 'doctor.chaitanya.credentials',
    credentialsClass: 'text-secondary',
    bioKey: 'doctor.chaitanya.bio',
    experienceKey: 'doctor.chaitanya.experience',
    hoursKey: 'doctor.chaitanya.hours',
    ctaKey: 'doctor.chaitanya.cta',
    ctaClass: 'bg-secondary text-on-secondary hover:bg-secondary-container',
  },
  {
    id: 'praveen',
    image: 'drPraveen',
    tagKey: 'doctor.praveen.tag',
    tagClass: 'bg-primary-fixed text-on-primary-fixed',
    nameKey: 'doctor.praveen.name',
    credentialsKey: 'doctor.praveen.credentials',
    credentialsClass: 'text-primary',
    bioKey: 'doctor.praveen.bio',
    experienceKey: 'doctor.praveen.experience',
    hoursKey: 'doctor.praveen.hours',
    ctaKey: 'doctor.praveen.cta',
    ctaClass: 'bg-primary text-on-primary hover:bg-primary-container',
  },
];

export const faqItems = [
  { id: 1, qKey: 'faq.q1', aKey: 'faq.a1' },
  { id: 2, qKey: 'faq.q2', aKey: 'faq.a2' },
  { id: 3, qKey: 'faq.q3', aKey: 'faq.a3' },
  { id: 4, qKey: 'faq.q4', aKey: 'faq.a4' },
  { id: 5, qKey: 'faq.q5', aKey: 'faq.a5' },
  { id: 6, qKey: 'faq.q6', aKey: 'faq.a6' },
  { id: 7, qKey: 'faq.q7', aKey: 'faq.a7' },
  { id: 8, qKey: 'faq.q8', aKey: 'faq.a8' },
  { id: 9, qKey: 'faq.q9', aKey: 'faq.a9' },
  { id: 10, qKey: 'faq.q10', aKey: 'faq.a10' },
  { id: 11, qKey: 'faq.q11', aKey: 'faq.a11' },
  { id: 12, qKey: 'faq.q12', aKey: 'faq.a12' },
  { id: 13, qKey: 'faq.q13', aKey: 'faq.a13' },
  { id: 14, qKey: 'faq.q14', aKey: 'faq.a14' },
];

export const facilities = [
  { id: 'casualty', icon: 'emergency_home', iconBg: 'bg-primary text-on-primary', titleKey: 'facility.casualty.title', descKey: 'facility.casualty.desc' },
  { id: 'ot', icon: 'monitor_heart', iconBg: 'bg-tertiary text-on-tertiary', titleKey: 'facility.ot.title', descKey: 'facility.ot.desc' },
  { id: 'delivery', icon: 'baby_changing_station', iconBg: 'bg-surface-variant text-primary', titleKey: 'facility.delivery.title', descKey: 'facility.delivery.desc' },
];

export const footerSpecialtyLinks = [
  { key: 'footer.specialty1', to: '/specialties#fertility-care' },
  { key: 'footer.specialty2', to: '/specialties#maternity-care' },
  { key: 'footer.specialty3', to: '/specialties#surgical-care' },
  { key: 'footer.specialty4', to: '/specialties#surgical-care' },
  { key: 'footer.specialty5', to: '/specialties' },
];

export const departmentOptions = [
  { value: 'fertility', key: 'form.opt.fertility' },
  { value: 'maternity', key: 'form.opt.maternity' },
  { value: 'laparoscopy', key: 'form.opt.laparoscopy' },
  { value: 'laser', key: 'form.opt.laser' },
  { value: 'general', key: 'form.opt.general' },
];

export const doctorOptions = [
  { value: 'chaitanya', key: 'form.doctor.chaitanya' },
  { value: 'praveen', key: 'form.doctor.praveen' },
  { value: 'any', key: 'form.doctor.any' },
];

export const timeOptions = [
  { value: 'morning', key: 'form.time.morning' },
  { value: 'afternoon', key: 'form.time.afternoon' },
  { value: 'evening', key: 'form.time.evening' },
];
