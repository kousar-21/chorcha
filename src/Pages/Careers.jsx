import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router';

const Careers = () => {
  const benefits = [
    { title: "ফ্লেক্সিবল কাজের সময়", desc: "আপনার সুবিধানুযায়ী কাজের সময় নির্ধারণ করার সুযোগ।", icon: "⏰" },
    { title: "লার্নিং বাজেট", desc: "নতুন কিছু শেখার জন্য বই বা অনলাইন কোর্সে বার্ষিক অনুদান।", icon: "📚" },
    { title: "স্বাস্থ্য বীমা", desc: "আপনার এবং আপনার পরিবারের জন্য সম্পূর্ণ স্বাস্থ্য সুরক্ষা।", icon: "🏥" },
    { title: "টিম আউটডোর", desc: "একঘেয়েমি কাটাতে প্রতি ৩ মাস অন্তর টিম রিট্রিট বা ট্যুর।", icon: "⛰️" },
  ];

  const jobs = [
    { id: 1, role: "Frontend Developer (React)", type: "Full-time", location: "Remote/Dhaka" },
    { id: 2, role: "Content Specialist (Bengali)", type: "Part-time", location: "Remote" },
    { id: 3, role: "UI/UX Designer", type: "Full-time", location: "Dhaka" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-green-600 py-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">আমাদের টিমে যোগ দিন</h1>
          <p className="text-xl opacity-90 mb-8">
            চর্চা-তে আমরা শিক্ষার ভবিষ্যৎ গড়ছি। আপনি কি আমাদের এই যাত্রার অংশ হতে চান?
          </p>
          <div className="w-64 h-64 mx-auto">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_m6cuL6.json" // Collaboration animation
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Values/Benefits Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">কেন চর্চা-তে কাজ করবেন?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">বর্তমান সুযোগসমূহ</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-600">{job.role}</h3>
                  <div className="flex gap-4 mt-1 text-sm text-gray-500">
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                  </div>
                </div>
                <Link 
                  to={`/careers/apply/${job.id}`}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  আবেদন করুন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">আপনার কাঙ্ক্ষিত পদটি খুঁজে পাচ্ছেন না?</h2>
        <p className="text-gray-600 mb-8">আপনার সিভি পাঠিয়ে দিন আমাদের ইমেইলে: <span className="font-semibold text-blue-600">jobs@chorcha.com</span></p>
      </section>
    </div>
  );
};

export default Careers;