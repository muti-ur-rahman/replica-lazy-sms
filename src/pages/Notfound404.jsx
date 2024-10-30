import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

function Notfound404() {
  return (
    <>
      <div className="w-full  flex flex-center border-b-indigo-500 rounded">
        <h2>Error 404</h2>
        <span>No webpage was found </span>
      </div>
    </>
  );
}

export default Notfound404;
