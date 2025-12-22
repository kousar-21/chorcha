import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, Lightbulb, Sparkles } from 'lucide-react';

const SolutionStep = ({ step, index, isOpen, toggle, isLast }) => (
  <div className="relative group">
    {/* The Vertical Timeline Line */}
    {!isLast && (
      <div className="absolute left-[27px] top-[48px] bottom-0 w-0.5 bg-gradient-to-b from-indigo-100 to-transparent z-0" />
    )}

    <div className={`relative z-10 mb-4 transition-all duration-300 rounded-2xl border ${
      isOpen ? 'bg-white shadow-xl border-indigo-100 scale-[1.02]' : 'bg-gray-50/50 border-transparent hover:border-indigo-50'
    }`}>
      <button
        onClick={toggle}
        className="w-full py-5 flex items-center justify-between text-left px-5 focus:outline-none"
      >
        <div className="flex items-center gap-5">
          {/* Number Badge with Glow */}
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-500 shadow-sm ${
            isOpen 
              ? 'bg-indigo-600 text-white shadow-indigo-200 rotate-6' 
              : 'bg-white text-gray-400 group-hover:text-indigo-500'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </div>
          
          <div>
            <span className={`block text-xs uppercase tracking-widest font-bold mb-0.5 ${isOpen ? 'text-indigo-500' : 'text-gray-400'}`}>
              Step {index + 1}
            </span>
            <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-600'}`}>
              {step.title}
            </span>
          </div>
        </div>

        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-indigo-50 text-indigo-600' : 'text-gray-300'}`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      
      {/* Animated Content Area */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-5 pb-6 ml-[60px] pr-8">
          <div className="h-px w-full bg-gray-100 mb-4" />
          <p className="text-gray-600 leading-relaxed text-base">
            {step.content}
          </p>
          
          {step.hint && (
            <div className="mt-5 relative overflow-hidden group/hint">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 opacity-100" />
              <div className="relative p-4 flex gap-3 items-start border border-amber-100 rounded-xl">
                <div className="bg-white p-1.5 rounded-lg shadow-sm">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <span className="block text-[11px] font-black uppercase tracking-tighter text-amber-600 mb-0.5">Expert Insight</span>
                  <span className="text-sm text-amber-900/80 italic">"{step.hint}"</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const StepByStepSolution = ({ steps }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-2xl mx-auto mt-12 p-2">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2.5 rounded-2xl shadow-lg shadow-indigo-200">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Solution Guide</h3>
            <p className="text-sm text-gray-500">Master this concept step-by-step</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Difficulty</span>
          <div className="flex gap-1 mt-1">
            <div className="w-4 h-1.5 rounded-full bg-indigo-600" />
            <div className="w-4 h-1.5 rounded-full bg-indigo-600" />
            <div className="w-4 h-1.5 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
      
      {/* Steps Container */}
      <div className="space-y-2">
        {steps.map((step, index) => (
          <SolutionStep
            key={index}
            step={step}
            index={index}
            isLast={index === steps.length - 1}
            isOpen={openIndex === index}
            toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>

      {/* Footer Encouragement */}
      <div className="mt-8 text-center py-6 border-t border-gray-100">
        <p className="text-gray-400 text-sm">Still confused? <button className="text-indigo-600 font-bold hover:underline">Ask a Tutor</button></p>
      </div>
    </div>
  );
};

export default StepByStepSolution;