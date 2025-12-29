import React, { useState } from 'react';
import { RefreshCcw, Check, X, Info, Trophy } from 'lucide-react';

const Flashcard = ({ front, back, category }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [status, setStatus] = useState(null); // 'known' | 'learning' | null

  return (
    <div className="group h-[350px] w-full perspective:1000px">
      <div 
        className={`relative h-full w-full rounded-3xl transition-all duration-500 shadow-xl ${isFlipped ? '' : ''}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full rounded-3xl bg-white p-8 border-2 border-gray-50 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest">
              {category}
            </span>
            <Info className="w-5 h-5 text-gray-300" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-2xl font-bold text-gray-800 leading-tight">
              {front}
            </h3>
            <p className="mt-4 text-gray-400 text-sm italic">Click to reveal answer</p>
          </div>
          <button 
            onClick={() => setIsFlipped(true)}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-colors"
          >
            <RefreshCcw className="w-4 h-4" /> Flip Card
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 h-full w-full rounded-3xl bg-indigo-600 p-8 text-white flex flex-col justify-between shadow-2xl shadow-indigo-200">
          <div className="text-indigo-200 text-xs font-bold uppercase tracking-widest">
            Correct Answer
          </div>
          <div className="flex-1 flex items-center justify-center text-center">
            <h3 className="text-3xl font-medium leading-snug">
              {back}
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={(e) => { e.stopPropagation(); setStatus('learning'); setIsFlipped(false); }}
              className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all"
            >
              <X className="w-4 h-4 text-red-300" /> Study Again
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setStatus('known'); setIsFlipped(false); }}
              className="flex items-center justify-center gap-2 py-3 bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl font-bold transition-all shadow-lg"
            >
              <Check className="w-4 h-4" /> Got It!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RevisionSession = () => {
  const cards = [
    { category: "Calculus", front: "What is the derivative of sin(x)?", back: "cos(x)" },
    { category: "Physics", front: "State Newton's Second Law of Motion", back: "F = m × a" },
  ];

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Daily Warm-up</h2>
          <p className="text-sm text-gray-500">12 cards remaining</p>
        </div>
        <div className="flex -space-x-2">
           <div className="w-8 h-8 rounded-full border-2 border-white bg-green-400 flex items-center justify-center text-white text-[10px] font-bold">8</div>
           <div className="w-8 h-8 rounded-full border-2 border-white bg-amber-400 flex items-center justify-center text-white text-[10px] font-bold">4</div>
        </div>
      </div>

      <Flashcard {...cards[0]} />

      <div className="mt-8 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex items-center gap-4">
        <div className="bg-indigo-600 p-2 rounded-lg">
          <Trophy className="w-5 h-5 text-white" />
        </div>
        <p className="text-sm text-indigo-900 leading-tight">
          <span className="font-bold">Pro Tip:</span> Mastering these cards daily improves long-term memory by <span className="font-bold">80%</span>.
        </p>
      </div>
    </div>
  );
};

export default RevisionSession;