import React from "react";
import { FaApple } from "react-icons/fa";

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
        <FaApple className="text-4xl" />

        <div>
          <p className="text-xs">GET IT ON</p>
          <p className="text-lg font-semibold">Google Play</p>
        </div>
      </div>

    </div>
  );
};

export default PlaystoreLogo;
