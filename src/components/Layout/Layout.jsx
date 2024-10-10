// src/components/Layout.jsx

import React from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Outlet for nested routes goes here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
