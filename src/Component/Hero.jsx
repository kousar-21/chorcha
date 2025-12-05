import React from "react";
import { motion } from "framer-motion";
import phoneLogo from "../assets/download-phone.jpg";
import PlaystoreLogo from "../Shared/PlaystoreLogo";

// Tailwind class constants for clean code
const topSectionHeight = "h-[90vh]"; 
const bottomSectionHeight = "h-[10vh]"; 
const topSectionBg = "bg-gray-900";

// Lighter vibrant colors for the bottom 10% section
const horizontalGradient =
  "from-purple-400 via-pink-400 via-green-400 via-sky-400 to-yellow-400";

const Hero = () => {
  // Use a single class for the responsive phone image to improve consistency and maintain aspect ratio
  const phoneImageClasses = 
    "size-96 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl shadow-2xl shadow-gray-900 object-cover";

  return (
    // Main container set to take full viewport height for 90/10 split to work
    <div className="relative w-full min-h-screen overflow-hidden">
      
      {/* TOP — 90% Solid Background (bg-gray-900) */}
      <motion.div
        // Apply the 90% height and solid background
        className={`w-full ${topSectionHeight} ${topSectionBg} text-white px-6 sm:px-12 md:px-20 lg:px-24 xl:px-60 py-12 flex items-center relative`}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {/* Content Wrapper for layout */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 text-center md:text-left z-20 relative">
          
          {/* Text Section (Left) */}
          <div className="flex-1 space-y-4 sm:space-y-5 max-w-md mx-auto md:mx-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
              চর্চা করো নিজের গতিতে
            </h1>

            <p className="text-sm sm:text-base md:text-base text-gray-300">
              সিলেবাসের যেকোন টপিক থেকে প্রশ্ন খুঁজে প্র্যাকটিস করো, AI দিয়ে{" "}
              <br className="hidden sm:inline" />
              ব্যাখ্যা বুঝে নাও, আর মক টেস্ট দিয়ে নিজের প্রস্তুতি মাপো।
            </p>

            <div className="flex flex-col items-center md:items-start gap-2 sm:gap-3 pt-4">
              <PlaystoreLogo />
              <p className="text-xs sm:text-sm md:text-sm text-gray-300">
                100k+ downloads | ⭐ 4.6 Rating with over 8k Reviews
              </p>
            </div>
          </div>

          {/* Image Section (Right) */}
          <div className="flex-1 flex justify-center">
            <img
              src={phoneLogo}
              alt="App Screenshot"
              className={phoneImageClasses}
            />
          </div>
        </div>

        {/* --- Single Color Vertical Gradient in Lower Part of 90% Section --- */}
        {/* This div creates a subtle light effect that transitions from white/gray to transparent, 
            sitting on top of the bg-gray-900. */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1/4 z-10" // z-10 ensures it sits below the content
          style={{
            // Gradient from transparent at the top to a light white/gray at the bottom
            backgroundImage: `linear-gradient(to bottom, 
              rgba(243, 244, 246, 0) 0%, /* transparent white/gray */
              rgba(243, 244, 246, 0.05) 50%, 
              rgba(243, 244, 246, 0.15) 100% /* light gray/white for soft glow */
            )`,
          }}
        />

      </motion.div>

      {/* BOTTOM — 10% Horizontal Vibrant Gradient (as base) */}
      <div
        className={`w-full ${bottomSectionHeight} bg-linear-to-r ${horizontalGradient} relative z-20`} // z-20 keeps it above the fade
      />
    </div>
  );
};

export default Hero;