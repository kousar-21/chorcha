import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "CEO at TechFlow",
      content: "Working with this team was a game-changer for our brand. Their attention to detail and modern approach to UI/UX is unmatched.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "David Chen",
      role: "Product Manager",
      content: "The development speed was incredible. They didn't just meet our requirements; they anticipated our future needs before we did.",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      content: "Clean code, beautiful design, and seamless communication. It's rare to find a partner that excels in both form and function.",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Logo Cloud - Build Authority */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Logos for Placeholder */}
            <span className="text-2xl font-bold text-slate-800">GOOGLE</span>
            <span className="text-2xl font-bold text-slate-800">STRIPE</span>
            <span className="text-2xl font-bold text-slate-800">AIRBNB</span>
            <span className="text-2xl font-bold text-slate-800">SHOPIFY</span>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Don't take our word for it.
          </h2>
          <p className="text-lg text-gray-600">
            We've helped hundreds of businesses scale their digital presence. 
            Here is what some of them have to say.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex text-yellow-400 mb-4 text-sm">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-8">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-blue-50"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-blue-600 font-semibold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;