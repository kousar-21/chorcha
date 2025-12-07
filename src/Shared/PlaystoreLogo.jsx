import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa"; // 1. Import FaGooglePlay

const PlaystoreLogo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">

      {/* Apple Card */}
      <div className="flex items-center gap-4 border border-white bg-black text-white px-4 py-3 rounded-lg">
        <FaApple className="text-4xl" />

        <div>
          <p className="text-xs">Download on the</p>
          <p className="text-lg font-semibold">App Store</p>
        </div>
      </div>

      {/* Google Play Card */}
      <div className="flex items-center gap-4 border border-white bg-black text-white px-4 py-3 rounded-lg">
        {/* 2. Use FaGooglePlay and apply colorful styling */}
        <FaGooglePlay 
          className="text-4xl" 
          style={{ 
            color: '#34A853', // Google Green
            filter: 'drop-shadow(0 0 1px #EA4335) drop-shadow(0 0 1px #4285F4) drop-shadow(0 0 1px #FBBC05)' 
          }} 
        />

        <div>
          <p className="text-xs">GET IT ON</p>
          <p className="text-lg font-semibold">Google Play</p>
        </div>
      </div>

    </div>
  );
};

export default PlaystoreLogo;