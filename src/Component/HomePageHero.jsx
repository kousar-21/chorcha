import React from 'react';
import { FaArrowRight, FaRocket, FaHandshake } from 'react-icons/fa'; // Added FaHandshake for a friendly touch

const HomePageHero = () => {
  return (
    // Outer container: Added 'relative' for absolute children (like background shape)
    <section className="relative bg-gray-900 text-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      
      {/* Background Shape / Visual Element (Updated feature) */}
      {/* This adds a non-disruptive, modern visual flair */}
      <div 
        className="absolute top-0 right-0 w-80 h-80 bg-indigo-500 rounded-full opacity-10 filter blur-3xl"
        style={{ transform: 'translate(40%, -40%)' }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 filter blur-3xl"
        style={{ transform: 'translate(-40%, 40%)' }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtitle/Pre-header */}
        <p className="text-sm sm:text-base font-medium text-indigo-400 uppercase tracking-widest mb-4 flex items-center justify-center">
            <FaRocket className="mr-2 h-4 w-4 animate-bounce-slow" /> 
            Building Tomorrow, Today
        </p>

        {/* Main Headline (Updated font weight and gradient) */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="block text-gray-100">Deliver Exceptional Results,</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Scale Your Digital Landscape.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-300 leading-relaxed">
          We specialize in high-performance full-stack solutions, blending creative design with robust engineering. Partner with us to define the next generation of user experience.
        </p>

        {/* Call-to-Action Buttons (Enhanced styling and interactivity) */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          
          {/* Primary CTA: Solid Button with Animation */}
          <a 
            href="/services" 
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-indigo-600 text-lg font-bold rounded-xl shadow-2xl text-white bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Our Services
            <FaArrowRight className="ml-3 h-5 w-5" />
          </a>

          {/* Secondary CTA: Ghost Button with Icon */}
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-xl text-indigo-400 border-2 border-indigo-400 bg-transparent hover:bg-indigo-900/40 transition-all duration-300 transform hover:scale-105"
          >
            <FaHandshake className="mr-3 h-5 w-5" />
            Start a Project
          </a>
        </div>

      </div>
    </section>
  );
};

export default HomePageHero;