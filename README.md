# Sravanthi Hospital Website

Official website for **Sravanthi Hospital** — Fertility, Maternity Care, Laser & Laparoscopic Surgery Centre in Vidya Nagar, Suryapet, Telangana.

React 19 + Vite 6 SPA, bilingual (English/Telugu), deployed at [sravanthihospital.in](https://sravanthihospital.in).

## Quick Start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/ (also regenerates sitemap.xml)
npm run preview   # serve the production build locally
```

## Features

- **Bilingual** — English / Telugu toggle, with browser-language auto-detection on first visit
- **Two routes** — Home (`/`) and Specialties (`/specialties`), via React Router
- **Specialties** — Fertility, Maternity, Surgery pillars with doctor callouts and FAQs
- **Doctor profiles** — Dr. Chaitanya (OBG/FRM), Dr. Praveen (Laparoscopic/Laser)
- **Appointment enquiry** — Submits via WhatsApp deep-link to 8344271555; persistent floating WhatsApp button site-wide
- **Real Google Maps embed** of the hospital location
- **SEO/AEO** — Per-route metadata via react-helmet-async, JSON-LD (Hospital, FAQPage, BreadcrumbList), auto-generated `sitemap.xml`, `robots.txt`, `llms.txt`
- **Mobile-responsive** — Verified at 320–414px widths in both languages

## Hospital Details

| Field | Value |
|-------|-------|
| Location | Vidya Nagar, Suryapet, Telangana 508213 |
| Phone | 8344271555 |
| OPD | 10:00 AM – 8:00 PM |
| Emergency | 24/7 |
| Established | 2021 |

## Project Structure

```
src/
├── components/     # Header, Hero, Doctors, Enquiry, Location, Faq, Footer, ...
├── pages/          # HomePage, SpecialtiesPage
├── data/           # content.js (site data), schema.js (JSON-LD builders)
├── i18n/           # LanguageContext + translations.js (en/te)
public/
├── assets/         # logos, favicon, hospital photo
├── robots.txt, sitemap.xml (generated), llms.txt
scripts/
└── generate-sitemap.mjs   # runs on prebuild, uses real file mtimes
```

## Deployment

Static build output (`dist/`) deploys to any static host. SPA fallback rewrites are already configured:

- `public/_redirects` — Netlify
- `vercel.json` — Vercel

For other hosts, add an equivalent rewrite of all paths to `/index.html`.
