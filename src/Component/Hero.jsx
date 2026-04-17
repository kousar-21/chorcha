import React from "react";
import { motion } from "framer-motion";
import phoneLogo from "../assets/download-phone.jpg";
import PlaystoreLogo from "../Shared/PlaystoreLogo";

/**
 * Professional Hero Component
 * Removed heavy gradients for a cleaner, high-end "Chorcha" brand aesthetic.
 */

const Hero = () => {
  // Centralized Tailwind classes for a "Clean Code" approach
  const styles = {
    container: "relative w-full min-h-screen bg-[var(--bg-primary)] overflow-hidden flex flex-col",
    topSection: "flex-1 w-full px-6 sm:px-12 md:px-20 lg:px-24 xl:px-40 flex items-center relative",
    bottomSection: "h-20 w-full border-t border-white/5 bg-white/[0.02] backdrop-blur-md flex items-center justify-center",
    heading: "text-4xl sm:text-5xl lg:text-7xl font-black text-[var(--text-primary)] leading-[1.1] tracking-tight",
    paragraph: "text-lg md:text-xl text-[var(--text-tertiary)] max-w-xl leading-relaxed font-medium",
    imageWrapper: "relative group perspective-1000",
    image: "w-full max-w-[300px] md:max-w-md rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 object-cover transition-all duration-700 group-hover:rotate-1 group-hover:scale-[1.03]"
  };

  return (
    <div className={styles.container}>
      
      {/* --- TOP CONTENT AREA (90%) --- */}
      <section className={styles.topSection}>
        {/* Background Decorative Element - Soft Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 z-20 relative">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8 text-center md:text-left"
          >
            <div className="space-y-4">
              <h1 className={styles.heading}>
                চর্চা করো নিজের <br className="hidden lg:block"/>
                <span className="text-blue-500">গতিতে</span>
              </h1>
              <p className={styles.paragraph}>
                সিলেবাসের যেকোনো টপিক থেকে প্রশ্ন খুঁজে প্র্যাকটিস করো, 
                <span className="text-white"> AI </span> দিয়ে ব্যাখ্যা বুঝে নাও, আর মক টেস্ট দিয়ে নিজের প্রস্তুতি মাপো।
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="hover:scale-105 transition-transform duration-300">
                <PlaystoreLogo />
              </div>
              
              <div className="flex items-center gap-4 text-sm font-semibold tracking-wide text-(--text-tertiary)">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-(--bg-primary) bg-slate-800 flex items-center justify-center text-[10px]">👤</div>
                   ))}
                </div>
                <p>100k+ learners joined already</p>
              </div>
            </div>
          </motion.div>

          {/* Phone Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className={styles.imageWrapper}>
              {/* Subtle back-light for the phone */}
              <div className="absolute -inset-1 bg-linear-to-tr from-blue-600 to-cyan-400 rounded-[2.6rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={phoneLogo}
                alt="Chorcha App UI"
                className={styles.image}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROFESSIONAL ACCENT FOOTER (10%) --- */}
      <footer className={styles.bottomSection}>
        <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-8">
             <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Trusted By Students From</span>
             <div className="flex gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Add small placeholder logos of institutions if needed */}
                <span className="font-bold text-white text-xs">RAJSHAHI COLLEGE</span>
                <span className="font-bold text-white text-xs">DU</span>
                <span className="font-bold text-white text-xs">BUET</span>
             </div>
          </div>
          
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-xs font-medium text-slate-400">Servers Live & Secure</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;