import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility

  return (
    <>
      <nav className="shadow-md  z-50 w-full fixed top-0 left-0 bg-[#EBE9FE] text-black px-8">
        {/* Navbar Container */}
        <div className="flex flex-row justify-between items-center h-20">
          {/* Logo Section */}
          <a className="font-medium text-2xl cursor-pointer flex items-center gap-1">
            <img src="./images/logo01.png" alt="" className="p-3 w-14 h-14" />
            <div className="text-black font-medium text-2xl">QuickSMS</div>
          </a>
          <div class="flex">
            <a
{/*               href="https://play.google.com/store/apps/details?id=receive.sms.verification"
              target="_blank" */}

  https://play.google.com/store/apps
            >
              <img
                src="./images/gplaylogo.webp"
                alt=""
                loading="lazy"
                class="w-22 hidden md:block  h-9 mx-2"
              />
            </a>
          </div>
          {/* Hamburger Icon (Visible on Small Screens) */}
          <button
            className="block md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavItem to="/" label="Home" />
            <NavItem to="/FAQs" label="FAQs" />
            <NavItem to="/About" label="About" />
            <NavItem to="/ContactUs" label="Contact Us" />
          </div>
        </div>

        {/* Mobile Menu: Links Below Logo */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden w-full bg-[#EBE9FE]`}
        >
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            <NavItem to="/" label="Home" onClick={() => setIsOpen(false)} />
            <NavItem to="/FAQs" label="FAQs" onClick={() => setIsOpen(false)} />
            <NavItem
              to="/About"
              label="About"
              onClick={() => setIsOpen(false)}
            />
            <NavItem
              to="/ContactUs"
              label="Contact Us"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

// Reusable Nav Item Component
const NavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? "text-[#E100FF] hover:underline" : "hover:underline"
    }
    onClick={onClick}
  >
    {label}
  </NavLink>
);

export default Navbar;
