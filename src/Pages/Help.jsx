import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router';
// Import your local help animation if you have one
// import helpAnimation from '../assets/help-animation.json';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "অ্যাকাউন্ট সেটিংস",
      icon: "👤",
      topics: ["পাসওয়ার্ড পরিবর্তন", "প্রোফাইল আপডেট", "অ্যাকাউন্ট ডিলেট"],
      color: "blue"
    },
    {
      title: "পেমেন্ট ও সাবস্ক্রিপশন",
      icon: "💳",
      topics: ["বিকাশ পেমেন্ট", "রিফান্ড পলিসি", "প্রিমিয়াম প্ল্যান"],
      color: "green"
    },
    {
      title: "কোর্স ও লার্নিং",
      icon: "🎓",
      topics: ["কোর্স এনরোলমেন্ট", "সার্টিফিকেট ডাউনলোড", "কুইজ সমস্যা"],
      color: "purple"
    },
    {
      title: "প্রযুক্তিগত সহায়তা",
      icon: "🛠️",
      topics: ["ভিডিও লোড হচ্ছে না", "অ্যাপ ক্র্যাশ", "লগইন সমস্যা"],
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            আমরা কিভাবে আপনাকে সাহায্য করতে পারি?
          </h1>
          
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="আপনার সমস্যার কথা লিখুন (যেমন: পাসওয়ার্ড পরিবর্তন)..."
              className="w-full px-6 py-4 rounded-2xl shadow-2xl focus:ring-4 focus:ring-blue-300 outline-none text-gray-800 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-3 bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all">
              খুঁজুন
            </button>
          </div>
          
          <p className="mt-6 text-blue-100 opacity-80">
            জনপ্রিয় টপিক: <span className="underline cursor-pointer">পেমেন্ট সমস্যা</span>, <span className="underline cursor-pointer">সার্টিফিকেট</span>, <span className="underline cursor-pointer">কোর্স এক্সেস</span>
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-6xl mx-auto py-16 px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-6 bg-gray-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.topics.map((topic, i) => (
                  <li key={i} className="text-gray-500 hover:text-blue-600 cursor-pointer flex items-center text-sm">
                    <span className="mr-2">→</span> {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Support Options */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-12 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">এখনো সমাধান পাননি?</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              আমাদের কাস্টমার সাপোর্ট টিম সপ্তাহে ৭ দিন, ২৪ ঘণ্টা আপনার সহায়তায় নিয়োজিত। সরাসরি কথা বলতে নিচের মাধ্যমগুলো ব্যবহার করুন।
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mr-4">✉️</div>
                <div>
                  <p className="text-sm text-gray-500">ইমেইল করুন</p>
                  <p className="font-bold text-gray-900">support@chorcha.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-green-50 rounded-2xl border border-green-100">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white mr-4">📞</div>
                <div>
                  <p className="text-sm text-gray-500">কল করুন (সকাল ১০টা - রাত ৮টা)</p>
                  <p className="font-bold text-gray-900">+৮৮০ ১৭০০-০০০০০০</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-blue-50 flex items-center justify-center p-12 order-1 md:order-2">
            <Player
              autoplay
              loop
              src="https://lottie.host/6f9064f7-920b-402c-9686-302340325492/68v4A6kP6L.json"
              style={{ height: '350px', width: '350px' }}
            />
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="py-12 text-center text-gray-400 text-sm">
        <p>© ২০২৬ চর্চা লার্নিং প্লাটফর্ম। সকল অধিকার সংরক্ষিত।</p>
      </div>
    </div>
  );
};

export default HelpPage;