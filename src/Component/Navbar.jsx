import React from "react";
import logo from "../assets/download.png";

const Navbar = () => {
  return (
    <div className="bg-gray-900 py-4 px-60 text-sm text-white">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <img 
          src={logo} 
          alt="logo" 
          className="w-16 h-16 rounded-xl object-cover"
        />

        {/* Menu */}
        <div className="hidden md:flex gap-6">
          <p>ফিচারসমূহ</p>
          <p>চর্চা সাফল্য</p>
          <p>সাবস্ক্রিপশন</p>
        </div>

        {/* Button */}
        <button className="bg-green-600 py-2 px-4 rounded text-white">
          সাইন আপ করো
        </button>

      </div>
    </div>
  );
};

export default Navbar;
