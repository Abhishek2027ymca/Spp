import { Outlet } from 'react-router';
import { Header } from './Header';
import { WhatsAppButton } from './WhatsAppButton';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { BackToTop } from './BackToTop';

export function Layout() {
  return (
    <div className="size-full">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}