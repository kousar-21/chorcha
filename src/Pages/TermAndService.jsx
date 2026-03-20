import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router';

const TermsAndService = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "ভূমিকা", icon: "📝" },
    { id: "accounts", title: "অ্যাকাউন্ট নিয়মাবলী", icon: "👤" },
    { id: "payments", title: "পেমেন্ট ও রিফান্ড", icon: "💳" },
    { id: "content", title: "মেধাস্বত্ব (IPR)", icon: "🔐" },
    { id: "termination", title: "অ্যাকাউন্ট বাতিল", icon: "🚫" },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Terms & <span className="text-blue-600">Conditions</span>
            </h1>
            <p className="text-gray-500 text-lg">সর্বশেষ আপডেট: ১৯ মার্চ, ২০২৬</p>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
              চর্চা (Chorcha) প্ল্যাটফর্মটি ব্যবহারের আগে দয়া করে আমাদের শর্তাবলী মনোযোগ দিয়ে পড়ুন। আমাদের সেবা ব্যবহারের অর্থ হলো আপনি এই শর্তাবলীতে সম্মতি জানাচ্ছেন।
            </p>
          </div>
          <div className="md:w-1/3 w-48 h-48">
            <Player
              autoplay
              loop
              src="https://lottie.host/9769351e-670d-4050-9856-787140f0037e/9I6fL3Yj2D.json"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Navigation - Sticky */}
        <aside className="md:w-1/4">
          <div className="sticky top-28 space-y-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">সূচিপত্র</p>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === section.id 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                  : "text-gray-600 hover:bg-white hover:shadow-sm"
                }`}
              >
                <span className="mr-3">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <main className="md:w-3/4 bg-white rounded-4xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          <div id="introduction" className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">০১</span>
              সাধারণ ভূমিকা
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>চর্চা একটি অনলাইন লার্নিং প্ল্যাটফর্ম। এখানে আমরা বিভিন্ন শিক্ষামূলক কন্টেন্ট, ভিডিও কোর্স এবং ইন্টারঅ্যাক্টিভ কুইজ প্রদান করি।</p>
              <p>এই শর্তাবলী আপনার এবং চর্চা-র মধ্যে একটি আইনি চুক্তি হিসেবে গণ্য হবে। আপনি যদি এই শর্তাবলীর কোনো অংশে একমত না হন, তবে অনুগ্রহ করে আমাদের প্ল্যাটফর্মটি ব্যবহার করা থেকে বিরত থাকুন।</p>
            </div>
          </div>

          <div id="accounts" className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">০২</span>
              অ্যাকাউন্ট ও নিরাপত্তা
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <ul className="list-disc ml-5 space-y-2">
                <li>অ্যাকাউন্ট তৈরির সময় সঠিক এবং সম্পূর্ণ তথ্য প্রদান করতে হবে।</li>
                <li>আপনার পাসওয়ার্ডের গোপনীয়তা রক্ষার দায়িত্ব সম্পূর্ণ আপনার।</li>
                <li>একটি অ্যাকাউন্ট শুধুমাত্র একজন ব্যবহারকারী ব্যবহার করতে পারবেন। অ্যাকাউন্ট শেয়ার করা কঠোরভাবে নিষিদ্ধ।</li>
              </ul>
            </div>
          </div>

          <div id="payments" className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">০৩</span>
              পেমেন্ট ও রিফান্ড পলিসি
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>প্রিমিয়াম কোর্সের ক্ষেত্রে পেমেন্ট সম্পন্ন হওয়ার পর আপনি কোর্সের এক্সেস পাবেন। আমাদের রিফান্ড পলিসি অনুযায়ী, কোর্স কেনার ২৪ ঘণ্টার মধ্যে যদি আপনি কোনো কন্টেন্ট না দেখে থাকেন, তবে রিফান্ড দাবি করতে পারবেন।</p>
              <div className="p-4 bg-orange-50 border-l-4 border-orange-400 rounded-r-xl">
                <p className="text-sm text-orange-800">
                  <strong>দ্রষ্টব্য:</strong> প্রমোশনাল অফার বা ডিসকাউন্টে কেনা কোর্সের ক্ষেত্রে রিফান্ড প্রযোজ্য নয়।
                </p>
              </div>
            </div>
          </div>

          <div id="content" className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">০৪</span>
              মেধাস্বত্ব ও কন্টেন্ট ব্যবহার
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>প্ল্যাটফর্মে থাকা সকল ভিডিও, টেক্সট, গ্রাফিক্স এবং কোড চর্চা-র নিজস্ব সম্পদ। বাণিজ্যিক উদ্দেশ্যে এগুলো ডাউনলোড, কপি বা পুনরায় বিতরণ করা সম্পূর্ণ নিষিদ্ধ এবং আইনত দণ্ডনীয় অপরাধ।</p>
            </div>
          </div>

          <div id="termination" className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">০৫</span>
              অ্যাকাউন্ট স্থগিতকরণ
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>যদি কোনো ব্যবহারকারী আমাদের শর্তাবলী লঙ্ঘন করেন বা প্ল্যাটফর্মে কোনো অনৈতিক কাজ করেন, তবে চর্চা কর্তৃপক্ষ পূর্ব নোটিশ ছাড়াই তার অ্যাকাউন্ট স্থগিত বা চিরস্থায়ীভাবে ডিলিট করার অধিকার রাখে।</p>
            </div>
          </div>

        </main>
      </div>

      {/* Footer CTA */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4 text-center">
        <p className="text-gray-500 mb-4">আপনার কি কোনো প্রশ্ন আছে?</p>
        <Link 
          to="/help" 
          className="text-blue-600 font-bold hover:underline"
        >
          আমাদের সাপোর্ট সেন্টারে যোগাযোগ করুন
        </Link>
        <div className="mt-8 text-sm text-gray-400 italic">
          © ২০২৬ চর্চা লার্নিং প্ল্যাটফর্ম। স্বচ্ছতা ও বিশ্বাসের সাথে আপনার শেখার সঙ্গী।
        </div>
      </footer>
    </div>
  );
};

export default TermsAndService;