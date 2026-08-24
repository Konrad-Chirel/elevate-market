import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingScrollToTop } from '../FloatingScrollToTop';

export function Layout() {
  return (
    <>
      <Header />
      <main className="pt-[128px] w-full min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingScrollToTop />
    </>
  );
}
