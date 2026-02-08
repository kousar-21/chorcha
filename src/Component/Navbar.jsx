import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import logo from "../assets/download.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Main navigation links - essential pages only
  const mainLinks = [
    { name: "হোম", href: "/" },
    { name: "ফিচারসমূহ", href: "#features" },
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "সেবাসমূহ", href: "/services" },
    { name: "মূল্য নির্ধারণ", href: "/pricing" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <nav className="bg-white text-gray-800 text-sm sticky top-0 z-50 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Chorcha Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">চর্চা</span>
          </Link>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center gap-8">
            {mainLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-green-600 transition-colors font-medium px-1 py-2"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-green-600 transition-colors font-medium px-1 py-2 cursor-pointer"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors px-3 py-2"
            >
              লগ ইন
            </Link>
            <Link 
              to="/signup" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              সাইন আপ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-200`}
      >
        <div className="px-4 py-3 space-y-1">
          {mainLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.href}
                className="block py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md px-3 transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md px-3 transition-colors cursor-pointer"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            )
          ))}
          
          {/* Mobile Auth Buttons */}
          <div className="pt-3 border-t border-gray-200 mt-3">
            <Link 
              to="/login" 
              className="block w-full text-center py-2 text-gray-700 hover:text-green-600 font-medium mb-2"
              onClick={toggleMenu}
            >
              লগ ইন
            </Link>
            <Link 
              to="/signup" 
              className="block w-full text-center py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg"
              onClick={toggleMenu}
            >
              সাইন আপ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;