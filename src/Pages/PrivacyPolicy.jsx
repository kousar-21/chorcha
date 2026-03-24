import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const PrivacyPolicy = () => {
  const dataUsage = [
    {
      title: "ব্যক্তিগত তথ্য",
      desc: "আপনার নাম, ইমেইল এবং প্রোফাইল ছবি যা অ্যাকাউন্ট তৈরিতে ব্যবহৃত হয়।",
      icon: "👤",
      color: "blue"
    },
    {
      title: "পেমেন্ট ডাটা",
      desc: "আপনার ট্রানজিশন আইডি এবং মোবাইল ব্যাংকিং নম্বর (সম্পূর্ণ সুরক্ষিত)।",
      icon: "🔒",
      color: "green"
    },
    {
      title: "লার্নিং প্রগ্রেস",
      desc: "আপনি কোন কোর্স কতটুকু শেষ করেছেন এবং কুইজ স্কোর।",
      icon: "📊",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-slate-50 pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
              Privacy & Trust
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-6 mb-6 leading-tight">
              আপনার তথ্যের <span className="text-blue-600">সুরক্ষা</span> আমাদের প্রধান লক্ষ্য
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              চর্চা (Chorcha) প্ল্যাটফর্মে আপনার ডাটা কিভাবে সংগ্রহ, ব্যবহার এবং সুরক্ষিত রাখা হয় সে সম্পর্কে বিস্তারিত জানতে এই পলিসিটি পড়ুন।
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96">
              <Player
                autoplay
                loop
                src="https://lottie.host/80644485-64d4-4632-835d-209489f07474/eGjLpS5T0U.json"
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-20 px-4">
        
        {/* Data Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {dataUsage.map((item, index) => (
            <div key={index} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16 max-w-3xl">
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">১. তথ্য সংগ্রহ ও ব্যবহার</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              আমরা আপনার তথ্য মূলত আপনার লার্নিং অভিজ্ঞতা উন্নত করতে ব্যবহার করি। উদাহরণস্বরূপ:
            </p>
            <ul className="list-disc ml-6 space-y-3 text-slate-600">
              <li>আপনার কোর্স প্রগ্রেস সেভ করে রাখা।</li>
              <li>পেমেন্ট সফল হলে আপনাকে কনফার্মেশন পাঠানো।</li>
              <li>নতুন কোর্স বা অফার সম্পর্কে আপনাকে ইমেইলের মাধ্যমে জানানো।</li>
            </ul>
          </section>

          <section className="p-8 bg-blue-600 rounded-[2.5rem] text-white">
            <h2 className="text-2xl font-bold mb-4">২. ডাটা শেয়ারিং পলিসি</h2>
            <p className="opacity-90 leading-relaxed">
              চর্চা কর্তৃপক্ষ কখনোই আপনার ব্যক্তিগত তথ্য কোনো থার্ড-পার্টি বা বাইরের কারো কাছে বিক্রি করে না। আপনার তথ্য শুধুমাত্র প্ল্যাটফর্মের অভ্যন্তরীণ কাজের জন্য এবং আইনি বাধ্যবাধকতা থাকলে কর্তৃপক্ষের নির্দেশে ব্যবহৃত হতে পারে।
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">৩. কুকিজ (Cookies)</h2>
            <p className="text-slate-600 leading-relaxed">
              আমাদের ওয়েবসাইট আপনার ব্রাউজিং অভিজ্ঞতা সহজ করতে 'কুকিজ' ব্যবহার করে। এটি আমাদের বুঝতে সাহায্য করে যে আপনি কোন ফিচারগুলো বেশি ব্যবহার করছেন এবং আমরা সেই অনুযায়ী সাইটটিকে আপডেট করি।
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">৪. আপনার অধিকার</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              একজন ব্যবহারকারী হিসেবে আপনার নিচের অধিকারগুলো রয়েছে:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl font-medium text-slate-700 border border-slate-100">✓ তথ্য পরিবর্তন বা আপডেট করা</div>
              <div className="p-4 bg-slate-50 rounded-xl font-medium text-slate-700 border border-slate-100">✓ অ্যাকাউন্ট চিরস্থায়ীভাবে ডিলিট করা</div>
              <div className="p-4 bg-slate-50 rounded-xl font-medium text-slate-700 border border-slate-100">✓ ইমেইল সাবস্ক্রিপশন বন্ধ করা</div>
              <div className="p-4 bg-slate-50 rounded-xl font-medium text-slate-700 border border-slate-100">✓ তথ্যের কপি দাবি করা</div>
            </div>
          </section>
        </div>

        {/* Final Note */}
        <div className="mt-24 pt-12 border-t border-slate-100 text-center">
          <p className="text-slate-500 mb-2">এই পলিসি সম্পর্কে কোনো প্রশ্ন থাকলে সরাসরি ইমেইল করুন:</p>
          <a href="mailto:privacy@chorcha.com" className="text-blue-600 font-bold text-xl hover:underline">
            privacy@chorcha.com
          </a>
        </div>
      </main>

      <footer className="bg-slate-900 py-12 px-4 text-center">
        <p className="text-slate-400 text-sm">© ২০২৬ চর্চা লার্নিং প্ল্যাটফর্ম। আপনার প্রাইভেসির সুরক্ষা আমাদের অঙ্গীকার।</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;