import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import questionAnimation from "../assets/TechCustomer Support.json"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "সব প্রশ্ন" },
    { id: "account", label: "অ্যাকাউন্ট" },
    { id: "payment", label: "পেমেন্ট" },
    { id: "learning", label: "লার্নিং" }
  ];

  const faqData = [
    {
      category: "account",
      question: "চর্চা একাউন্ট কিভাবে তৈরি করব?",
      answer: "আমাদের প্ল্যাটফর্মের উপরের ডানদিকের 'সাইন আপ' বাটনে ক্লিক করুন। আপনার নাম, বৈধ ইমেইল এড্রেস এবং একটি শক্তিশালী পাসওয়ার্ড দিয়ে ফর্মটি পূরণ করুন। ইমেইল ভেরিফিকেশন সম্পন্ন করার পর আপনি লার্নিং ড্যাশবোর্ডে প্রবেশ করতে পারবেন।"
    },
    {
      category: "account",
      question: "আমি কি পাসওয়ার্ড পরিবর্তন করতে পারব?",
      answer: "হ্যাঁ, প্রোফাইল সেটিংস (Profile Settings) থেকে 'Security' ট্যাবে গিয়ে আপনি পাসওয়ার্ড আপডেট করতে পারেন। যদি আপনি বর্তমান পাসওয়ার্ড ভুলে যান, তবে লগইন পেজে থাকা 'Forgot Password' অপশনটি ব্যবহার করে ইমেইলের মাধ্যমে পাসওয়ার্ড রিসেট করতে পারবেন।"
    },
    {
      category: "learning",
      question: "চর্চা প্ল্যাটফর্মটি কি বিনামূল্যে ব্যবহার করা যায়?",
      answer: "আমাদের এখানে অনেকগুলো ফান্ডামেন্টাল কোর্স এবং রিসোর্স সম্পূর্ণ বিনামূল্যে পাওয়া যায়। তবে ইন্ডাস্ট্রি-লেভেল স্কিল এবং সার্টিফিকেশনের জন্য আমাদের কিছু প্রিমিয়াম কোর্স রয়েছে যা নামমাত্র সাবস্ক্রিপশন ফি দিয়ে এক্সেস করা যায়।"
    },
    {
      category: "payment",
      question: "কি কি মাধ্যমে কোর্স পেমেন্ট করা যাবে?",
      answer: "আমরা বাংলাদেশের সকল জনপ্রিয় পেমেন্ট মেথড সাপোর্ট করি, যার মধ্যে রয়েছে বিকাশ (bKash), নগদ (Nagad), রকেট (Rocket) এবং যেকোনো লোকাল ক্রেডিট বা ডেবিট কার্ড।"
    },
    {
      category: "learning",
      question: "কোর্স শেষে কি সার্টিফিকেট পাওয়া যাবে?",
      answer: "হ্যাঁ, প্রতিটি কোর্স এবং কুইজ সফলভাবে সম্পন্ন করার পর আপনি একটি ভেরিফাইড ডিজিটাল সার্টিফিকেট পাবেন যা আপনি সরাসরি লিঙ্কডইন বা আপনার সিভিতে ব্যবহার করতে পারবেন।"
    }
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-80 h-80 mx-auto mb-2">
            <Player
              autoplay
              loop
              src={questionAnimation}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            আমরা আপনাকে কিভাবে <span className="text-blue-600">সাহায্য</span> করতে পারি?
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            চর্চা প্ল্যাটফর্ম নিয়ে আপনার যাবতীয় কৌতূহল এবং প্রশ্নের উত্তর এখানে সাজানো রয়েছে।
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 pb-24">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {setActiveCategory(cat.id); setActiveIndex(null);}}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat.id 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105" 
                : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <div 
                key={index} 
                className={`group border rounded-2xl transition-all duration-300 ${
                  activeIndex === index 
                  ? "bg-white border-blue-200 shadow-xl" 
                  : "bg-white border-gray-100 hover:border-blue-100 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold transition-colors ${
                    activeIndex === index ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-500'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    activeIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-50 text-gray-400'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                    <div className="pt-2 border-t border-gray-50 italic">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-400">
              এই ক্যাটাগরিতে কোনো প্রশ্ন পাওয়া যায়নি।
            </div>
          )}
        </div>

        {/* Contact CTA Section */}
        <div className="mt-20 bg-gray-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">আপনার প্রশ্নের উত্তর পাননি?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              আমাদের সাপোর্ট এজেন্টরা আপনাকে দ্রুত সহায়তা করার জন্য প্রস্তুত আছেন।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-xl transition-all shadow-lg">
                মেসেজ দিন
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-10 rounded-xl backdrop-blur-md transition-all border border-white/10">
                ইমেইল করুন
              </button>
            </div>
          </div>
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;