import React from 'react';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

const HomePageHero = () => {
  return (
    // Outer container: Full width, dark background for contrast
    <section className="bg-gray-900 text-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtitle/Pre-header */}
        <p className="text-sm sm:text-base font-semibold text-indigo-400 uppercase tracking-wider mb-4 flex items-center justify-center">
            <FaRocket className="mr-2 h-4 w-4" /> 
            Welcome to the Future of Development
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          <span className="block">Build Better, Deploy Faster,</span>
          <span className="block text-indigo-400">Scale Your Business Instantly.</span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
          We specialize in high-performance full-stack solutions, blending creative design with robust engineering to deliver products that don't just meet expectations—they define them.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Primary CTA */}
          <a 
            href="/services" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            View Our Services
          </a>

          {/* Secondary CTA */}
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-indigo-400 text-base font-medium rounded-full shadow-lg text-indigo-400 bg-gray-800 hover:bg-gray-700 transition duration-300 transform hover:bg-opacity-80"
          >
            Get a Free Consultation
            <FaArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HomePageHero;