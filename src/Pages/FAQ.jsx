import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "চর্চা একাউন্ট কিভাবে তৈরি করব?",
      answer: "আমাদের সাইন আপ পেজে গিয়ে আপনার নাম, ইমেইল এবং পাসওয়ার্ড দিয়ে সহজেই একটি একাউন্ট তৈরি করতে পারেন।"
    },
    {
      question: "আমি কি পাসওয়ার্ড পরিবর্তন করতে পারব?",
      answer: "হ্যাঁ, আপনার প্রোফাইল সেটিংস থেকে যেকোনো সময় পাসওয়ার্ড পরিবর্তন করতে পারবেন। যদি পাসওয়ার্ড ভুলে যান, তবে 'Forgot Password' লিঙ্কে ক্লিক করুন।"
    },
    {
      question: "চর্চা প্ল্যাটফর্মটি কি বিনামূল্যে ব্যবহার করা যায়?",
      answer: "আমাদের কিছু মৌলিক কোর্স বিনামূল্যে পাওয়া যায়, তবে প্রিমিয়াম ফিচার এবং অ্যাডভান্সড কোর্সের জন্য আপনাকে সাবস্ক্রিপশন নিতে হতে পারে।"
    },
    {
      question: "প্রযুক্তিগত সমস্যা হলে কোথায় যোগাযোগ করব?",
      answer: "যেকোনো সমস্যায় আমাদের সাপোর্ট টিমে ইমেইল করতে পারেন অথবা আমাদের 'Contact Us' পেজ থেকে সরাসরি মেসেজ পাঠাতে পারেন।"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-blue-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-48 h-48 mx-auto mb-4">
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_ssu9WJ.json" // FAQ animation
              style={{ height: '100%', width: '100%' }}
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">সাধারণ জিজ্ঞাসা (FAQ)</h1>
          <p className="text-gray-600">আপনার মনে থাকা প্রশ্নের উত্তর এখানে খুঁজে নিন</p>
        </div>

        {/* Accordion Section */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold ${activeIndex === index ? 'text-blue-600' : 'text-gray-800'}`}>
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-blue-600' : 'text-gray-400'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 border-t border-gray-100 text-gray-600 leading-relaxed bg-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Support */}
        <div className="mt-12 text-center p-8 bg-blue-600 rounded-2xl text-white shadow-lg">
          <h3 className="text-xl font-bold mb-2">আরো কিছু জানার আছে?</h3>
          <p className="mb-6 opacity-90">আমাদের বিশেষজ্ঞ টিম আপনাকে সাহায্য করার জন্য প্রস্তুত।</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            সরাসরি যোগাযোগ করুন
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;