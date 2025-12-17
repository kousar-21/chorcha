import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaServer, FaUsers, FaChartLine } from 'react-icons/fa';

const ConnectivitySection = () => {
  // Animation variants for floating elements
  const floatingVariant = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const nodes = [
    { name: "New York", x: "20%", y: "30%", icon: <FaServer /> },
    { name: "London", x: "75%", y: "20%", icon: <FaUsers /> },
    { name: "Tokyo", x: "85%", y: "50%", icon: <FaChartLine /> },
    { name: "Sydney", x: "25%", y: "70%", icon: <FaGlobeAmericas /> },
  ];

  return (
    <section className="relative bg-gray-900 py-24 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Animated Gradient Sphere */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-linear-to-tr from-indigo-600 via-purple-600 to-pink-500 rounded-full blur-[80px] opacity-20"
      />

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Connecting Your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
              Global Vision.
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Our infrastructure spans across continents, ensuring ultra-low latency and seamless 
            integration no matter where your users are located.
          </p>
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-indigo-500/20">
            Learn More
          </button>
        </motion.div>

        {/* Right: The Animated Map/Network Visual */}
        <div className="relative h-[400px] w-full border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden">
          
          {/* Connecting Lines (SVG Animation) */}
          <svg className="absolute inset-0 w-full h-full stroke-indigo-500/30 fill-none">
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M 150 120 Q 300 50 500 100 T 600 250" 
              strokeWidth="2"
            />
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              d="M 150 120 Q 200 300 180 320" 
              strokeWidth="2"
            />
          </svg>

          {/* Floating Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left: node.x, top: node.y }}
              variants={floatingVariant}
              animate="animate"
            >
              <div className="p-3 bg-gray-800 border border-indigo-400 rounded-full text-indigo-400 text-xl shadow-[0_0_15px_rgba(129,140,248,0.5)]">
                {node.icon}
              </div>
              <span className="text-white text-xs mt-2 font-medium bg-black/50 px-2 py-1 rounded">
                {node.name}
              </span>
            </motion.div>
          ))}

          {/* Center Pulsing Pulse */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-indigo-400 rounded-full z-10 relative" />
              <div className="absolute inset-0 w-4 h-4 bg-indigo-400 rounded-full animate-ping opacity-75" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConnectivitySection;