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
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-sm"
              >
                সাইন আপ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Visible only on mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
        <div className="flex overflow-x-auto hide-scrollbar px-4 py-2">
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          {allPages.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.href}
                className="flex-shrink-0 px-3 py-2 text-xs font-medium text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="flex-shrink-0 px-3 py-2 text-xs font-medium text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                {link.name}
              </a>
            )
          ))}
        </div>
      </nav>

      {/* Mobile Top Bar with Logo and Menu Button */}
      <nav className="md:hidden bg-white text-gray-800 text-sm sticky top-0 z-40 shadow-md border-b border-gray-200">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Chorcha Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-lg font-bold text-gray-900 hidden sm:block">চর্চা</span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } bg-white border-t border-gray-200`}
        >
          <div className="px-4 py-3 space-y-1">
            {allPages.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md px-3 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md px-3 transition-colors cursor-pointer"
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
                className="block w-full text-center py-2 text-gray-700 hover:text-green-600 font-medium mb-2"
                onClick={() => setIsOpen(false)}
              >
                লগ ইন
              </Link>
              <Link 
                to="/signup" 
                className="block w-full text-center py-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-sm"
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