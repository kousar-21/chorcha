import React from "react";
import { motion } from "framer-motion";
import phoneLogo from "../assets/download-phone.jpg";
import PlaystoreLogo from "../Shared/PlaystoreLogo";

const Hero = () => {
  return (
    <div className="relative">

      {/* TOP — Solid Background */}
      <motion.div
        className="bg-gray-900 text-white px-6 sm:px-12 md:px-20 lg:px-60 py-12"
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 text-center md:text-left">

          {/* Text Section */}
          <div className="flex-1 space-y-4 sm:space-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
              চর্চা করো নিজের গতিতে
            </h1>

            <p className="text-sm sm:text-base md:text-base text-gray-300">
              সিলেবাসের যেকোন টপিক থেকে প্রশ্ন খুঁজে প্র্যাকটিস করো, AI দিয়ে <br />
              ব্যাখ্যা বুঝে নাও, আর মক টেস্ট দিয়ে নিজের প্রস্তুতি মাপো।
            </p>

            <div className="flex flex-col items-center md:items-start gap-2 sm:gap-3">
              <PlaystoreLogo />
              <p className="text-xs sm:text-sm md:text-sm text-gray-300">
                100k+ downloads | ⭐ 4.6 Rating with over 8k Reviews
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <img
              src={phoneLogo}
              alt="App"
              className="w-48 sm:w-60 md:w-80 lg:w-96 rounded-xl object-cover shadow-lg"
            />
          </div>

        </div>
      </motion.div>

      {/* BOTTOM — Gradient */}
      <div className="w-full h-20 bg-gradient-to-b from-green-900 to-transparent" />
    </div>
  );
};

export default Hero;
