import React, { useState } from 'react';

const QuestionSolver = ({ questionData, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { question, options, correctAnswer, explanation } = questionData;

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
      if (onComplete) onComplete(selectedOption === correctAnswer);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      {/* Question Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {question}
      </h2>

      {/* Options List */}
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = index === correctAnswer;
          
          // Logic for dynamic styling
          let buttonClass = "w-full text-left p-4 rounded-lg border transition-all ";
          if (isSubmitted) {
            if (isCorrect) buttonClass += "bg-green-100 border-green-500 text-green-800";
            else if (isSelected) buttonClass += "bg-red-100 border-red-500 text-red-800";
            else buttonClass += "bg-gray-50 border-gray-200 opacity-60";
          } else {
            buttonClass += isSelected 
              ? "border-blue-500 bg-blue-50 text-blue-700" 
              : "border-gray-200 hover:border-blue-300 hover:bg-gray-50";
          }

          return (
            <button
              key={index}
              disabled={isSubmitted}
              onClick={() => setSelectedOption(index)}
              className={buttonClass}
            >
              <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Action Button */}
      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={`mt-6 w-full py-3 rounded-lg font-bold text-white transition-colors ${
            selectedOption !== null ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Submit Answer
        </button>
      ) : (
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-sm font-bold text-blue-800 uppercase">Explanation:</p>
          <p className="text-gray-700 mt-1">{explanation}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 text-blue-600 font-medium hover:underline"
          >
            Try Next Question →
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionSolver;