// Regenerates public/sitemap.xml from the app's actual indexable routes.
// lastmod is the real filesystem mtime of each route's source file —
// never a fabricated date. Add a new page here when a new route ships.
import { statSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const SITE_URL = 'https://sravanthihospital.in';

const routes = [
  { path: '/', file: 'src/pages/HomePage.jsx' },
  { path: '/specialties', file: 'src/pages/SpecialtiesPage.jsx' },
];

function lastmodOf(relativeFile) {
  const mtime = statSync(join(rootDir, relativeFile)).mtime;
  return mtime.toISOString().slice(0, 10);
}

const urlEntries = routes
  .map(({ path, file }) => {
    const loc = `${SITE_URL}${path}`;
    const lastmod = lastmodOf(file);
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

writeFileSync(join(rootDir, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml written with ${routes.length} URLs`);
