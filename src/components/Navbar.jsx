import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cart }) => {
  return (
    <div className="navbar px-4 md:px-8 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
        </div>
        <a className="font-extrabold text-2xl sm:text-3xl md:text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-2">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-2 sm:gap-4">
        <a className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 text-xl sm:text-2xl rounded-full hover:bg-gray-100 transition">

          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full shadow">
            {cart.length}
          </span>

          {/* Icon */}
          <FiShoppingCart className="text-2xl text-gray-700" />
        </a>
        <a className='text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap'>Login</a>
        <a className="btn text-xs sm:text-sm md:text-base px-3 sm:px-5 font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;