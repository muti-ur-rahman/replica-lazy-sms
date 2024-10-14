import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

function FAQs() {
  return (
    <>
      <Navbar />
      <section className=" flex items-center justify-center bg-[#EBE9FE] shadow-lg  p-8 mx-4  mt-14  max-w-screen-md  ">
        {/* w-{1043} h-screen mx-5 bg-[#EBE9FE] shadow-lg w-5/5 px-4 pb-8 pt-10 flex justify-between flex-col */}
        <div className="text-lg text-justify gap-4">
          {/* shadow-2xl my-4 container lg:w-10/12 w-11/12 rounded */}
          <p>
            ////Welcome to Lazysms.com - your trusted online privacy and
            security partner. Our mission is crystal clear: to put an end to the
            nuisance of spam calls and safeguard your valuable data. We
            understand the importance of maintaining your online privacy, and
            we're here to make sure you have the tools you need.Welcome to
            Lazysms.com - your trusted online privacy and security partner. Our
            mission is crystal clear: to put an end to the nuisance of spam
            calls and safeguard your valuable data. We understand the importance
            of maintaining your online privacy, and we're here to make sure you
            have the tools you need.
          </p>
          <p>
            Welcome to Lazysms.com - your trusted online privacy and security
            partner. Our mission is crystal clear: to put an end to the nuisance
            of spam calls and safeguard your valuable data. We understand the
            importance of maintaining your online privacy, and we're here to
            make sure you have the tools you need.
          </p>
          <p>
            Welcome to Lazysms.com - your trusted online privacy and security
            partner. Our mission is crystal clear: to put an end to the nuisance
            of spam calls and safeguard your valuable data. We understand the
            importance of maintaining your online privacy, and we're here to
            make sure you have the tools you need.
          </p>
          <p>
            Welcome to Lazysms.com - your trusted online privacy and security
            partner. Our mission is crystal clear: to put an end to the nuisance
            of spam calls and safeguard your valuable data. We understand the
            importance of maintaining your online privacy, and we're here to
            make sure you have the tools you need.
          </p>
        </div>
      </section>
      <div className="bg-emerald-800">
        <Footer />
      </div>
    </>
  );
}

export default FAQs;
