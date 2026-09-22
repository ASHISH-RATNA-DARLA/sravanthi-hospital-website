import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { FloatingWhatsApp } from './FloatingWhatsApp';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="w-full pt-[7.5rem] bg-surface min-h-[calc(100vh-280px)]">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
