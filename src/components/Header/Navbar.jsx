import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import deivery-truck from '../assets/images';

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="shadow-md z-50 w-full fixed top-0 left-0 flex items-center justify-between h-20 bg-[#EBE9FE] text-black px-4 ">
          <div className="flex items-center ">
            <img
              src={"./images/delivery-truck.png"}
              alt="Logo"
              className="h-8 mr-2"
            />
            <div className="text-xl font-bold ">Lazy SmS Online</div>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className="hover:underline"
              activeClassName="text-blue-400"
            >
              Home
            </NavLink>

            <NavLink
              to="/FAQs"
              className="hover:underline"
              activeClassName="text-blue-400"
            >
              FAQs
            </NavLink>

            <NavLink
              to="/About"
              className="hover:underline"
              activeClassName="text-blue-400"
            >
              About
            </NavLink>

            <NavLink
              to="/ContactUs"
              className="hover:underline"
              activeClassName="text-blue-400"
            >
              ContactUs
            </NavLink>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
