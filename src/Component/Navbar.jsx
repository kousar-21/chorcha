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

  // Define Nav links as an array for cleaner iteration
  const primaryLinks = [
    { name: "ফিচারসমূহ", href: "#features" },
    { name: "চর্চা সাফল্য", href: "#success" },
    { name: "সাবস্ক্রিপশন", href: "#subscription" },
  ];
  
  const pageLinks = [
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "সেবাসমূহ", href: "/services" },
    { name: "যোগাযোগ", href: "/contact" },
    { name: "প্রতিক্রিয়া", href: "/testimonials" },
    { name: "মূল্য নির্ধারণ", href: "/pricing" },
    { name: "ব্লগ", href: "/blog" },
    { name: "প্রযুক্তি", href: "/tech" },
    { name: "ছাড়", href: "/discount" },
  ];

  return (
    <nav className="bg-gray-900 text-white text-sm sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          
          {/* 1. Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="logo" 
              className="w-12 h-12 rounded-xl object-cover" // Reduced size slightly for better Navbar fit
            />
          </a>

          {/* 2. Desktop Menu Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {/* Primary navigation links */}
            <div className="flex items-center gap-6 lg:gap-8">
              {primaryLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-green-400 transition-colors cursor-pointer font-medium border-b border-transparent hover:border-green-400 pb-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Separator for page links */}
            <div className="h-6 w-px bg-gray-600"></div>
            
            {/* Page navigation links */}
            <div className="flex items-center gap-4">
              {pageLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-green-400 transition-colors font-medium border-b border-transparent hover:border-green-400 pb-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Desktop Button & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop Button */}
            <button className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded transition-colors text-white font-medium whitespace-nowrap">
              সাইন আপ করো
            </button>
            
            {/* Mobile Menu Icon (Hamburger/Close) */}
            <button 
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu (Visible when isOpen is true) */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px]' : 'max-h-0'
        } bg-gray-800 border-t border-gray-700`}
      >
        <div className="flex flex-col px-4 py-4 space-y-1">
          <div className="mb-3">
            <h3 className="text-xs uppercase font-semibold text-gray-400 mb-2">ফিচারসমূহ</h3>
            {primaryLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-base hover:bg-gray-700 rounded-md px-2 transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div>
            <h3 className="text-xs uppercase font-semibold text-gray-400 mb-2">পেজসমূহ</h3>
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 text-base hover:bg-gray-700 rounded-md px-2 transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;