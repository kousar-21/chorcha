import React from 'react';
import { Target, Zap, Brain, BookOpen, ChevronRight, Award } from 'lucide-react';

const TopicProgress = ({ topic, score, color }) => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${color.bg}`}>
      <topic.icon className={`w-6 h-6 ${color.text}`} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between mb-1.5">
        <span className="font-bold text-gray-700">{topic.name}</span>
        <span className="text-sm font-semibold text-gray-500">{score}%</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-out rounded-full ${color.bar}`} 
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 transition-colors" />
  </div>
);

const MasteryDashboard = () => {
  const stats = [
    { name: "Algebra", score: 85, icon: Target, color: { bg: "bg-blue-50", text: "text-blue-600", bar: "bg-blue-500" } },
    { name: "Geometry", score: 62, icon: Brain, color: { bg: "bg-purple-50", text: "text-purple-600", bar: "bg-purple-500" } },
    { name: "Calculus", score: 45, icon: Zap, color: { bg: "bg-amber-50", text: "text-amber-600", bar: "bg-amber-500" } },
    { name: "Statistics", score: 92, icon: BookOpen, color: { bg: "bg-emerald-50", text: "text-emerald-600", bar: "bg-emerald-500" } },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
          <Award className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12" />
          <p className="text-indigo-100 text-sm font-medium">Global Rank</p>
          <h4 className="text-3xl font-bold mt-1">#1,240</h4>
          <div className="mt-4 flex items-center gap-2 text-xs bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md">
            <span>Top 5% this month</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 rounded-full border-4 border-emerald-500 border-t-gray-100 flex items-center justify-center -rotate-45">
            <span className="rotate-45 font-bold text-gray-800">14</span>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Day Streak</p>
            <h4 className="text-xl font-bold text-gray-800">Keep it up!</h4>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="bg-orange-50 p-3 rounded-2xl text-orange-500">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">XP Earned</p>
            <h4 className="text-xl font-bold text-gray-800">12,450</h4>
          </div>
        </div>
      </div>

      {/* Mastery Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-gray-800">Topic Mastery</h3>
            <button className="text-sm text-indigo-600 font-bold hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {stats.map((item, idx) => (
              <TopicProgress key={idx} topic={item} score={item.score} color={item.color} />
            ))}
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="bg-gray-50/50 rounded-3xl p-8 border border-dashed border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Smart Recommendations</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
              <div className="p-2 bg-amber-100 rounded-xl text-amber-600 mt-1">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">Review Calculus</h5>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Your mastery dropped by 5% this week. Refresh "Integrals" now.</p>
                <button className="mt-3 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors">Start Review</button>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
              <div className="p-2 bg-blue-100 rounded-xl text-blue-600 mt-1">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-gray-800 text-sm">Weekly Challenge</h5>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Solve 10 Geometry problems to earn the "Spatial Master" badge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasteryDashboard;