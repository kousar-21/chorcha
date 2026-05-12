import React from 'react';

const AboutPage = () => {
  const companyInfo = {
    name: "Chorcha",
    title: "একাডেমিক সাফল্যের জন্য ডিজিটাল সহায়ক প্ল্যাটফর্ম",
    description: "চর্চা হল একটি বাংলাদেশি একাডেমিক সহায়তা প্ল্যাটফর্ম যা শিক্ষার্থীদের বিভিন্ন প্রশ্নের সমাধান ও গাইডলাইন প্রদানের মাধ্যমে তাদের শিক্ষাগত সাফল্যে সহায়তা করে। আমাদের লক্ষ্য হলো প্রযুক্তির মাধ্যমে শিক্ষার সুযোগ-সুবিধা সবার কাছে পৌঁছে দেওয়া।",
    mission: "আমাদের মিশন হলো প্রযুক্তি ও স্মার্ট টুলের মাধ্যমে শিক্ষার্থীদের পড়াশোনার যাত্রাকে সহজ ও কার্যকর করা।",
    vision: "বাংলাদেশের শিক্ষাক্ষেত্রে প্রযুক্তির ব্যবহার বৃদ্ধি করে একটি স্বপ্নের দেশ গঠনে অবদান রাখা।",
    foundingYear: "২০২৩",
    teamSize: "১০+ সদস্য",
    achievements: [
      "৫০০০+ শিক্ষার্থীকে সাহায্য করেছি",
      "১০০০০+ প্রশ্নের সমাধান প্রদান করেছি",
      "১০০+ স্কুল/কলেজের সাথে সহযোগিতা করছি",
    ],
    contact: {
      email: "info@chorcha.bangladesh",
      phone: "+৮৮০-১৭১২-৩৪৫৬৭৮",
      address: "ঢাকা, বাংলাদেশ",
    }
  };

  return (
    <div className="min-h-screen bg-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-1 bg-linear-to-r from-green-500 to-blue-600 rounded-full mb-6">
            <div className="bg-white p-1 rounded-full">
              <div className="w-24 h-24 bg-linear-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl font-bold text-white">C</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
            {companyInfo.name}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {companyInfo.title}
          </p>
        </div>

        {/* Company Description */}
        <div className="bg-secondary border border-green-300 rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-600 mb-6 pb-4 border-b border-gray-200">
            আমাদের সম্পর্কে
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {companyInfo.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">১</span>
                মিশন
              </h3>
              <p className="text-gray-700">
                {companyInfo.mission}
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">২</span>
                ভিশন
              </h3>
              <p className="text-gray-700">
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-r from-green-500 to-blue-600 rounded-2xl p-8 mb-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{companyInfo.foundingYear}</div>
              <div className="text-lg opacity-90">প্রতিষ্ঠানের শুরু</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{companyInfo.teamSize}</div>
              <div className="text-lg opacity-90">দক্ষ দল</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">২৪/৭</div>
              <div className="text-lg opacity-90">সাপোর্ট</div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-secondary border border-green-300 rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-600 mb-8 text-center pb-4 border-b border-gray-200">
            আমাদের অর্জন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyInfo.achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-secondary border border-blue-200 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-500 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-secondary border border-green-300 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-600 mb-8 text-center pb-4 border-b border-gray-200">
            যোগাযোগ করুন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-secondary border border-blue-200 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                📧
              </div>
              <h3 className="font-semibold text-gray-600 mb-2">ইমেইল</h3>
              <p className="text-gray-500">{companyInfo.contact.email}</p>
            </div>
            
            <div className="p-6 bg-secondary border border-blue-200 rounded-xl">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                📞
              </div>
              <h3 className="font-semibold text-gray-600 mb-2">ফোন</h3>
              <p className="text-gray-500">{companyInfo.contact.phone}</p>
            </div>
            
            <div className="p-6 bg-secondary border border-blue-200 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                📍
              </div>
              <h3 className="font-semibold text-gray-600 mb-2">ঠিকানা</h3>
              <p className="text-gray-500">{companyInfo.contact.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;