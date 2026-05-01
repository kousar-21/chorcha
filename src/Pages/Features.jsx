import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import featureAnimation from '../assets/our-team.json';

const Features = () => {
  const featureList = [
    {
      id: 1,
      title: "ইন্টারঅ্যাক্টিভ ভিডিও লেসন",
      description: "শুধুমাত্র ভিডিও দেখা নয়, প্রতিটি লেসনের মাঝে কুইজ এবং প্র্যাকটিস সেশন যা আপনার শেখাকে করবে আরও মজবুত।",
      icon: "🎥",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "লাইভ মেন্টর সাপোর্ট",
      description: "যেকোনো সমস্যায় আটকে গেলে আমাদের অভিজ্ঞ মেন্টররা সরাসরি গাইডেন্স প্রদান করবেন।",
      icon: "🎧",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      title: "ইন্ডাস্ট্রি-রেডি প্রজেক্ট",
      description: "থিউরির পাশাপাশি বাস্তবসম্মত প্রজেক্ট তৈরি করুন যা আপনার পোর্টফোলিওকে করবে অন্যদের থেকে আলাদা।",
      icon: "💻",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      title: "ভেরিফাইড সার্টিফিকেট",
      description: "কোর্স শেষে অর্জন করুন ডিজিটাল সার্টিফিকেট, যা আপনি সরাসরি লিঙ্কডইন বা সিভিতে যুক্ত করতে পারবেন।",
      icon: "🎓",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 5,
      title: "অফলাইন এক্সেস",
      description: "ইন্টারনেট নেই? চিন্তা নেই! ভিডিওগুলো আগে থেকেই ডাউনলোড করে যেকোনো সময় অফলাইনে শিখুন।",
      icon: "📱",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 6,
      title: "প্রগ্রেস ট্র্যাকিং ড্যাশবোর্ড",
      description: "আপনার লার্নিং গ্রাফ এবং ডেইলি গোল ট্র্যাক করার জন্য রয়েছে ডেডিকেটেড অ্যানালিটিক্স ড্যাশবোর্ড।",
      icon: "📊",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      id: 7,
      title: "কমিউনিটি ফোরাম",
      description: "হাজারো শিক্ষার্থীর সাথে আলোচনা করুন, আইডিয়া শেয়ার করুন এবং একসাথে প্রজেক্টে কাজ করার সুযোগ নিন।",
      icon: "🤝",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <div className="relative bg-(--bg-primary) py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">সব সেরা ফিচার এক জায়গায়</h2>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            কেন আপনি <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">চর্চা</span> বেছে নেবেন?
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            আমরা বিশ্বাস করি মানসম্মত শিক্ষা সবার অধিকার। তাই আমরা যুক্ত করেছি এমন সব ফিচার যা আপনার লার্নিং জার্নিকে করবে আনন্দদায়ক।
          </p>
        </div>

        {/* Features Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Main Large Feature Card (Occupies 2 columns on large screens) */}
          <div className="lg:col-span-2 bg-Linear-to-br from-blue-600 to-indigo-800 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden group shadow-2xl shadow-blue-200">
            <div className="relative z-10">
              <span className="bg-slate-600/40 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase mb-6 inline-block">Premium Feature</span>
              <h3 className="text-2xl text-slate-500 font-bold mb-4">{featureList[0].title}</h3>
              <p className="text-blue-500 text-md max-w-md leading-relaxed mb-8">
                {featureList[0].description}
              </p>
              <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-xl hover:scale-105 transition-transform">
                বিস্তারিত দেখুন
              </button>
            </div>
            
            {/* Lottie Animation for the Large Card */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-60 h-60 opacity-20 lg:opacity-100 pointer-events-none group-hover:scale-110 transition-transform duration-500">
              <Player
                autoplay
                loop
                src={featureAnimation}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>

          {/* Individual Feature Cards (3 to 7) */}
          {featureList.slice(1).map((feature) => (
            <div 
              key={feature.id} 
              className="relative bg-(--bg-primary) p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group"
            >
              <div className={`${feature.bgColor} ${feature.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-500 mb-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats/Trust Section (Optional 7th Section Highlight) */}
        <div className="mt-20 p-1 relative bg-(--bg-primary) rounded-[3rem] border border-slate-100">
            <div className="relative bg-(--bg-primary) rounded-[2.8rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">🚀</div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-500">১০০% সাকসেস রেট</h4>
                        <p className="text-slate-500">আমাদের কোর্স সম্পন্ন করার পর ক্যারিয়ার গড়ার হার।</p>
                    </div>
                </div>
                <div className="h-px w-full md:w-px md:h-12 bg-slate-200"></div>
                <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-2xl">💎</div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-500">লাইফ-টাইম এক্সেস</h4>
                        <p className="text-slate-500">একবার কিনলে আজীবন শেখার সুবিধা।</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Features;