import React from 'react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            মূল্য নির্ধারণ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আপনার চাহিদা অনুযায়ী বিভিন্ন প্ল্যানে আমাদের সেবা উপভোগ করুন
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">বেসিক</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">৳২৯৯<span className="text-lg font-normal text-gray-500">/মাস</span></div>
              <p className="text-gray-600 mt-2">ছাত্রদের জন্য উপযোগী</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ১০০+ প্রশ্ন সমাধান
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                মৌলিক টিউটোরিয়াল
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                সীমিত সমর্থন
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                অগ্রাধিকার সমর্থন
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                এডভান্সড বিশ্লেষণ
              </li>
            </ul>
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center">
              সাইন আপ করুন
            </button>
          </div>

          {/* Pro Plan (Featured) */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 border-2 border-green-500 transform md:-translate-y-4 transition-transform duration-300 hover:scale-105 z-10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">সবচেয়ে জনপ্রিয়</span>
            </div>
            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">প্রো</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">৳৫৯৯<span className="text-lg font-normal text-gray-500">/মাস</span></div>
              <p className="text-gray-600 mt-2">ব্যস্ত ছাত্রদের জন্য</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                সীমাহীন প্রশ্ন সমাধান
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                এডভান্সড টিউটোরিয়াল
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                অগ্রাধিকার সমর্থন
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                এডভান্সড বিশ্লেষণ
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                কাস্টম ফিচারস
              </li>
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center">
              সাইন আপ করুন
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">প্রিমিয়াম</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">৳৯৯৯<span className="text-lg font-normal text-gray-500">/মাস</span></div>
              <p className="text-gray-600 mt-2">পেশাদারদের জন্য</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                সীমাহীন প্রশ্ন সমাধান
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                এক্সক্লুসিভ টিউটোরিয়াল
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ২৪/৭ সমর্থন
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                এডভান্সড বিশ্লেষণ
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                কাস্টম ফিচারস
              </li>
            </ul>
            <button className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center">
              সাইন আপ করুন
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">সাধারণ প্রশ্নাবলী</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">প্ল্যানগুলো কি পরিবর্তন করা যাবে?</h3>
              <p className="text-gray-600">হ্যাঁ, আপনি যেকোনো সময় আপনার প্ল্যান পরিবর্তন করতে পারেন। পরিবর্তন করার পর অব্যাহতি সময়ের জন্য অতিরিক্ত চার্জ প্রযোজ্য হবে না।</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">বিনামূল্যে ট্রায়াল কি উপলব্ধ?</h3>
              <p className="text-gray-600">হ্যাঁ, আমরা ৭ দিনের বিনামূল্যে ট্রায়াল সরবরাহ করি। ট্রায়াল শেষে স্বয়ংক্রিয়ভাবে কোনো প্ল্যানে চার্জ করা হবে না।</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">মূল্য নির্ধারণ মাসিক নাকি বার্ষিক?</h3>
              <p className="text-gray-600">আমাদের সকল প্ল্যান মাসিক ভিত্তিতে চালু হয়। বার্ষিক প্ল্যানের জন্য ২ মাস ফ্রি সুবিধা পাবেন।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;