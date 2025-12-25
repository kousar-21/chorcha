import React, { useState } from 'react';

// --- MOCK DATA ---
const mockQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of the React 'useEffect' hook?",
    options: [
      "To manage local component state",
      "To handle side effects like API calls and subscriptions",
      "To optimize rendering performance manually",
      "To style components dynamically"
    ],
    correctAnswer: 1,
    explanation: "useEffect is designed to handle side effects that happen outside the scope of the render function, such as data fetching, timers, or manual DOM manipulations."
  },
  {
    id: 2,
    question: "Which of the following is used to pass data to a child component?",
    options: [
      "State",
      "Ref",
      "Props",
      "Effect"
    ],
    correctAnswer: 2,
    explanation: "Props (short for properties) are the standard way to pass data from a parent component down to its children in React."
  }
];

// --- MAIN COMPONENT ---
const QuestionSolver = () => {
  // State for tracking the current question index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get current question data
  const currentQuestion = mockQuestions[currentIndex];

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    // Reset local states for the next question
    setSelectedOption(null);
    setIsSubmitted(false);
    
    // Cycle through questions or loop back to start
    setCurrentIndex((prev) => (prev + 1) % mockQuestions.length);
  };

  // Safety check
  if (!currentQuestion) return <div className="p-10 text-center">Loading questions...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        
        {/* Progress Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase">
            Question {currentIndex + 1} of {mockQuestions.length}
          </span>
        </div>

        {/* Question Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-tight">
          {currentQuestion.question}
        </h2>

        {/* Options List */}
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            
            let buttonClass = "w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center ";
            
            if (isSubmitted) {
              if (isCorrect) {
                buttonClass += "bg-green-50 border-green-500 text-green-800 ring-2 ring-green-100";
              } else if (isSelected) {
                buttonClass += "bg-red-50 border-red-500 text-red-800";
              } else {
                buttonClass += "bg-gray-50 border-gray-100 opacity-50";
              }
            } else {
              buttonClass += isSelected 
                ? "border-blue-600 bg-blue-50 text-blue-700 shadow-md transform -translate-y-1" 
                : "border-gray-100 hover:border-blue-200 hover:bg-gray-50 text-gray-700";
            }

            return (
              <button
                key={index}
                disabled={isSubmitted}
                onClick={() => setSelectedOption(index)}
                className={buttonClass}
              >
                <span className={`w-8 h-8 flex items-center justify-center rounded-full mr-4 text-sm font-bold ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-lg">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className={`mt-8 w-full py-4 rounded-xl font-black text-lg transition-all shadow-lg ${
              selectedOption !== null 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Check Answer
          </button>
        ) : (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-6 bg-blue-50 border-l-8 border-blue-500 rounded-r-xl">
              <h4 className="text-blue-900 font-bold flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Explanation
              </h4>
              <p className="text-blue-800 mt-2 leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
            
            <button 
              onClick={handleNext} 
              className="mt-6 w-full flex justify-center items-center py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-colors"
            >
              {currentIndex === mockQuestions.length - 1 ? "Restart Quiz" : "Next Question"}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionSolver;