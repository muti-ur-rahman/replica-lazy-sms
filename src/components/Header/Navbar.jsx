// import React, { Component } from 'react'
// import LazySmsOnline from './assets/images/LazySmsOnline.webp'

// export class Navbar extends Component {
//   render() {
//     return (
//    <>
// <nav className= 'shadow-md z-50 w-full fixed top-0 left-0 flex items-center justify-between h-20 bg-gray-800 text-white px-4'>
//        <div className='flex items-center'>
//        <img src={LazySmsOnline} alt="Logo" className="h-8 mr-2" /> {/* Logo */}
//        <div class="text-xl font-bold">Lazy SmS Online</div>
//        </div>
//         <div class="text-center flex-grow">Welcome to My Site</div>
//         <div class="flex space-x-4">
//             <a href="#link1" class="hover:underline">Home</a>
//             <a href="#link2" class="hover:underline">Link 2</a>
//             <a href="#link3" class="hover:underline">Link 3</a>
//             <a href="#link4" class="hover:underline">Link 4</a>
//         </div>
//     </nav>
//    </>
//     )
//   }
// }

// export default Navbar

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';   
// import logo from '../assets/images/logo.png';   

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className='shadow-md z-50 w-full fixed top-0 left-0 flex items-center justify-between h-20 bg-gray-800 text-white px-4'>
          <div className='flex items-center'>
            <img src={logo} alt="Logo" className="h-8 mr-2" />
            <div className="text-xl font-bold">Lazy SmS Online</div>
          </div>
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <div className="flex space-x-4">
            <NavLink to="/" className="hover:underline" activeClassName="text-blue-400">
              Home
            </NavLink>
            <NavLink to="/link2" className="hover:underline" activeClassName="text-blue-400">
              FAQs
            </NavLink>
            <NavLink to="/link3" className="hover:underline" activeClassName="text-blue-400">
              About
            </NavLink>
            <NavLink to="/link4" className="hover:underline" activeClassName="text-blue-400">
              ContactUs
            </NavLink>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
