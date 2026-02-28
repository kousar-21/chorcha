import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

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
      {/* Header Section */}
      <section className="bg-linear-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-48 h-48 mx-auto mb-6">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_at6p77j3.json" // Team celebration animation
              style={{ height: '100%', width: '100%' }}
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">আমাদের টিমের সাথে পরিচিত হন</h1>
          <p className="text-gray-600 text-lg">
            চর্চা-র পেছনে কাজ করছে একদল স্বপ্নবাজ মানুষ, যারা শিক্ষার প্রসারে অঙ্গীকারবদ্ধ।
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-72 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    {Object.keys(member.social).map((platform) => (
                      <a 
                        key={platform} 
                        href={member.social[platform]} 
                        className="text-white hover:text-green-400 capitalize font-medium"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us Banner */}
      <section className="bg-gray-900 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">আপনি কি আমাদের টিমে যোগ দিতে চান?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          আমরা সবসময় প্রতিভাবান এবং পরিশ্রমী মানুষের সন্ধানে থাকি। আমাদের ক্যারিয়ার পেজটি ঘুরে দেখুন।
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full transition-all">
          উন্মুক্ত পদগুলো দেখুন
        </button>
      </section>
    </div>
  );
};

export default OurTeam;