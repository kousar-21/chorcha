import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const PrivacyPolicy = () => {
  const sections = [
    { id: 1, title: "তথ্য সংগ্রহ (Data Collection)", icon: "📥" },
    { id: 2, title: "তথ্যের ব্যবহার (Data Usage)", icon: "⚙️" },
    { id: 3, title: "কুকিজ পলিসি (Cookies)", icon: "🍪" },
    { id: 4, title: "তথ্য সুরক্ষা (Data Security)", icon: "🛡️" },
    { id: 5, title: "থার্ড-পার্টি ডিসক্লোজার", icon: "🤝" },
    { id: 6, title: "শিশুদের গোপনীয়তা", icon: "👶" },
    { id: 7, title: "আপনার আইনি অধিকার", icon: "⚖️" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-100 pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              <span className="text-sm font-bold uppercase tracking-wider">Privacy Protocol 2026</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              গোপনীয়তা নীতি ও <br/><span className="text-blue-600">নিরাপত্তা স্বত্ব</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
              চর্চা-তে আপনার ব্যক্তিগত তথ্যের নিরাপত্তা আমাদের সর্বোচ্চ অগ্রাধিকার। আমরা কিভাবে আপনার ডাটা প্রসেস করি তা স্বচ্ছভাবে নিচে বর্ণনা করা হলো।
            </p>
          </div>
          <div className="md:w-1/2 max-w-sm">
            <Player
              autoplay
              loop
              src="https://lottie.host/80644485-64d4-4632-835d-209489f07474/eGjLpS5T0U.json"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Navigation Sidebar */}
        <nav className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-32 space-y-1">
            <h3 className="text-slate-400 font-bold text-xs uppercase mb-4 px-4 tracking-widest">বিভাগসমূহ</h3>
            {sections.map((s) => (
              <a 
                key={s.id} 
                href={`#section-${s.id}`}
                className="flex items-center p-4 rounded-2xl text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all group"
              >
                <span className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl mr-4 group-hover:bg-blue-50 transition-colors">{s.icon}</span>
                <span className="font-bold text-sm">{s.title}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Policy Content */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-blue-600 mr-3">০১.</span> আমরা কি কি তথ্য সংগ্রহ করি?
            </h2>
            <div className="bg-white p-8 rounded-4xl border border-slate-100 shadow-sm text-slate-600 leading-relaxed space-y-4">
              <p>আমরা মূলত দুই ধরণের তথ্য সংগ্রহ করি:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>সরাসরি তথ্য:</strong> নাম, ইমেইল এড্রেস, ফোন নম্বর এবং প্রোফাইল ছবি যা আপনি অ্যাকাউন্ট খোলার সময় প্রদান করেন।</li>
                <li><strong>স্বয়ংক্রিয় তথ্য:</strong> আপনার আইপি এড্রেস, ডিভাইসের ধরণ, ব্রাউজারের ধরণ এবং আপনি আমাদের সাইটে কতক্ষণ সময় ব্যয় করছেন।</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-blue-600 mr-3">০২.</span> তথ্যের ব্যবহার ও উদ্দেশ্য
            </h2>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-slate-600 leading-relaxed space-y-4">
              <p>সংগৃহীত তথ্যগুলো আমরা নিচের কাজগুলোতে ব্যবহার করি:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 italic text-sm">আপনার লার্নিং ড্যাশবোর্ড আপডেট রাখা।</div>
                <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 italic text-sm">নতুন কোর্স এবং বিশেষ অফার জানানো।</div>
                <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 italic text-sm">আমাদের সেবার মান উন্নত করা।</div>
                <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 italic text-sm">অ্যাকাউন্টের নিরাপত্তা নিশ্চিত করা।</div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-blue-600 mr-3">০৩.</span> কুকিজ পলিসি
            </h2>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-slate-600 leading-relaxed">
              <p>চর্চা-র ওয়েবসাইট উন্নত ব্রাউজিং অভিজ্ঞতার জন্য 'কুকিজ' ফাইল ব্যবহার করে। আপনি আপনার ব্রাউজার সেটিংস থেকে কুকিজ বন্ধ করতে পারেন, তবে এতে সাইটের কিছু ফিচার সঠিকভাবে কাজ নাও করতে পারে।</p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-blue-600 mr-3">০৪.</span> ডাটা নিরাপত্তা ব্যবস্থা
            </h2>
            <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl shadow-blue-200">
              <p className="leading-relaxed opacity-90">
                আমরা আপনার ডাটা সুরক্ষায় SSL এনক্রিপশন এবং ফায়ারওয়াল প্রযুক্তি ব্যবহার করি। আপনার পাসওয়ার্ড এবং পেমেন্ট গেটওয়ে ডাটা সম্পূর্ণ এনক্রিপ্টেড অবস্থায় থাকে, যা কোনো মানুষের পক্ষে পড়া সম্ভব নয়।
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-blue-600 mr-3">০৫.</span> থার্ড-পার্টি ডিসক্লোজার
            </h2>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-slate-600 leading-relaxed">
              <p>আমরা আপনার ব্যক্তিগত তথ্য বাইরের কোনো প্রতিষ্ঠানের কাছে বিক্রি বা বিনিময় করি না। তবে পেমেন্ট প্রসেসর (যেমন: SSLCommerz) এবং ইমেইল ডেলিভারি সেবার ক্ষেত্রে প্রয়োজনীয় তথ্য শেয়ার করা হতে পারে যা কঠোর গোপনীয়তার সাথে পরিচালিত হয়।</p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-blue-600 mr-3">০৬.</span> শিশুদের গোপনীয়তা (Children's Privacy)
            </h2>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-slate-600 leading-relaxed">
              <p>আমাদের প্ল্যাটফর্ম মূলত ১৩ বছরের উর্ধ্বে শিক্ষার্থীদের জন্য। আমরা জেনেশুনে ১৩ বছরের নিচের শিশুদের কোনো তথ্য সংগ্রহ করি না। যদি আপনি অভিভাবক হিসেবে জানতে পারেন আপনার সন্তান আমাদের তথ্য দিয়েছে, তবে আমাদের সাথে যোগাযোগ করুন; আমরা তা দ্রুত মুছে দেব।</p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-blue-600 mr-3">০৭.</span> আপনার আইনি অধিকার ও নিয়ন্ত্রণ
            </h2>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-slate-600 space-y-4">
              <p>আপনার ব্যক্তিগত তথ্যের উপর আপনার পূর্ণ নিয়ন্ত্রণ রয়েছে। আপনি যেকোনো সময়:</p>
              <ul className="space-y-3 font-medium text-slate-800">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> আপনার প্রোফাইল তথ্য এডিট করতে পারেন।</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> প্রমোশনাল ইমেইল আন-সাবস্ক্রাইব করতে পারেন।</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> অ্যাকাউন্ট ডিলিট করার অনুরোধ জানাতে পারেন।</li>
              </ul>
            </div>
          </section>

        </div>
      </main>

      {/* Footer Info */}
      <footer className="bg-slate-900 py-16 px-4 text-center">
        <p className="text-slate-400 mb-4">এই পলিসি সম্পর্কে কোনো প্রশ্ন বা অভিযোগ থাকলে সরাসরি ইমেইল করুন:</p>
        <a href="mailto:privacy@chorcha.com" className="text-2xl font-black text-white hover:text-blue-400 transition-colors">
          privacy@chorcha.com
        </a>
        <div className="mt-12 text-slate-500 text-sm italic">
          © ২০২৬ চর্চা লার্নিং প্ল্যাটফর্ম। আপনার বিশ্বাস আমাদের শক্তি।
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;