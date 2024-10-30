import React, { useState, useEffect } from "react";
import { FaFacebook, FaTelegram } from "react-icons/fa";

const ContactUs = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  //const handleScroll = () => {
  // Example logic: Hide the image when scrolled down 100px, show it otherwise
  //   if (window.scrollY > 400) {
  //     setIsImageVisible(false);
  //   } else {
  //     setIsImageVisible(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  //  }, []
  // );

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="mt-[88px] min-h-screen">
      <section className="bg-[#F0F4FF] p-8 md:p-16 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Section - Text and Contact Info */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            We’re Here to Help!
          </h1>
          <p className="text-gray-600 max-w-md">
            If you would like to contact us, please fill out our form below,
            email us, or use the social icons below. We look forward to hearing
            from you.
          </p>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">Join Group</h2>
            <div className="flex justify-center md:justify-start space-x-4 text-2xl text-blue-700">
              <FaFacebook />
              <FaTelegram />
            </div>
            <a
              href="mailto:support@lazysms.com"
              className="block text-pink-600"
            >
              support@lazysms.com
            </a>
            <p className="text-gray-500">Made with Love in Canada</p>
          </div>
        </div>

        {/* Right Section - Illustration */}
        {/* {isImageVisible && ( */}
        <div className="flex-4 hidden md:block">
          <img
            src="./images/contactuspic.webp"
            alt="Support Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
        {/* )} */}
      </section>
      {/* Contact Form */}
      <section className="text-gray-600 bg-[#FcFcFD] my-8 body-font relative">
        <div className="container px-5 py-6 mx-auto">
          <div className="lg:w-full md:w-2/3 mx-auto">
            <form className="flex flex-wrap m-2" onSubmit={handleSubmit}>
              <fieldset className="w-full">
                <legend className="text-2xl align-center font-semibold mb-4">
                  Contact Us
                </legend>

                {/* First Name and Last Name */}
                <div className="flex flex-wrap w-full">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="sr-only">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="First Name"
                        name="user_name"
                        className="w-full text-base rounded-lg shadow-lg py-5 bg-white p-4 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="lastname" className="sr-only">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        placeholder="Last Name"
                        name="user_name"
                        className="w-full text-base bg-white p-4 rounded-lg focus:outline-none shadow-lg py-5"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email and Subject */}
                <div className="flex flex-wrap w-full my-4">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        name="user_email"
                        className="w-full text-base bg-white p-4 rounded-lg focus:outline-none shadow-lg py-5"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="subject" className="sr-only">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        name="subject"
                        className="w-full text-base bg-white p-4 rounded-lg focus:outline-none shadow-lg py-5"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      className="w-full text-base h-96 bg-white p-4 rounded-lg focus:outline-none shadow-lg"
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Centering the Submit Button */}
                <div className="flex justify-center p-2 m-auto">
                  <button
                    type="submit"
                    className="text-white p-4 rounded px-8 tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg"
                    style={{
                      background:
                        "linear-gradient(59.39deg, rgb(127, 0, 255) 0%, rgb(225, 0, 255) 100%)",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      {/* Contact Form End */}
    </div>
  );
};

export default ContactUs;
