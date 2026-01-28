import React, { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "একাডেমিক সাফল্যের জন্য কার্যকর পড়াশোনার কৌশল",
      excerpt: "একাডেমিক সাফল্যের জন্য কার্যকর পড়াশোনার কৌশল সম্পর্কে জানুন। সঠিক পদ্ধতি অবলম্বন করে আপনি নিজেকে সফল করে তুলতে পারেন।",
      author: "চর্চা টিম",
      date: "২০ জানুয়ারি, ২০২৬",
      category: "শিক্ষা",
      readTime: "৫ মিনিট",
      image: "https://placehold.co/400x250/4f46e5/ffffff?text=শিক্ষা+টিপস",
      tags: ["পড়াশোনা", "পরীক্ষা", "কৌশল"]
    },
    {
      id: 2,
      title: "প্রযুক্তির সাথে শিক্ষার সমন্বয়",
      excerpt: "আধুনিক যুগে প্রযুক্তির সাথে শিক্ষার সমন্বয় কীভাবে কার্যকর হতে পারে তা নিয়ে আলোচনা।",
      author: "চর্চা টিম",
      date: "১৮ জানুয়ারি, ২০২৬",
      category: "প্রযুক্তি",
      readTime: "৪ মিনিট",
      image: "https://placehold.co/400x250/10b981/ffffff?text=শিক্ষা+প্রযুক্তি",
      tags: ["প্রযুক্তি", "শিক্ষা", "চর্চা"]
    },
    {
      id: 3,
      title: "স্মার্ট স্টাডি টেকনিক বাংলাদেশি ছাত্রদের জন্য",
      excerpt: "বাংলাদেশি ছাত্রদের জন্য স্মার্ট স্টাডি টেকনিক সম্পর্কে বিস্তারিত তথ্য। সময় এবং স্থানের বাধাকে অতিক্রম করে কার্যকর পড়াশোনা করুন।",
      author: "চর্চা টিম",
      date: "১৫ জানুয়ারি, ২০২৬",
      category: "পড়াশোনা",
      readTime: "৬ মিনিট",
      image: "https://placehold.co/400x250/8b5cf6/ffffff?text=পড়াশোনা+টিপস",
      tags: ["স্টাডি", "টিপস", "কৌশল"]
    },
    {
      id: 4,
      title: "চর্চা প্ল্যাটফর্মের সাফল্যের গল্প",
      excerpt: "চর্চা প্ল্যাটফর্মের সাফল্যের গল্প এবং কীভাবে আমরা ৫০০০+ ছাত্রকে সাহায্য করেছি।",
      author: "চর্চা টিম",
      date: "১২ জানুয়ারি, ২০২৬",
      category: "আমাদের সম্পর্কে",
      readTime: "৩ মিনিট",
      image: "https://placehold.co/400x250/f59e0b/ffffff?text=সাফল্য+গল্প",
      tags: ["চর্চা", "সাফল্য", "ছাত্র"]
    },
    {
      id: 5,
      title: "পরীক্ষার প্রস্তুতির জন্য সেরা কৌশল",
      excerpt: "পরীক্ষার আগে কীভাবে প্রস্তুতি নিবেন তার কার্যকর কৌশল। চাপহীন পরীক্ষা দিন এবং সফলতা অর্জন করুন।",
      author: "চর্চা টিম",
      date: "১০ জানুয়ারি, ২০২৬",
      category: "পড়াশোনা",
      readTime: "৫ মিনিট",
      image: "https://placehold.co/400x250/ef4444/ffffff?text=পরীক্ষা+প্রস্তুতি",
      tags: ["পরীক্ষা", "প্রস্তুতি", "টিপস"]
    },
    {
      id: 6,
      title: "ডিজিটাল শিক্ষার ভবিষ্যৎ বাংলাদেশে",
      excerpt: "বাংলাদেশে ডিজিটাল শিক্ষার ভবিষ্যৎ নিয়ে আলোচনা এবং কীভাবে এটি ছাত্রদের জন্য সুযোগ তৈরি করছে।",
      author: "চর্চা টিম",
      date: "৮ জানুয়ারি, ২০২৬",
      category: "প্রযুক্তি",
      readTime: "৭ মিনিট",
      image: "https://placehold.co/400x250/06b6d4/ffffff?text=ডিজিটাল+শিক্ষা",
      tags: ["ডিজিটাল", "শিক্ষা", "ভবিষ্যৎ"]
    }
  ];

  const categories = ['all', 'শিক্ষা', 'প্রযুক্তি', 'পড়াশোনা', 'আমাদের সম্পর্কে'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ব্লগ
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            শিক্ষা, প্রযুক্তি এবং সাফল্যের গল্পে পরিপূর্ণ আমাদের ব্লগে স্বাগতম। আপনার শিক্ষাজীবনের জন্য গুরুত্বপূর্ণ তথ্য ও টিপস পান এখানে।
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  পড়ুন
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            আমাদের ব্লগে সাবস্ক্রাইব করুন
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            নতুন পোস্ট পাওয়ার জন্য আমাদের ব্লগে সাবস্ক্রাইব করুন এবং শিক্ষার্থীদের জন্য গুরুত্বপূর্ণ তথ্য ও টিপস পান।
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="আপনার ইমেইল লিখুন" 
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-gray-900 hover:bg-black text-white font-medium py-3 px-6 rounded-r-lg transition-colors duration-300">
              সাবস্ক্রাইব
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;