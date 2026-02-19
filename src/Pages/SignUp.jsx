import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Use a remote URL so the code doesn't crash if the local file is missing
  const signupAnimationUrl = "https://assets9.lottiefiles.com/packages/lf20_m6cuL6.json";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'আপনার পুরো নাম লিখুন';
    if (!formData.email) {
      newErrors.email = 'ইমেইল অবশ্যই প্রয়োজন';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'ইমেইল ঠিকানা সঠিক নয়';
    }
    if (!formData.password) {
      newErrors.password = 'পাসওয়ার্ড অবশ্যই প্রয়োজন';
    } else if (formData.password.length < 6) {
      newErrors.password = 'পাসওয়ার্ড অবশ্যই ৬ অক্ষরের বেশি হতে হবে';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'পাসওয়ার্ড দুটি মিলছে না';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('একাউন্ট তৈরি সফল হয়েছে!'); 
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Animation */}
        <div className="hidden md:flex flex-col items-center justify-center p-8">
          <div className="w-80 h-80">
            <Player
              autoplay
              loop
              src={signupAnimationUrl} // Switched to URL to prevent build errors
              style={{ height: 'auto', width: '100%' }}
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mt-4">
            নতুন একাউন্ট তৈরি করুন
          </h2>
          <p className="text-gray-600 text-center mt-2">
            চর্চা পরিবারের সাথে আপনার শেখার নতুন দিগন্ত উন্মোচন করুন
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">সাইন আপ করুন</h1>
            <p className="text-gray-600">আপনার তথ্য দিয়ে ফর্মটি পূরণ করুন</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">পুরো নাম</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="আপনার নাম লিখুন"
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল ঠিকানা</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="example@mail.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="পাসওয়ার্ড"
                />
                {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">নিশ্চিত করুন</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="পুনরায় লিখুন"
                />
                {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 mt-4"
            >
              {isLoading ? 'একাউন্ট তৈরি হচ্ছে...' : 'একাউন্ট তৈরি করুন'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              ইতিমধ্যেই একাউন্ট আছে?{' '}
              <Link to="/signin" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                লগইন করুন
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;