import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import logo from "../assets/download.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // Navigation categories for premium organization
  const navigationCategories = [
    {
      name: "প্রধান",
      items: [
        { name: "হোম", href: "/" },
        { name: "ফিচারসমূহ", href: "#features" },
      ]
    },
    {
      name: "পরিষেবা",
      items: [
        { name: "সেবাসমূহ", href: "/services" },
        { name: "মূল্য নির্ধারণ", href: "/pricing" },
        { name: "ছাড়", href: "/discount" },
        { name: "অফার", href: "/offer" },
      ]
    },
    {
      name: "আমাদের সম্পর্কে",
      items: [
        { name: "আমাদের সম্পর্কে", href: "/about" },
        { name: "চর্চার শুরু", href: "/chorchastart" },
        { name: "প্রতিক্রিয়া", href: "/testimonials" },
      ]
    },
    {
      name: "সাপোর্ট",
      items: [
        { name: "যোগাযোগ", href: "/contact" },
        { name: "প্রযুক্তি", href: "/tech" },
      ]
    },
    {
      name: "অতিরিক্ত",
      items: [
        { name: "ব্লগ", href: "/blog" },
        { name: "খেলার সুযোগ", href: "/gameopportunity" },
      ]
    }
  ];
  
  // All pages for comprehensive navigation
  const allPages = [
    { name: "হোম", href: "/" },
    { name: "ফিচারসমূহ", href: "#features" },
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "চর্চার শুরু", href: "/chorchastart" },
    { name: "সেবাসমূহ", href: "/services" },
    { name: "মূল্য নির্ধারণ", href: "/pricing" },
    { name: "ছাড়", href: "/discount" },
    { name: "অফার", href: "/offer" },
    { name: "যোগাযোগ", href: "/contact" },
    { name: "প্রতিক্রিয়া", href: "/testimonials" },
    { name: "ব্লগ", href: "/blog" },
    { name: "প্রযুক্তি", href: "/tech" },
    { name: "খেলার সুযোগ", href: "/gameopportunity" },
  ];

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:flex bg-white text-gray-800 text-sm sticky top-0 z-50 shadow-md border-b border-gray-200">
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

            {/* Desktop Menu with Dropdowns */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationCategories.map((category, index) => (
                <div 
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(index)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button 
                    className="flex items-center space-x-1 hover:text-green-600 transition-colors font-medium"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{category.name}</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                      dropdownOpen === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="py-2">
                      {category.items.map((item) => (
                        item.href.startsWith('/') ? (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                          >
                            {item.name}
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact Desktop Menu for Medium Screens */}
            <div className="hidden md:flex lg:hidden items-center gap-4">
              {allPages.slice(0, 5).map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="hover:text-green-600 transition-colors font-medium text-sm px-2 py-1"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-green-600 transition-colors font-medium text-sm px-2 py-1 cursor-pointer"
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
                className="bg-linear-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm"
              >
                সাইন আপ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Enhanced Design */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl md:hidden z-50 animate-fade-in-up">
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .nav-item {
            transition: all 0.2s ease;
          }
          .nav-item:hover {
            transform: translateY(-2px);
          }
          .nav-item:active {
            transform: translateY(0);
          }
        `}</style>
        <div className="flex overflow-x-auto hide-scrollbar px-2 py-3">
          {allPages.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.href}
                className="nav-item px-3 py-2 text-xs font-medium text-gray-700 hover:text-green-600 transition-all duration-200 whitespace-nowrap mx-1 first:ml-2 last:mr-2"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="nav-item px-3 py-2 text-xs font-medium text-gray-700 hover:text-green-600 transition-all duration-200 whitespace-nowrap mx-1 first:ml-2 last:mr-2 cursor-pointer"
              >
                {link.name}
              </a>
            )
          ))}
        </div>
      </nav>

      {/* Mobile Top Bar with Logo and Menu Button - Enhanced Design */}
      <nav className="md:hidden bg-white/90 backdrop-blur-lg text-gray-800 text-sm sticky top-0 z-40 shadow-md border-b border-gray-200 animate-fade-in-down">
        <style jsx>{`
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.5s ease-out 0.1s forwards;
            opacity: 0;
          }
        `}</style>
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Chorcha Logo" 
                className="w-8 h-8 rounded-lg object-cover shadow-sm"
              />
              <span className="text-lg font-bold text-gray-900">চর্চা</span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced Design */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } bg-white/95 backdrop-blur-lg border-t border-gray-200`}
        >
          <div className="px-4 py-3 space-y-1">
            {allPages.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 transition-all duration-200 transform hover:translate-x-1 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            
            {/* Mobile Auth Buttons */}
            <div className="pt-3 border-t border-gray-200 mt-3">
              <Link 
                to="/login" 
                className="block w-full text-center py-2 text-gray-700 hover:text-green-600 font-medium mb-2 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                লগ ইন
              </Link>
              <Link 
                to="/signup" 
                className="block w-full text-center py-2 bg-linear-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-sm transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                সাইন আপ
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;