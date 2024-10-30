import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <>
      <div className=" mt-20 bg-black">
        <div className="min-h-screen topblog px-0 lg:px-12 flex flex-col justify-start rounded-lg items-center bg-white ">
          <div className="shadow-2xl my-4 container lg:w-10/12 w-11/12 rounded">
            <h1 className="text-center font-bold py-5 text-5xl text-gray-600">
              About Lazysms
            </h1>
            <h2 className="text-gray-600 font-bold text-3xl text-center ">
              Your Privacy and Security Guardians
            </h2>
            <div className="gap-4">
              <p className="leading-8 text-gray-600 text-justify lg:text-center px-2 lg:px-12 py-4">
                Welcome to Lazysms.com - your trusted online privacy and
                security partner. Our mission is crystal clear: to put an end to
                the nuisance of spam calls and safeguard your valuable data. We
                understand the importance of maintaining your online privacy,
                and we're here to make sure you have the tools you need.
              </p>
              <p className="leading-8 text-gray-600 text-justify lg:text-center px-2 lg:px-12 py-4">
                At Lazysms.com, we offer a straightforward solution. We provide
                users with free virtual phone numbers that can be used for
                signing up on various websites and apps. Say goodbye to the
                anxiety of sharing your personal phone number with unknown or
                untrusted sources. With us, your online experience becomes safer
                and more secure.
              </p>
              <p className="leading-8 text-gray-600 text-justify  lg:text-center px-2 lg:px-12 py-4">
                Join forces with Lazysms.com and step into a world where your
                online privacy and data protection are of utmost importance.
                We're committed to making your digital life hassle-free and
                secure. Together, we can ensure a safer online experience for
                everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
