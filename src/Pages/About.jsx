import React from 'react';

const About = () => {
  const team = [
    { name: 'Alex Rivera', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300' },
    { name: 'Sarah Chen', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300' },
    { name: 'Marcus Thorne', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300' },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-blue-100">
      {/* Hero Section */}
      <section className="py-24 bg-slate-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="uppercase tracking-widest text-blue-600 font-bold text-sm">Our Mission</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6 tracking-tight">
            We build solutions for <span className="text-blue-600">tomorrow</span>.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our mission is to bridge the gap between complex technology and intuitive user experiences. 
            Dedicated to excellence and innovation since day one.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Our Team" 
            className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            What started as a small team of three enthusiasts has grown into a global collective. 
            We believe that the best work comes from diversity, curiosity, and a relentless drive to solve problems.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="group">
              <h4 className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300 inline-block">150+</h4>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">Projects Completed</p>
            </div>
            <div className="group">
              <h4 className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300 inline-block">50k</h4>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">Happy Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - NEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leaders</h2>
            <p className="text-gray-500">The brilliant minds driving our success every day.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-xl transition-all group overflow-hidden border border-gray-100">
                <img src={member.img} alt={member.name} className="w-full h-72 object-cover rounded-2xl mb-6 group-hover:scale-105 transition duration-500" />
                <div className="text-center pb-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: '💡', title: 'Innovation', desc: 'Always pushing the boundaries of what is possible.' },
              { icon: '🤝', title: 'Integrity', desc: 'Building trust through transparency and honesty.' },
              { icon: '🎯', title: 'Quality', desc: 'Commitment to excellence in every line of code.' }
            ].map((value, i) => (
              <div key={i} className="relative p-10 rounded-3xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all group">
                <div className="text-5xl mb-6 group-hover:rotate-12 transition-transform">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to work with us?</h2>
                <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto">Join the hundreds of companies building the future with our specialized team.</p>
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                    Contact Us Today
                </button>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-700 rounded-full opacity-50"></div>
        </div>
      </section>
    </div>
  );
};

export default About;