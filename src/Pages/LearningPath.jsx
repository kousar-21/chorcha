import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

const LearningPath = () => {
  const steps = [
    {
      id: 1,
      title: "ফাউন্ডেশন কোর্স",
      desc: "বেসিক কনসেপ্ট এবং ফান্ডামেন্টাল কুইজ দিয়ে যাত্রা শুরু করুন।",
      status: "completed",
      icon: "🌱"
    },
    {
      id: 2,
      title: "ইন্টারমিডিয়েট লার্নিং",
      desc: "বাস্তবসম্মত ছোট ছোট প্রজেক্ট তৈরি করে দক্ষতা ঝালাই করুন।",
      status: "active",
      icon: "🚀"
    },
    {
      id: 3,
      title: "অ্যাডভান্সড মাস্টারক্লাস",
      desc: "ইন্ডাস্ট্রি স্ট্যান্ডার্ড জটিল প্রজেক্ট এবং AI ইন্টিগ্রেশন শিখুন।",
      status: "locked",
      icon: "💎"
    },
    {
      id: 4,
      title: "ক্যারিয়ার গাইডেন্স",
      desc: "মক ইন্টারভিউ এবং সিভি বিল্ডিং সেশনে অংশগ্রহণ করুন।",
      status: "locked",
      icon: "💼"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-6">
              আপনার সফলতার <br />
              <span className="text-blue-500 underline decoration-blue-500/20 underline-offset-8">রোডম্যাপ</span>
            </h1>
            <p className="text-[var(--text-tertiary)] text-lg leading-relaxed">
              আপনার লক্ষ্য স্থির করুন এবং আমাদের ধাপে ধাপে সাজানো লার্নিং পাথ অনুসরণ করে পৌঁছে যান আপনার স্বপ্নের ক্যারিয়ারে।
            </p>
          </div>
          <div className="md:w-1/3 w-64 h-64">
            <Player
              autoplay
              loop
              src="https://lottie.host/57f1f0e4-5464-448f-891a-7b3b784a0c8b/pM8H89h59R.json"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>

        {/* Roadmap Timeline Section */}
        <div className="relative">
          {/* Connecting Line (Vertical) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full hidden md:block"></div>

          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className={`p-8 rounded-[2.5rem] border transition-all duration-500 ${
                    step.status === 'active' 
                    ? 'bg-blue-600 border-blue-400 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4)] text-white' 
                    : 'bg-white/5 border-white/5 text-[var(--text-tertiary)]'
                  }`}>
                    <div className="text-4xl mb-6">{step.icon}</div>
                    <h3 className={`text-2xl font-bold mb-3 ${step.status === 'active' ? 'text-white' : 'text-[var(--text-primary)]'}`}>
                      {step.title}
                    </h3>
                    <p className="leading-relaxed opacity-80">{step.desc}</p>
                    {step.status === 'active' && (
                      <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:scale-105 transition-transform">
                        শিখা শুরু করুন
                      </button>
                    )}
                  </div>
                </div>

                {/* Center Badge */}
                <div className="relative z-10 hidden md:block">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl shadow-2xl transition-all duration-500 ${
                    step.status === 'completed' ? 'bg-green-500 text-white' :
                    step.status === 'active' ? 'bg-blue-500 text-white scale-125' :
                    'bg-slate-800 text-slate-500'
                  }`}>
                    {step.status === 'completed' ? '✓' : step.id}
                  </div>
                </div>

                {/* Spacer for symmetrical layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-slate-900 to-black border border-white/5 text-center relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">আপনার নিজস্ব পথ তৈরি করুন</h2>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">আমাদের AI মেন্টর আপনার প্রোফাইল বিশ্লেষণ করে আপনার জন্য সেরা রোডম্যাপ তৈরি করে দেবে।</p>
                <button className="bg-blue-600 text-white font-bold py-4 px-12 rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all">
                    AI মেন্টরের সাহায্য নিন
                </button>
            </div>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
        </div>

      </div>
    </div>
  );
};

export default LearningPath;