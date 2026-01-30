import React, { useState } from 'react';

const Tech = () => {
  const [activeTab, setActiveTab] = useState('platform');

  const techFeatures = {
    platform: [
      {
        title: "বুদ্ধিমান প্রশ্ন সমাধান",
        description: "AI চালিত সিস্টেম ব্যবহার করে জটিল প্রশ্নের ধাপে ধাপে ব্যাখ্যামূলক সমাধান প্রদান করে",
        icon: "🤖",
        color: "bg-blue-100 text-blue-600"
      },
      {
        title: "প্রতিক্রিয়া ব্যবস্থা",
        description: "শিক্ষার্থীদের প্রয়োজন অনুযায়ী প্রশিক্ষকদের সাথে সরাসরি যোগাযোগের ব্যবস্থা",
        icon: "💬",
        color: "bg-green-100 text-green-600"
      },
      {
        title: "প্রগতি ট্র্যাকিং",
        description: "ব্যবহারকারীদের পড়াশোনার প্রগতি সম্পর্কে বিস্তারিত পরিসংখ্যান প্রদান",
        icon: "📊",
        color: "bg-purple-100 text-purple-600"
      },
      {
        title: "কাস্টমাইজেবল লার্নিং",
        description: "ব্যক্তিগত শিক্ষার প্রয়োজন অনুযায়ী শেখা পদ্ধতি কাস্টমাইজ করার সুবিধা",
        icon: "🎯",
        color: "bg-yellow-100 text-yellow-600"
      }
    ],
    infrastructure: [
      {
        title: "ক্লাউড ইনফ্রাস্ট্রাকচার",
        description: "স্কেলযোগ্য AWS ইনফ্রাস্ট্রাকচারে হোস্ট করা হয়েছে যা ৯৯.৯% আপটাইম নিশ্চিত করে",
        icon: "☁️",
        color: "bg-blue-100 text-blue-600"
      },
      {
        title: "রিয়েল-টাইম সিঙ্কিং",
        description: "মাল্টি-ডিভাইসে রিয়েল-টাইম সিঙ্কিং এর মাধ্যমে যেকোনো সময় শেখা অব্যাহত রাখা যায়",
        icon: "🔄",
        color: "bg-green-100 text-green-600"
      },
      {
        title: "ডেটা সিকিউরিটি",
        description: "২৫৬-বিট এনক্রিপশন এবং GDPR কমপ্লায়ন্ট ডেটা স্টোরেজ সিস্টেম",
        icon: "🔒",
        color: "bg-purple-100 text-purple-600"
      },
      {
        title: "হাই পারফরমেন্স ক্যাশিং",
        description: "Redis এবং CDN ব্যবহার করে পেজ লোড টাইম ৯০% হ্রাস করা হয়েছে",
        icon: "⚡",
        color: "bg-yellow-100 text-yellow-600"
      }
    ],
    ai: [
      {
        title: "NLP প্রযুক্তি",
        description: "বাংলা ভাষার জটিলতা বোঝার জন্য উন্নত NLP মডেল ব্যবহার করা হয়েছে",
        icon: "🧠",
        color: "bg-blue-100 text-blue-600"
      },
      {
        title: "মেশিন লার্নিং",
        description: "শিক্ষার্থীদের শেখার প্রক্রিয়া বোঝার জন্য মেশিন লার্নিং অ্যালগোরিদম ব্যবহার করা হয়েছে",
        icon: "⚙️",
        color: "bg-green-100 text-green-600"
      },
      {
        title: "অটোমেটেড টিচিং",
        description: "স্বয়ংক্রিয়ভাবে শেখার সমস্যার সমাধান প্রক্রিয়া চিহ্নিত করে সহায়তা প্রদান",
        icon: "🤖",
        color: "bg-purple-100 text-purple-600"
      },
      {
        title: "পারসোনালাইজড রিকমেন্ডেশন",
        description: "ব্যবহারকারীর শেখার ইতিহাস থেকে পছন্দের বিষয় অনুসারে সাজেশন প্রদান",
        icon: "🎯",
        color: "bg-yellow-100 text-yellow-600"
      }
    ]
  };

  const stats = [
    { number: "৯৯.৯%", label: "আপটাইম" },
    { number: "৫০০০+", label: "সন্তুষ্ট ছাত্র" },
    { number: "১০০০০+", label: "সমাধান করা প্রশ্ন" },
    { number: "২৪/৭", label: "সাপোর্ট" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            আমাদের প্রযুক্তি
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            শিক্ষার্থীদের জন্য তৈরি উন্নত প্রযুক্তি ব্যবহার করে আমাদের প্ল্যাটফর্ম সম্পূর্ণ ভাবে ডিজাইন করা হয়েছে। 
            নিম্নে আমাদের ব্যবহৃত প্রযুক্তি এবং বৈশিষ্ট্যসমূহ দেখুন।
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-2xl shadow-lg">
            <div className="flex space-x-1">
              {[
                { id: 'platform', label: 'প্ল্যাটফর্ম বৈশিষ্ট্য' },
                { id: 'infrastructure', label: 'ইনফ্রাস্ট্রাকচার' },
                { id: 'ai', label: 'AI প্রযুক্তি' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {techFeatures[activeTab].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl text-2xl ${feature.color}`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">আমাদের টেক স্ট্যাক</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-600' },
              { name: 'Node.js', icon: '🟢', color: 'bg-green-100 text-green-600' },
              { name: 'MongoDB', icon: '🍃', color: 'bg-green-100 text-green-600' },
              { name: 'AWS', icon: '☁️', color: 'bg-orange-100 text-orange-600' },
              { name: 'TensorFlow', icon: '🧠', color: 'bg-purple-100 text-purple-600' },
              { name: 'Redis', icon: '🔴', color: 'bg-red-100 text-red-600' }
            ].map((tech, index) => (
              <div key={index} className={`${tech.color} p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300`}>
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="font-medium text-gray-800">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Compliance Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">নিরাপত্তা ব্যবস্থা</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">২৫৬-বিট এনক্রিপশন</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">দুই-ধাপের যাচাইকরণ</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">নিয়মিত সিকিউরিটি অডিট</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">GDPR কমপ্লায়ন্ট</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">পারফরমেন্স</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">৯৯.৯% আপটাইম</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">&lt;১০০ms রেসপন্স টাইম</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">CDN সাপোর্ট</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700">অটোমেটেড স্কেলিং</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">আমাদের প্রযুক্তি সম্পর্কে আরও জানুন</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            আমাদের টেকনিক্যাল ডকুমেন্টেশন, API রেফারেন্স এবং অংশগ্রহণের সুযোগ সম্পর্কে জানতে আমাদের সাথে যোগাযোগ করুন।
          </p>
          <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            যোগাযোগ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tech;