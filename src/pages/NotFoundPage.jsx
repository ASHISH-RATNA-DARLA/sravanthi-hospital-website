import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Seo } from '../components/Seo';

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center text-center py-space-xl px-margin-mobile min-h-[50vh] gap-space-md">
      <Seo title="Page Not Found | Sravanthi Hospital" description="The page you're looking for doesn't exist." path="/404" noindex />
      <span className="material-symbols-outlined text-[64px] text-outline">search_off</span>
      <h1 className="font-headline-lg text-headline-lg text-primary font-bold">Page Not Found</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label-lg text-label-lg font-bold hover:bg-primary-container transition-all"
      >
        {t('nav.home')}
      </Link>
    </div>
  );
}
