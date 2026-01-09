import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We build solutions for <span className="text-blue-600">tomorrow</span>.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our mission is to bridge the gap between complex technology and intuitive user experiences. 
            Founded in 2024, we’ve been dedicated to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Content Section: Image + Text */}
      <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Our Team" 
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            What started as a small team of three enthusiasts has grown into a global collective of 
            creatives, engineers, and strategists. We believe that the best work comes from 
            diversity, curiosity, and a relentless drive to solve problems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-2xl font-bold">150+</h4>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="text-2xl font-bold">50k</h4>
              <p className="text-sm text-gray-500">Happy Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition">
              <div className="text-blue-600 text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Always pushing the boundaries of what is possible.</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition">
              <div className="text-blue-600 text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">Building trust through transparency and honesty.</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition">
              <div className="text-blue-600 text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">Commitment to excellence in every line of code.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;