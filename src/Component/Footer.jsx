import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Logo & Social (2 columns wide on small screens, 1 on md+) */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-extrabold bg-clip-text text-transparent b-linear-to-r from-indigo-400 to-purple-400">
              YourBrand
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Building the future, one line of code at a time. Empowering your vision with technology.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded transition-colors duration-200"
                  aria-label={link.icon.name.replace('Fa', '')}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2-4: Link Sections */}
          {[
            { title: 'Company', links: companyLinks },
            { title: 'Support', links: supportLinks },
            { title: 'Legal', links: legalLinks },
          ].map((section, sectionIndex) => (
            <div key={sectionIndex} className="col-span-1">
              <h4 className="text-lg font-semibold text-gray-200 mb-5 border-b border-gray-700/50 pb-1">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:text-indigo-400 text-sm transition-colors duration-200 block w-fit"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Newsletter */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-200 mb-5 border-b border-gray-700/50 pb-1">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Join our mailing list for exclusive updates and content.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 text-sm text-gray-900 rounded-l-lg border-none focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 text-sm font-medium rounded-r-lg hover:bg-indigo-700 transition duration-200 disabled:opacity-50 flex items-center"
              >
                <FaEnvelope className="mr-1 h-4 w-4" /> Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Separator Line & Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-xs">
            &copy; {currentYear} YourBrand Name. All rights reserved. | Powered by Passion.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;