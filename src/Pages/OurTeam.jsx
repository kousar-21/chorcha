import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "আরিফ রহমান",
      role: "প্রতিষ্ঠাতা ও সিইও",
      image: "https://i.pravatar.cc/150?u=arif",
      bio: "শিক্ষাকে সবার কাছে পৌঁছে দেওয়াই আরিফের মূল লক্ষ্য।",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "সাদিয়া ইসলাম",
      role: "প্রধান প্রযুক্তি কর্মকর্তা (CTO)",
      image: "https://i.pravatar.cc/150?u=sadia",
      bio: "প্রযুক্তি ও শিক্ষার মেলবন্ধন ঘটাতে তিনি নিরলস কাজ করছেন।",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "তানভীর আহমেদ",
      role: "লিড ডিজাইনার",
      image: "https://i.pravatar.cc/150?u=tanvir",
      bio: "ইউজার এক্সপেরিয়েন্সকে সহজ ও সুন্দর করাই তার নেশা।",
      social: { dribbble: "#", linkedin: "#" }
    },
    {
      name: "নুসরাত জাহান",
      role: "কন্টেন্ট স্ট্র্যাটেজিস্ট",
      image: "https://i.pravatar.cc/150?u=nusrat",
      bio: "মানসম্মত শিক্ষা উপকরণ তৈরিতে তিনি দক্ষ।",
      social: { twitter: "#", linkedin: "#" }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* FIXED HEADER: Used 'bg-gradient-to-b' (Standard Tailwind) 
          Added pt-24 if you have a fixed navbar 
      */}
      <section className="bg-gradient-to-b from-blue-50 via-indigo-50 to-white py-20 px-4 pt-28">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 rounded-full">
            আমাদের পরিবার
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            চর্চা-র পেছনের <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">কারিগররা</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            আমরা শুধু একটি প্লাটফর্ম নই, আমরা একদল স্বপ্নবাজ যারা বাংলাদেশের শিক্ষা ব্যবস্থায় ডিজিটাল বিপ্লব আনতে কাজ করছি।
          </p>
          
          <div className="w-64 h-64 mx-auto mt-8">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_at6p77j3.json"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION - Adds Professionalism */}
      <section className="py-16 bg-white px-4 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">আমাদের লক্ষ্য ও উদ্দেশ্য</h2>
            <p className="text-gray-600 leading-relaxed">
              চর্চা-র যাত্রা শুরু হয়েছিল একটি সাধারণ লক্ষ্য নিয়ে: মানসম্মত শিক্ষা যেন কোনো ভৌগোলিক সীমানায় আটকে না থাকে। আমরা বিশ্বাস করি প্রযুক্তির সঠিক ব্যবহার শিক্ষার হার এবং মান উভয়ই বৃদ্ধি করতে পারে।
            </p>
            <ul className="space-y-3">
              {['সবার জন্য উন্মুক্ত শিক্ষা', 'সহজবোধ্য ডিজিটাল কন্টেন্ট', 'প্রযুক্তিগত দক্ষতা বৃদ্ধি'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 italic">"শিক্ষা কোনো পণ্য নয়, এটি একটি অধিকার।"</h3>
                <p className="opacity-90">- চর্চা টিম</p>
             </div>
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* TEAM GRID - Polished Cards */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">নেতৃত্বের সাথে পরিচিত হোন</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                   <div className="flex gap-4">
                      {/* Using text for icons to avoid extra library dependencies */}
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors">in</a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors">tw</a>
                   </div>
                </div>
              </div>
              
              <div className="text-center pb-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed px-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION - Clean & Modern */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">আমাদের যাত্রার সঙ্গী হোন</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
              আমরা সবসময় প্রতিভাবান এবং পরিশ্রমী মানুষের সন্ধানে থাকি। আপনার প্রতিভা কি আমাদের সাথে মিলবে?
            </p>
            <Link 
              to="/careers"
              className="inline-flex items-center bg-white text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              উন্মুক্ত পদগুলো দেখুন
              <span className="ml-2">→</span>
            </Link>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -ml-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -mr-20 -mb-20 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;