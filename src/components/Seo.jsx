import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://sravanthihospital.in';
const SITE_NAME = 'Sravanthi Hospital';
const DEFAULT_IMAGE = `${SITE_URL}/assets/hospital.png`;

export function Seo({ title, description, path = '/', jsonLd, noindex = false }) {
  const url = `${SITE_URL}${path}`;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Suryapet, Telangana" />
      <meta name="geo.position" content="17.1408;79.6201" />
      <meta name="ICBM" content="17.1408, 79.6201" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:alt" content="Sravanthi Hospital campus, Suryapet" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="te_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export { SITE_URL, SITE_NAME, DEFAULT_IMAGE };
