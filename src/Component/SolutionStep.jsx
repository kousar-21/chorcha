import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, Lightbulb } from 'lucide-react';

const SolutionStep = ({ step, index, isOpen, toggle }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={toggle}
      className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-4"
    >
      <div className="flex items-center gap-4">
        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
          {index + 1}
        </span>
        <span className="font-medium text-gray-700">{step.title}</span>
      </div>
      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    
    {isOpen && (
      <div className="px-16 pb-4 text-gray-600 animate-fadeIn">
        <p className="leading-relaxed">{step.content}</p>
        {step.hint && (
          <div className="mt-3 flex gap-2 items-start p-3 bg-amber-50 rounded-lg border border-amber-100 text-sm text-amber-800">
            <Lightbulb className="w-4 h-4 mt-0.5" />
            <span><strong>Pro Tip:</strong> {step.hint}</span>
          </div>
        )}
      </div>
    )}
  </div>
);

const StepByStepSolution = ({ steps }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-800 p-4 flex items-center gap-2">
        <CheckCircle2 className="text-green-400 w-5 h-5" />
        <h3 className="text-white font-semibold">Solution Breakdown</h3>
      </div>
      
      <div className="divide-y divide-gray-100">
        {steps.map((step, index) => (
          <SolutionStep
            key={index}
            step={step}
            index={index}
            isOpen={openIndex === index}
            toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default StepByStepSolution;