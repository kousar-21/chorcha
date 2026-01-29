import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    subject: '',
  });

  const contactInfo = {
    email: 'info@chorcha.bangladesh',
    phone: '+৮৮০-১৭১২-৩৪৫৬৭৮',
    address: 'ঢাকা, বাংলাদেশ',
    workingHours: 'রবিবার - বৃহস্পতিবার: ৯:০০ থেকে ১৮:০০',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      subject: '',
    });
    alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে!');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            যোগাযোগ করুন
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            আমাদের সাথে যোগাযোগ করুন যেকোনো প্রশ্ন বা পরামর্শের জন্য। 
            আমাদের টিম ২৪ ঘন্টার মধ্যে আপনার বার্তার উত্তর দিবে।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              আমাদের তথ্য
            </h2>
            
            <div className="space-y-8">
              
              {/* Email */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-100 p-3 rounded-xl text-green-600">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">ইমেইল</h3>
                  <p className="text-gray-700">{contactInfo.email}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">ফোন নম্বর</h3>
                  <p className="text-gray-700">{contactInfo.phone}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">ঠিকানা</h3>
                  <p className="text-gray-700">{contactInfo.address}</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-yellow-100 p-3 rounded-xl text-yellow-600">
                  <span className="text-2xl">🕐</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">কাজের সময়</h3>
                  <p className="text-gray-700">{contactInfo.workingHours}</p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">অন্যান্য মাধ্যমে</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
                  <span className="text-xl">ফেসবুক</span>
                </a>
                <a href="#" className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
                  <span className="text-xl">লিঙ্কডিন</span>
                </a>
                <a href="#" className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors duration-300">
                  <span className="text-xl">হোয়াটসঅ্যাপ</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">বার্তা পাঠান</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      নাম (প্রথম)
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                      placeholder="আপনার নাম"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      নাম (শেষ)
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                      placeholder="আপনার শেষ নাম"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    বিষয়
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="support">সহায়তা চাই</option>
                    <option value="question">প্রশ্ন করতে চাই</option>
                    <option value="feedback">পরামর্শ</option>
                    <option value="collaboration">যৌথ প্রচেষ্টা</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ইমেইল
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                    placeholder="আপনার ইমেইল"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    বার্তা
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 resize-none"
                    placeholder="আপনার বার্তা লিখুন..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  বার্তা পাঠান
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;