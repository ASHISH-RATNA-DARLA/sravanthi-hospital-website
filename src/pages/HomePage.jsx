import { Hero } from '../components/Hero';
import { QuickActions } from '../components/QuickActions';
import { BilingualBanner } from '../components/BilingualBanner';
import { AboutHospital } from '../components/AboutHospital';
import { Specialties } from '../components/Specialties';
import { Doctors } from '../components/Doctors';
import { Enquiry } from '../components/Enquiry';
import { Location } from '../components/Location';
import { Faq } from '../components/Faq';
import { BottomCta } from '../components/BottomCta';
import { Seo } from '../components/Seo';
import { buildFaqSchema } from '../data/schema';

const TITLE = 'Sravanthi Hospital | Fertility, Maternity & Surgery Centre in Suryapet';
const DESCRIPTION =
  'Sravanthi Hospital in Vidya Nagar, Suryapet — Fertility, Maternity Care, Laser & Laparoscopic Surgery Centre. OPD 10 AM–8 PM. Emergency 24/7. Call 8344271555.';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Seo title={TITLE} description={DESCRIPTION} path="/" jsonLd={buildFaqSchema()} />
      <Hero />
      <QuickActions />
      <BilingualBanner />
      <AboutHospital />
      <Specialties />
      <Doctors />
      <Enquiry />
      <Location />
      <Faq />
      <BottomCta />
    </div>
  );
}
