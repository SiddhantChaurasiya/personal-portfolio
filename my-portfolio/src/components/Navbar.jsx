import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { personalInfo } from '../data/info';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="bg-light/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Name */}
          <div className="flex-shrink-0">
            <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold text-accent cursor-pointer">
              {personalInfo.name}
            </Link>
          </div>

          {/* Right Side: Links and Mobile Button */}
          <div className="flex items-center">
            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map(link => (
                  <Link
                    key={link}
                    to={link.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-black hover:text-accent px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-black">
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="text-black hover:text-accent block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

