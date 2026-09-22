import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { pillars, pillarAccent, doctors, images, faqItems } from '../data/content';
import { Enquiry } from '../components/Enquiry';
import { Seo } from '../components/Seo';
import { buildBreadcrumbSchema, buildServiceSchema } from '../data/schema';

const SEO_COPY = {
  fertility: {
    title: 'Fertility & Reproductive Medicine | Sravanthi Hospital, Suryapet',
    description:
      'Infertility evaluation, IUI, IVF guidance & protocol planning, ovulation tracking — Fertility & Reproductive Medicine at Sravanthi Hospital, Suryapet, Telangana.',
  },
  maternity: {
    title: 'Maternity & High-Risk Pregnancy Care | Sravanthi Hospital, Suryapet',
    description:
      'Antenatal care, painless natural delivery, high-risk pregnancy (hypertension, GDM), neonatal support — Maternity Care at Sravanthi Hospital, Suryapet, Telangana.',
  },
  'laparoscopic-surgery': {
    title: 'Laparoscopic & Laser Surgery | Sravanthi Hospital, Suryapet',
    description:
      'Laparoscopic cholecystectomy (gallbladder), hernia repair, laser proctology (piles, fissure, fistula), TLH — Surgery at Sravanthi Hospital, Suryapet, Telangana.',
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const pillar = pillars.find((p) => p.slug === slug);

  if (!pillar) return <Navigate to="/specialties" replace />;

  const accent = pillarAccent[pillar.accent];
  const doctor = doctors.find((d) => d.id === pillar.doctorId);
  const related = pillars.filter((p) => p.slug !== pillar.slug);
  const seo = SEO_COPY[pillar.slug];
  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Specialties', path: '/specialties' },
    { name: seo.title.split(' | ')[0], path: `/specialties/${pillar.slug}` },
  ]);
  const serviceSchemas = buildServiceSchema(pillar);

  return (
    <div className="flex flex-col w-full">
      <Seo
        title={seo.title}
        description={seo.description}
        path={`/specialties/${pillar.slug}`}
        jsonLd={[breadcrumb, ...serviceSchemas]}
      />

      <section className="w-full bg-primary text-on-primary py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs font-label-md text-label-md text-primary-fixed flex-wrap">
            <Link to="/" className="hover:text-on-primary transition-colors">
              {t('nav.home')}
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link to="/specialties" className="hover:text-on-primary transition-colors">
              {t('nav.specialties')}
            </Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-primary font-bold">{t(pillar.titleKey)}</span>
          </div>
          <span className={`font-label-md text-label-md uppercase px-2.5 py-0.5 rounded-full font-bold w-fit ${accent.tag}`}>
            {t(pillar.tagKey)}
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-extrabold text-on-primary max-w-3xl">
            {t(pillar.titleKey)}
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-2xl">{t(pillar.descKey)}</p>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{t(pillar.pageDescKey)}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                {pillar.featureKeys.map((key) => (
                  <div key={key} className="bg-surface-container-low p-space-sm rounded-xl flex items-center gap-space-sm shadow-sm">
                    <span className={`material-symbols-outlined text-[20px] flex-shrink-0 ${accent.check}`}>check_circle</span>
                    <span className="font-body-md text-body-md text-on-surface">{t(key)}</span>
                  </div>
                ))}
              </div>

              {pillar.noteKey && (
                <span className="inline-flex items-center gap-1.5 self-start bg-surface-container-high text-on-surface-variant px-2.5 py-1 rounded-full font-caption text-caption font-semibold">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {t(pillar.noteKey)}
                </span>
              )}

              <div className="flex flex-wrap items-center gap-space-sm pt-space-sm">
                <a
                  href="#quick-enquiry"
                  className="inline-flex items-center gap-2 bg-primary text-on-primary shadow-md px-6 py-3 rounded-xl font-label-lg text-label-lg font-bold hover:bg-primary-container transition-colors"
                >
                  {t(pillar.ctaKey)}
                  <span className="material-symbols-outlined text-[18px]">north_east</span>
                </a>
                <a
                  href="/#location"
                  className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg font-bold hover:text-secondary transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  {t('location.heading')}
                </a>
              </div>

              {pillar.faqIds?.length > 0 && (
                <div className="pt-space-lg flex flex-col gap-space-sm">
                  <h2 className="font-title-lg text-title-lg text-primary font-bold">{t('faq.heading')}</h2>
                  {pillar.faqIds.map((id) => {
                    const item = faqItems.find((f) => f.id === id);
                    return (
                      <div key={id} className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm">
                        <p className="font-title-md text-title-md text-primary font-bold">{t(item.qKey)}</p>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-1">{t(item.aKey)}</p>
                      </div>
                    );
                  })}
                  <a href="/#faq" className="text-primary font-label-md text-label-md font-bold hover:text-secondary transition-colors w-fit">
                    {t('faq.heading')} →
                  </a>
                </div>
              )}
            </div>

            {doctor && (
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-lg flex flex-col gap-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                    {t('specialties.page.meetDoctor')}
                  </span>
                  <div className="flex items-center gap-space-sm">
                    <img
                      alt={`${t(doctor.nameKey)} — ${t(doctor.tagKey)}, Suryapet`}
                      className="w-16 h-16 rounded-xl object-cover object-top flex-shrink-0"
                      src={images[doctor.image]}
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-primary font-bold">{t(doctor.nameKey)}</span>
                      <span className={`font-label-md text-label-md font-semibold ${doctor.credentialsClass}`}>{t(doctor.tagKey)}</span>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t(doctor.bioKey)}</p>
                  <Link
                    to={`/doctors/${doctor.slug}`}
                    className={`w-full py-2.5 px-4 rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-all ${doctor.ctaClass}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">badge</span>
                    {t('doctor.viewProfile')}
                  </Link>
                </div>

                <div className="bg-surface-container-low rounded-2xl p-space-md flex flex-col gap-space-xs">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                    {t('nav.specialties')}
                  </span>
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/specialties/${p.slug}`}
                      className="font-body-md text-body-md text-primary hover:text-secondary transition-colors flex items-center gap-1 py-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">{p.icon}</span>
                      {t(p.titleKey)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Enquiry />
    </div>
  );
}
