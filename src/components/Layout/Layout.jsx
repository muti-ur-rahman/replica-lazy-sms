import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <div style={{ isolation: "isolate" }}> */}
      <Navbar />
      <main className=" ">
        <Outlet />
      </main>
      <Footer />
      {/* </div> */}
    </>
  );
};

export default Layout;
