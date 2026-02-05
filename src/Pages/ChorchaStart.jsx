import React from 'react';

const ChorchaStart = () => {
  const timelineEvents = [
    {
      year: "২০২৩",
      title: "চর্চা শুরু",
      description: "বাংলাদেশি ছাত্রদের জন্য একটি অ্যাকাডেমিক সহায়তা প্ল্যাটফর্ম হিসেবে চর্চার সূচনা। প্রথম দিনেই লক্ষ্য ছিল পড়াশোনার জগতে প্রযুক্তির সমন্বয় ঘটানো।",
      image: "https://placehold.co/400x300/4f46e5/ffffff?text=২০২৩+-+প্রারম্ভিক+দল"
    },
    {
      year: "২০২৪",
      title: "প্রাথমিক সাফল্য",
      description: "১০০০+ ছাত্র আমাদের প্ল্যাটফর্মে যোগ দেয়। প্রথম মাসেই ৫০০০+ প্রশ্নের সমাধান প্রদান করা হয়েছিল। বাংলাদেশের বিভিন্ন শিক্ষাপ্রতিষ্ঠানের সাথে সহযোগিতা শুরু হয়।",
      image: "https://placehold.co/400x300/10b981/ffffff?text=২০২৪+-+প্রাথমিক+সাফল্য"
    },
    {
      year: "২০২৫",
      title: "বিস্তারিত বৃদ্ধি",
      description: "৩০০০+ ছাত্র আমাদের প্ল্যাটফর্মে সক্রিয়। AI চালিত সমাধান সিস্টেম চালু হয়। বাংলাদেশের বিভিন্ন স্কুল, কলেজ ও বিশ্ববিদ্যালয়ের সাথে আনুমদন প্রাপ্ত সহযোগিতা চুক্তি স্বাক্ষরিত হয়।",
      image: "https://placehold.co/400x300/8b5cf6/ffffff?text=২০২৫+-+বিস্তারিত+বৃদ্ধি"
    },
    {
      year: "২০২৬",
      title: "বর্তমান অবস্থা",
      description: "৫০০০+ সন্তুষ্ট ছাত্র। ১০০০০+ প্রশ্নের সমাধান প্রদান। দেশের অন্যতম জনপ্রিয় অ্যাকাডেমিক সহায়তা প্ল্যাটফর্ম। নতুন AI ফিচারস এবং বাংলা NLP সিস্টেম চালু হয়েছে।",
      image: "https://placehold.co/400x300/ef4444/ffffff?text=২০২৬+-+বর্তমান+অবস্থা"
    }
  ];

  const founders = [
    {
      name: "আহমেদ হাসান",
      role: "প্রতিষ্ঠাতা ও CEO",
      quote: "আমাদের লক্ষ্য হলো বাংলাদেশের প্রতিটি ছাত্রের পড়াশোনার যাত্রায় সহায়তা করা।",
      image: "https://placehold.co/200x200/4f46e5/ffffff?text=AH"
    },
    {
      name: "সাবরিনা আক্তার",
      role: "প্রতিষ্ঠাতা ও CTO",
      quote: "প্রযুক্তির মাধ্যমে শিক্ষার সমস্যার সমাধান খুঁজে পাওয়া আমাদের মিশন।",
      image: "https://placehold.co/200x200/ec4899/ffffff?text=SA"
    },
    {
      name: "রহিম উদ্দিন",
      role: "প্রতিষ্ঠাতা ও COO",
      quote: "বাংলাদেশি শিক্ষার্থীদের জন্য উন্নত প্রযুক্তি ব্যবহার করে শিক্ষার সমাধান প্রদান।",
      image: "https://placehold.co/200x200/0ea5e9/ffffff?text=RU"
    }
  ];

  const milestones = [
    { number: "৫০০০+", label: "সন্তুষ্ট ছাত্র" },
    { number: "১০০০০+", label: "সমাধান করা প্রশ্ন" },
    { number: "১০০+", label: "শিক্ষাপ্রতিষ্ঠানের সাথে সহযোগিতা" },
    { number: "২৪/৭", label: "সাপোর্ট" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            চর্চা শুরু
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            চর্চার শুরু থেকে আজ পর্যন্ত অ্যাকাডেমিক সাফল্যের যাত্রা। জেনে নিন কীভাবে একটি ছোট ধারণা থেকে 
            বাংলাদেশের অন্যতম জনপ্রিয় অ্যাকাডেমিক সহায়তা প্ল্যাটফর্মে পরিণত হয়েছে চর্চা।
          </p>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">{milestone.number}</div>
              <div className="text-gray-600 font-medium">{milestone.label}</div>
            </div>
          ))}
        </div>

        {/* Founders Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">প্রতিষ্ঠাতা দল</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                <p className="text-green-600 font-medium mb-3">{founder.role}</p>
                <p className="text-gray-600 italic">"{founder.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">আমাদের যাত্রা</h2>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-blue-600"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold text-green-600 mb-2">{event.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">১</span>
              আমাদের মিশন
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              বাংলাদেশের শিক্ষার্থীদের জন্য প্রযুক্তি চালিত অ্যাকাডেমিক সমাধান প্রদান করা। 
              প্রতিটি ছাত্রের শিক্ষাগত সাফল্যে সহায়তা করা এবং পড়াশোনার পরিবেশ উন্নত করা।
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">২</span>
              আমাদের ভিশন
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              দেশের প্রতিটি ছাত্রের পড়াশোনার যাত্রায় সহায়তা করা। 
              প্রযুক্তির মাধ্যমে শিক্ষার সমস্যার সমাধান খুঁজে পাওয়া এবং জ্ঞানের বিস্তারে অবদান রাখা।
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">আমাদের মূল্যবোধ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "গুণগত মান", description: "উচ্চ মানের শিক্ষা সমাধান প্রদান" },
              { title: "নিরপেক্ষতা", description: "প্রতিটি ছাত্রের প্রতি সমান মনোযোগ" },
              { title: "নৈপুণ্য", description: "প্রযুক্তি ও শিক্ষার ক্ষেত্রে দক্ষতা" },
              { title: "সহযোগিতা", description: "শিক্ষাপ্রতিষ্ঠানের সাথে সহযোগিতা" }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChorchaStart;