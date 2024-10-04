import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-950 top-0 left-0 bg-opacity-85 backdrop-blur-md shadow-md w-full z-20 fixed">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={LOGO_URL} className="h-8" alt="Retail Store" />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">Retail Store</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div className={`md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'} w-full`}>
            <ul className="flex flex-col font-bold text-lg p-4 md:p-0 mt-4 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link to="/" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                  Home
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/allproducts" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                  Products
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/carts" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                  Cart
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/orders" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                  Orders
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/login" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                  Login
                </Link>
              </li>
              <hr />

              {/* Profile Image Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="block py-2 px-3 text-white rounded focus:outline-none"
                >
                  <img
                    className="w-10 rounded-full border border-gray-400"
                    src="https://img.freepik.com/premium-photo/man-with-beard-green-shirt-with-word-s-it_1308172-488066.jpg?ga=GA1.1.442708528.1726944434&semt=ais_hybrid"
                    alt="Profile"
                  />
                </button>

                {/* Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg z-10">
                    <Link
                      to="/orders"
                      className="block px-4 py-2 rounded-xl text-gray-300 hover:bg-gray-600"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/logout"
                      className="block px-4 rounded-xl py-2 text-gray-300 hover:bg-gray-600"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
