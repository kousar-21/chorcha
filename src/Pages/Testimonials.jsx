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
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Logo Cloud - Build Authority */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-6">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {/* Professional Logo Placeholders */}
            <div className="flex items-center justify-center w-24 h-12 bg-gray-100 rounded-lg">
              <span className="text-gray-600 font-medium text-sm">Google</span>
            </div>
            <div className="flex items-center justify-center w-24 h-12 bg-gray-100 rounded-lg">
              <span className="text-gray-600 font-medium text-sm">Stripe</span>
            </div>
            <div className="flex items-center justify-center w-24 h-12 bg-gray-100 rounded-lg">
              <span className="text-gray-600 font-medium text-sm">Airbnb</span>
            </div>
            <div className="flex items-center justify-center w-24 h-12 bg-gray-100 rounded-lg">
              <span className="text-gray-600 font-medium text-sm">Shopify</span>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
            We've helped hundreds of businesses scale their digital presence. 
            Here's what some of them have to say about working with us.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex text-amber-400 mb-6">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-xl">{star}</span>
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
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-indigo-600 font-medium">{review.role}</p>
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