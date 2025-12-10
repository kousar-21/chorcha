import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  // Define your navigation links
  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Our Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  // Define social media links
  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/yourbrand' },
    { icon: FaTwitter, href: 'https://twitter.com/yourbrand' },
    { icon: FaInstagram, href: 'https://instagram.com/yourbrand' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/yourbrand' },
  ];
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-indigo-500/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Column 1: Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-indigo-400">YourBrand</h3>
            <p className="mt-4 text-gray-400 text-sm">
              Building the future, one line of code at a time.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Company Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Legal Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter (Optional, but useful) */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to our newsletter for the latest news.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 text-sm text-gray-900 rounded-l-lg focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 text-sm rounded-r-lg hover:bg-indigo-700 transition duration-200"
              >
                Go
              </button>
            </form>
          </div>

        </div>

        {/* Separator Line */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          {/* Bottom Row: Copyright */}
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} YourBrand Name. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;