import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import BackToTop from '@/components/BackToTop';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <BackToTop />
      <Footer />
    </>
  );
}

export default Layout;
