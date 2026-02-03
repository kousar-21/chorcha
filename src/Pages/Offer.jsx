import React, { useState } from 'react';

const Offer = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const currentOffers = [
    {
      id: 1,
      title: "নতুন বছরের বিশেষ অফার",
      subtitle: "অসাধারণ ছাড়ে আপনার শিক্ষার যাত্রা শুরু করুন",
      originalPrice: "৳৫৯৯",
      discountedPrice: "২৯৯",
      discount: "৫০%",
      period: "৩ মাসের জন্য",
      validity: "৩১ জানুয়ারি, ২০২৬ পর্যন্ত",
      features: [
        "সীমাহীন প্রশ্ন সমাধান",
        "৩ মাস বিনামূল্যে ব্যবহার",
        "প্রাইভেট টিউটোরিয়াল",
        "২৪/৭ সাপোর্ট",
        "কাস্টম ফিচারস"
      ],
      badge: "বিশেষ অফার!",
      color: "from-red-500 to-pink-600"
    },
    {
      id: 2,
      title: "ছাত্র বাড়ে স্পেশাল অফার",
      subtitle: "ছাত্রদের জন্য বিশেষ ছাড়",
      originalPrice: "৳৩৯৯",
      discountedPrice: "১৯৯",
      discount: "৫০%",
      period: "৬ মাসের জন্য",
      validity: "১৫ ফেব্রুয়ারি, ২০২৬ পর্যন্ত",
      features: [
        "১০০০+ প্রশ্ন সমাধান",
        "৬ মাস বিনামূল্যে ব্যবহার",
        "মৌলিক টিউটোরিয়াল",
        "সীমিত সাপোর্ট",
        "বেসিক বিশ্লেষণ"
      ],
      badge: "ছাত্র অফার",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "পরিবারের প্যাকেজ",
      subtitle: "কাধিক ব্যবহারকারীর জন্য সেরা অফার",
      originalPrice: "৳৯৯৯",
      discountedPrice: "৪৯৯",
      discount: "৫০%",
      period: "৬ মাসের জন্য",
      validity: "২৮ ফেব্রুয়ারি, ২০২৬ পর্যন্ত",
      features: [
        "সীমাহীন প্রশ্ন সমাধান",
        "৬ মাস বিনামূল্যে ব্যবহার",
        "৩ একাউন্ট পর্যন্ত",
        "প্রাইভেট টিউটোরিয়াল",
        "২৪/৭ সাপোর্ট"
      ],
      badge: "পরিবার অফার",
      color: "from-green-500 to-teal-600"
    }
  ];

  const expiredOffers = [
    {
      id: 4,
      title: "গ্রীষ্মকালীন অফার",
      originalPrice: "৳৪৯৯",
      discountedPrice: "১৯৯",
      discount: "৬০%",
      expired: true
    },
    {
      id: 5,
      title: "উৎসবের অফার",
      originalPrice: "৳৬৯৯",
      discountedPrice: "২৯৯",
      discount: "৫৭%",
      expired: true
    }
  ];

  const handleOfferClick = (offer) => {
    setSelectedOffer(offer);
  };

  const closeModal = () => {
    setSelectedOffer(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-linear-to-r from-green-500 to-blue-600 text-white rounded-full mb-4">
            <span className="font-bold">সীমিত সময়ের অফার!</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            বিশেষ অফারসমূহ
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            আপনার শিক্ষার যাত্রায় সাহায্যের জন্য বিশেষ অফারসমূহ। সীমিত সময়ের জন্য উপলব্ধ।
          </p>
        </div>

        {/* Current Offers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">বর্তমান অফারসমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentOffers.map((offer) => (
              <div 
                key={offer.id} 
                className="bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-green-500 transition-all duration-300 hover:shadow-xl cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleOfferClick(offer)}
              >
                <div className="relative mb-4">
                  <div className={`absolute -top-3 -right-3 bg-linear-to-r ${offer.color} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                    {offer.badge}
                  </div>
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-gray-800 line-through opacity-60 mb-1">
                      {offer.originalPrice}
                    </div>
                    <div className="text-4xl font-bold text-green-600 mb-1">
                      ৳{offer.discountedPrice}
                    </div>
                    <div className="text-2xl font-bold text-red-600">{offer.discount} ছাড়!</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{offer.title}</h3>
                <p className="text-gray-600 text-center mb-4">{offer.subtitle}</p>
                
                <div className="text-center mb-4">
                  <div className="text-lg font-semibold text-blue-600">{offer.period}</div>
                  <div className="text-sm text-gray-500">মেয়াদ: {offer.validity}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {offer.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 text-xs">
                        ✓
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {offer.features.length > 3 && (
                    <li className="text-gray-500 text-sm">+ {offer.features.length - 3} আরও বৈশিষ্ট্য</li>
                  )}
                </ul>
                
                <button className={`w-full bg-linear-to-r ${offer.color} text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg`}>
                  অফারটি নিন
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Expired Offers Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">সমাপ্ত অফারসমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expiredOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl p-4 border border-gray-200 opacity-75">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-800">{offer.title}</h3>
                  <span className="bg-gray-400 text-white px-2 py-1 rounded text-xs font-bold">সমাপ্ত</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 line-through">{offer.originalPrice}</span>
                  <span className="text-green-600 font-bold">৳{offer.discountedPrice}</span>
                  <span className="text-red-600 font-bold">{offer.discount} ছাড়</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">অফার সমাপ্তির জন্য সময় চলছে</h3>
          <div className="flex justify-center space-x-4">
            {['১৫', '২২', '০৮', '৪৫'].map((time, index) => (
              <div key={index} className="bg-white rounded-lg p-4 min-w-[80px] shadow-md">
                <div className="text-2xl font-bold text-gray-900">{time}</div>
                <div className="text-sm text-gray-600">
                  {index === 0 && 'দিন'}
                  {index === 1 && 'ঘন্টা'}
                  {index === 2 && 'মিনিট'}
                  {index === 3 && 'সেকেন্ড'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">এখনই অফার নিন!</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            সীমিত সময়ের জন্য উপলব্ধ বিশেষ অফারগুলো থেকে সেরাটি বেছে নিন এবং আপনার শিক্ষার যাত্রা আরও কার্যকর করুন।
          </p>
          <button className="bg-linear-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            সব অফার দেখুন
          </button>
        </div>
      </div>

      {/* Offer Detail Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedOffer.title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">{selectedOffer.subtitle}</p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-gray-800 line-through opacity-60 mb-2">
                    মূল্য: {selectedOffer.originalPrice}
                  </div>
                  <div className="text-5xl font-bold text-green-600 mb-2">
                    ৳{selectedOffer.discountedPrice}
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{selectedOffer.discount} ছাড়!</div>
                  <div className="text-lg text-blue-600">{selectedOffer.period}</div>
                  <div className="text-gray-500">মেয়াদ: {selectedOffer.validity}</div>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-4">অফারে যা যা পাবেন:</h4>
              <ul className="space-y-2 mb-6">
                {selectedOffer.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full bg-linear-to-r ${selectedOffer.color} text-white font-bold py-3 px-4 rounded-lg transition-all duration-300`}>
                এখনই অফারটি নিন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;