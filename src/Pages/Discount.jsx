import React, { useState } from 'react';

const Discount = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const plans = {
    monthly: [
      {
        name: "বেসিক",
        originalPrice: "৳২৯৯",
        discountedPrice: "৳১৯৯",
        discount: "৩৩%",
        period: "প্রতি মাস",
        features: [
          "১০০+ প্রশ্ন সমাধান",
          "মৌলিক টিউটোরিয়াল",
          "সীমিত সমর্থন",
          "বেসিক বিশ্লেষণ"
        ],
        popular: false,
        savings: "৳১০০ সাশ্রয়"
      },
      {
        name: "প্রো",
        originalPrice: "৳৫৯৯",
        discountedPrice: "৩৯৯",
        discount: "৩৪%",
        period: "প্রতি মাস",
        features: [
          "সীমাহীন প্রশ্ন সমাধান",
          "এডভান্সড টিউটোরিয়াল",
          "অগ্রাধিকার সমর্থন",
          "এডভান্সড বিশ্লেষণ",
          "কাস্টম ফিচারস"
        ],
        popular: true,
        savings: "৳২০০ সাশ্রয়"
      },
      {
        name: "প্রিমিয়াম",
        originalPrice: "৳৯৯৯",
        discountedPrice: "৬৯৯",
        discount: "৩০%",
        period: "প্রতি মাস",
        features: [
          "সীমাহীন প্রশ্ন সমাধান",
          "এক্সক্লুসিভ টিউটোরিয়াল",
          "২৪/৭ সমর্থন",
          "এডভান্সড বিশ্লেষণ",
          "কাস্টম ফিচারস"
        ],
        popular: false,
        savings: "৳৩০০ সাশ্রয়"
      }
    ],
    yearly: [
      {
        name: "বেসিক",
        originalPrice: "৳৩৫৮৮",
        discountedPrice: "১৯৯৯",
        discount: "৪৪%",
        period: "প্রতি বছর",
        features: [
          "১০০+ প্রশ্ন সমাধান",
          "মৌলিক টিউটোরিয়াল",
          "সীমিত সমর্থন",
          "বেসিক বিশ্লেষণ"
        ],
        popular: false,
        savings: "৳১৫৮৯ সাশ্রয়",
        bonus: "২ মাস ফ্রি"
      },
      {
        name: "প্রো",
        originalPrice: "৭১৮৮",
        discountedPrice: "৩৯৯৯",
        discount: "৪৪%",
        period: "প্রতি বছর",
        features: [
          "সীমাহীন প্রশ্ন সমাধান",
          "এডভান্সড টিউটোরিয়াল",
          "অগ্রাধিকার সমর্থন",
          "এডভান্সড বিশ্লেষণ",
          "কাস্টম ফিচারস"
        ],
        popular: true,
        savings: "৩১৮৯ সাশ্রয়",
        bonus: "২ মাস ফ্রি"
      },
      {
        name: "প্রিমিয়াম",
        originalPrice: "১১৯৮৮",
        discountedPrice: "৬৯৯৯",
        discount: "৪২%",
        period: "প্রতি বছর",
        features: [
          "সীমাহীন প্রশ্ন সমাধান",
          "এক্সক্লুসিভ টিউটোরিয়াল",
          "২৪/৭ সমর্থন",
          "এডভান্সড বিশ্লেষণ",
          "কাস্টম ফিচারস"
        ],
        popular: false,
        savings: "৪৯৮৯ সাশ্রয়",
        bonus: "২ মাস ফ্রি"
      }
    ]
  };

  const promoCodes = [
    { code: "NEW2026", discount: "২০%", description: "নতুন বছরের জন্য বিশেষ ছাড়" },
    { code: "STUDENT25", discount: "২৫%", description: "ছাত্রদের জন্য অতিরিক্ত ছাড়" },
    { code: "FAMILY30", discount: "৩০%", description: "পরিবারের প্যাকেজে ৩০% ছাড়" }
  ];

  const applyPromoCode = () => {
    const validCode = promoCodes.find(code => code.code === promoCode.toUpperCase());
    if (validCode) {
      setDiscountApplied(true);
      alert(`প্রোমো কোড সফলভাবে প্রয়োগ করা হয়েছে! ${validCode.discount} ছাড় পাওয়া যাবে।`);
    } else {
      alert("দুঃখিত, প্রোমো কোডটি সঠিক নয়।");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full mb-4">
            <span className="font-bold">সীমিত সময়ের অফার!</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ছাড়ের মূল্য নির্ধারণ
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            বর্তমান মাসে বিশেষ ছাড়ে আমাদের পরিষেবা সুবিধা পান। বিকাশ ছাড়ের মেয়াদ ৩১ জানুয়ারি, ২০২৬।
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-2xl shadow-lg">
            <div className="flex space-x-1">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 py-3 rounded-xl font-medium transition-colors duration-300 ${
                  selectedPlan === 'monthly'
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                মাসিক পরিকল্পনা
              </button>
              <button
                onClick={() => setSelectedPlan('yearly')}
                className={`px-6 py-3 rounded-xl font-medium transition-colors duration-300 ${
                  selectedPlan === 'yearly'
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                বার্ষিক পরিকল্পনা (২ মাস ফ্রি!)
              </button>
            </div>
          </div>
        </div>

        {/* Discount Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {plans[selectedPlan].map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500 transform md:-translate-y-4 z-10' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    সবচেয়ে জনপ্রিয়
                  </span>
                </div>
              )}
              
              {plan.bonus && (
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {plan.bonus}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="relative mb-4">
                  <div className="text-3xl font-bold text-gray-900 line-through opacity-60">
                    {plan.originalPrice}
                  </div>
                  <div className="text-5xl font-bold text-green-600">
                    {plan.discountedPrice}
                    <span className="text-lg font-normal text-gray-500">/{plan.period.split(' ')[2]}</span>
                  </div>
                </div>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {plan.discount} ছাড়
                </div>
                <div className="text-red-600 font-bold">
                  {plan.savings} সাশ্রয়!
                </div>
                <div className="text-gray-600 mt-1">{plan.period}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 px-4 rounded-lg font-bold transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white shadow-lg'
                    : 'bg-gray-800 hover:bg-black text-white'
                }`}
              >
                এখন কিনুন
              </button>
            </div>
          ))}
        </div>

        {/* Promo Code Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">প্রোমো কোড প্রয়োগ করুন</h2>
          <div className="max-w-md mx-auto flex">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="প্রোমো কোড লিখুন"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={applyPromoCode}
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-r-lg transition-colors duration-300"
            >
              প্রয়োগ করুন
            </button>
          </div>
          
          {discountApplied && (
            <div className="mt-4 text-center text-green-600 font-medium">
              ✓ প্রোমো কোড সফলভাবে প্রয়োগ করা হয়েছে!
            </div>
          )}
        </div>

        {/* Available Promo Codes */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">বিশেষ প্রোমো কোডসমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {promoCodes.map((promo, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-lg font-bold text-green-600 mb-1">{promo.code}</div>
                <div className="text-xl font-bold text-gray-900 mb-2">{promo.discount} ছাড়</div>
                <div className="text-gray-600 text-sm">{promo.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">সাধারণ প্রশ্নাবলী</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ছাড়ের মেয়াদ কতদিন?</h3>
              <p className="text-gray-600">ছাড়ের মেয়াদ ৩১ জানুয়ারি, ২০২৬ পর্যন্ত। এরপর স্বাভাবিক মূল্য প্রযোজ্য হবে।</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">প্রোমো কোড কীভাবে পাবো?</h3>
              <p className="text-gray-600">আমাদের সোশ্যাল মিডিয়া পেজগুলোতে ফলো করলে বিশেষ প্রোমো কোড পাবেন।</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">বার্ষিক পরিকল্পনায় কী সুবিধা?</h3>
              <p className="text-gray-600">বার্ষিক পরিকল্পনায় ২ মাস ফ্রি পাবেন এবং ৪০%+ ছাড় পাবেন।</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">প্ল্যান পরিবর্তন করা যাবে কি?</h3>
              <p className="text-gray-600">হ্যাঁ, যেকোনো সময় আপনার প্ল্যান পরিবর্তন করতে পারেন।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;