import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

function RootLayout({ items, children }) {
  return (
    <>
      <NavBarMenu items={items} />
      <main className="container my-4">{children}</main>
      <Footer />
    </>
  );
}

export default RootLayout;
