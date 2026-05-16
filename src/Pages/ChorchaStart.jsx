import React from 'react';
import { motion } from 'framer-motion';

const ChorchaStart = () => {
  const timelineEvents = [
    {
      year: "২০২৩",
      title: "চর্চা শুরু",
      description: "বাংলাদেশি ছাত্রদের জন্য একটি অ্যাকাডেমিক সহায়তা প্ল্যাটফর্ম হিসেবে চর্চার সূচনা। প্রথম দিনেই লক্ষ্য ছিল পড়াশোনার জগতে প্রযুক্তির সমন্বয় ঘটানো।",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
    },
    {
      year: "২০২৪",
      title: "প্রাথমিক সাফল্য",
      description: "১০০০+ ছাত্র আমাদের প্ল্যাটফর্মে যোগ দেয়। প্রথম মাসেই ৫০০০+ প্রশ্নের সমাধান প্রদান করা হয়েছিল। বাংলাদেশের বিভিন্ন শিক্ষাপ্রতিষ্ঠানের সাথে সহযোগিতা শুরু হয়।",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    },
    {
      year: "২০২৫",
      title: "বিস্তারিত বৃদ্ধি",
      description: "৩০০০+ ছাত্র আমাদের প্ল্যাটফর্মে সক্রিয়। AI চালিত সমাধান সিস্টেম চালু হয়। বাংলাদেশের বিভিন্ন স্কুল, কলেজ ও বিশ্ববিদ্যালয়ের সাথে আনুমদন প্রাপ্ত সহযোগিতা চুক্তি স্বাক্ষরিত হয়।",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
    },
    {
      year: "২০২৬",
      title: "বর্তমান অবস্থা",
      description: "৫০০০+ সন্তুষ্ট ছাত্র। ১০০০০+ প্রশ্নের সমাধান প্রদান। দেশের অন্যতম জনপ্রিয় অ্যাকাডেমিক সহায়তা প্ল্যাটফর্ম। নতুন AI ফিচারস এবং বাংলা NLP সিস্টেম চালু হয়েছে।",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const founders = [
    {
      name: "আহমেদ হাসান",
      role: "প্রতিষ্ঠাতা ও CEO",
      quote: "আমাদের লক্ষ্য হলো বাংলাদেশের প্রতিটি ছাত্রের পড়াশোনার যাত্রায় সহায়তা করা।",
      image: "https://i.pravatar.cc/150?u=ah"
    },
    {
      name: "সাবরিনা আক্তার",
      role: "প্রতিষ্ঠাতা ও CTO",
      quote: "প্রযুক্তির মাধ্যমে শিক্ষার সমস্যার সমাধান খুঁজে পাওয়া আমাদের মিশন।",
      image: "https://i.pravatar.cc/150?u=sa"
    },
    {
      name: "রহিম উদ্দিন",
      role: "প্রতিষ্ঠাতা ও COO",
      quote: "বাংলাদেশি শিক্ষার্থীদের জন্য উন্নত প্রযুক্তি ব্যবহার করে শিক্ষার সমাধান প্রদান।",
      image: "https://i.pravatar.cc/150?u=ru"
    }
  ];

  const milestones = [
    { number: "৫০০০+", label: "সন্তুষ্ট ছাত্র", icon: "👥" },
    { number: "১০০০০+", label: "সমাধান করা প্রশ্ন", icon: "📝" },
    { number: "১০০+", label: "সহযোগিতা", icon: "🏛️" },
    { number: "২৪/৭", label: "সাপোর্ট", icon: "⚡" }
  ];

  return (
    <div className="min-h-screen bg-primary transition-colors duration-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-700 dark:text-white mb-6">
            চর্চা <span className="text-blue-600">শুরু</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            একটি ছোট ধারণা থেকে বাংলাদেশের অন্যতম জনপ্রিয় অ্যাকাডেমিক সহায়তা প্ল্যাটফর্মে পরিণত হওয়ার দীর্ঘ পথচলা।
          </p>
        </div>

        {/* Milestones - Clean Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {milestones.map((ms, index) => (
            <div key={index} className="bg-secondary border border-green-200 dark:border-slate-800 p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-2xl mb-2">{ms.icon}</div>
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-1">{ms.number}</div>
              <div className="text-slate-500 dark:text-slate-400 font-medium text-sm">{ms.label}</div>
            </div>
          ))}
        </div>

        {/* Founders Section - Professional Grids */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-slate-600 dark:text-white mb-12 text-center">প্রতিষ্ঠাতা দল</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="group text-center">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-700 dark:text-white mb-1">{founder.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wider">{founder.role}</p>
                <p className="text-slate-500 dark:text-slate-400 italic leading-relaxed px-4">"{founder.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Professional Alignment */}
        <div className="mb-32 relative">
          <h2 className="text-3xl font-bold text-slate-600 dark:text-white mb-16 text-center">আমাদের যাত্রা</h2>
          
          {/* Vertical line (Hidden on mobile, centered on desktop) */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800 top-10"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center">
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950 z-20 hidden md:block"></div>

                {/* Left Side (Content for even, Image for odd) */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}>
                  <div className="pl-10 md:pl-0">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm mb-4">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{event.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{event.description}</p>
                  </div>
                </div>

                {/* Right Side (Image for even, Content for odd) */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                   <div className="pl-10 md:pl-0">
                    <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-64 object-cover rounded-[2rem] shadow-2xl shadow-slate-200 dark:shadow-none border border-slate-100 dark:border-slate-800"
                    />
                   </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision - Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-sm italic font-serif">M</span>
              আমাদের মিশন
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              বাংলাদেশের প্রতিটি শিক্ষার্থীর জন্য প্রযুক্তি-চালিত অ্যাকাডেমিক সমাধান প্রদান করা। আমরা বিশ্বাস করি সঠিক প্রযুক্তির মাধ্যমে শিক্ষার জটিলতাকে সহজ করা সম্ভব।
            </p>
          </div>
          
          <div className="bg-blue-600 text-white rounded-[2.5rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4 text-sm italic font-serif">V</span>
              আমাদের ভিশন
            </h3>
            <p className="text-blue-50 text-lg leading-relaxed">
              দেশের শীর্ষস্থানীয় এডু-টেক প্ল্যাটফর্ম হিসেবে প্রতিষ্ঠিত হওয়া, যেখানে জ্ঞান অর্জন হবে অবাধ এবং প্রযুক্তি হবে শিক্ষার্থীর সবচেয়ে বড় সহায়ক।
            </p>
          </div>
        </div>

        {/* Values Section - Minimalist */}
        <div className="border-t border-slate-200 pt-20">
          <h2 className="text-3xl font-bold text-slate-600 dark:text-white mb-12 text-center">আমাদের মূল্যবোধ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "গুণগত মান", description: "উচ্চ মানের শিক্ষা সমাধান প্রদান" },
              { title: "নিরপেক্ষতা", description: "প্রতিটি ছাত্রের প্রতি সমান মনোযোগ" },
              { title: "নৈপুণ্য", description: "প্রযুক্তি ও শিক্ষার ক্ষেত্রে দক্ষতা" },
              { title: "সহযোগিতা", description: "শিক্ষাপ্রতিষ্ঠানের সাথে পার্টনারশিপ" }
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="w-12 h-1 bg-blue-600 mb-4 transition-all group-hover:w-full"></div>
                <h3 className="text-lg font-bold text-slate-700 dark:text-white mb-2">{value.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChorchaStart;