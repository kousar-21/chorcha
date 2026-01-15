import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "High-performance, responsive websites built with modern frameworks like React and Next.js.",
      icon: "🌐",
      color: "bg-blue-500"
    },
    {
      title: "UI/UX Design",
      description: "User-centric designs that are not only beautiful but also convert visitors into customers.",
      icon: "🎨",
      color: "bg-purple-500"
    },
    {
      title: "Mobile Solutions",
      description: "Cross-platform mobile applications that provide a seamless experience on iOS and Android.",
      icon: "📱",
      color: "bg-green-500"
    },
    {
      title: "Cloud Strategy",
      description: "Scalable cloud infrastructure to ensure your business stays online 24/7 with zero downtime.",
      icon: "☁️",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Specialized solutions for <br /> unique business needs.
            </h3>
          </div>
          <p className="text-gray-500 text-lg max-w-sm">
            We don't just build software; we build the engine that drives your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-800">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href="#" 
                className="text-sm font-bold text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Feature/Stat */}
        <div className="mt-16 p-8 md:p-12 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2">Not sure which service you need?</h4>
            <p className="text-slate-400">Schedule a free 30-minute discovery call with our experts.</p>
          </div>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
            Book a Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;