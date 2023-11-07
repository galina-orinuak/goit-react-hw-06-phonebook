import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
