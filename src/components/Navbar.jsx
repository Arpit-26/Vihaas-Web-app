import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import { ReactComponent as menuIcon } from '../assets/hamburger-menu.svg';
import menuIcon from '../assets/hamburger-menu.svg';
import logo from '../assets/vihaas_logo_only.svg';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white  shadow-lg fixed top-6 left-0 w-full z-40">
      <div className="container mx-auto flex justify-between items-center py-2 px-1">
        <div className="pr-3">
          <Link className="flex text-center" to="/">
            <img src={logo} className=" mt-2 h-12  md:mt-0 md:h-16 " />
            {/* <ul className="text-base text-slate-950 md:text-lg  font-mono pt-4 pl-1 md:pt-2 md:pl-2  ">
              <li>Vihaas Design</li>
              <li>Technologies</li>
            </ul> */}
          </Link>
        </div>
        <ul className="hidden md:flex space-x-2 lg:space-x-4 gap-2 lg:gap-4">
          <li>
            <Link to="/" className="text-slate-950 hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-slate-950 hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-slate-950 hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-slate-950 hover:text-gray-400">
              Products
            </Link>
          </li>
          <li
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
          >
            <button>Careers</button>

            {/* Dropdown Menu */}
            {dropDown && (
              <div className=" absolute    w-fit bg-zinc-200 shadow-lg rounded">
                <Link
                  to="/careers"
                  className="block px-4 py-2 text-gray-800 hover:bg-white"
                >
                  Experienced Professional
                </Link>
                <Link
                  to="/careersFresher"
                  className="block px-4 py-2 text-gray-800 hover:bg-white"
                >
                  Entry Level
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/gallery" className="text-slate-950 hover:text-gray-400">
              Gallery
            </Link>
          </li>
        </ul>
        <div className=" flex  ">
          <Link
            to="/contact"
            className=" flex items-center text-sm text-white bg-gradient-to-tr from-purple-800 to-slate-600  hover:bg-purple-200  border border-transparent rounded-lg shadow-sm  font-medium py-1 px-1 md:py-2 md:px-2"
          >
            Contact Us
          </Link>
          <img
            onClick={toggleMobileMenu}
            src={menuIcon}
            alt=""
            className="ml-3   h-8 w-8  md:hidden   "
          />
        </div>
      </div>

      {/* Mobile Menu  */}
      {mobileMenuOpen && (
        <div className="md:hidden rounded-b-lg left-0 w-full bg-white shadow-lg z-50">
          <div className='className="container mx-auto py-4 px-4"'>
            <button
              className="text-gray-700 absolute right-4"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-slate-950 hover:text-gray-400"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-950 hover:text-gray-400"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-950 hover:text-gray-400"
                  onClick={toggleMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-slate-950 hover:text-gray-400"
                  onClick={toggleMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <button
                  className="w-full text-left text-slate-950 hover:text-gray-400"
                  onClick={() => setDropDown(!dropDown)}
                >
                  Careers
                </button>
                {dropDown && (
                  <div className="bg-zinc-200 shadow-lg rounded">
                    <Link
                      to="/careers"
                      className="block px-4 py-2 text-gray-800 hover:bg-white"
                      onClick={toggleMobileMenu}
                    >
                      Experienced Professional
                    </Link>
                    <Link
                      to="/careersFresher"
                      className="block px-4 py-2 text-gray-800 hover:bg-white"
                      onClick={toggleMobileMenu}
                    >
                      Entry Level
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-slate-950 hover:text-gray-400"
                  onClick={toggleMobileMenu}
                >
                  Gallery
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/contact"
                  className="text-sm text-white bg-gradient-to-tr from-purple-800 to-slate-600 hover:bg-purple-200 border border-transparent rounded-lg shadow-sm font-medium py-2 px-4 w-full text-center block"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
