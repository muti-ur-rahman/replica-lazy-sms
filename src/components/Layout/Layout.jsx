// src/components/Layout.jsx
import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
// import Content from '../Content/Content';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      </>

    );
};

export default Layout;
