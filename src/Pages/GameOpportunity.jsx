import React, { useState, useEffect } from 'react';

const GameOpportunity = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameHistory, setGameHistory] = useState([]);

  // All game questions in one array
  const allGames = [
    {
      id: 1,
      question: "১৫ + ২৭ = ?",
      options: ["৪০", "৪২", "৪৫", "৩২"],
      correct: "৪২",
      points: 10
    },
    {
      id: 2,
      question: "৭ × ৮ = ?",
      options: ["৫৪", "৫৬", "৬৪", "৪৮"],
      correct: "৫৬",
      points: 10
    },
    {
      id: 3,
      question: "১০০ ÷ ৫ = ?",
      options: ["১৫", "২০", "২৫", "৩০"],
      correct: "২০",
      points: 10
    },
    {
      id: 4,
      question: "৩² + ৪² = ?",
      options: ["২০", "২৫", "৩০", "৩৫"],
      correct: "২৫",
      points: 15
    },
    {
      id: 5,
      question: "১২৫ - ৭৮ = ?",
      options: ["৪৫", "৪৭", "৫২", "৫৭"],
      correct: "৪৭",
      points: 10
    },
    {
      id: 6,
      type: "বানান শুদ্ধি",
      word: "অপরাহ্ন",
      options: ["অপরাহ্ন", "অপরাহন", "অপরাহ্ন্", "অপরাহ্ন"],
      correct: "অপরাহ্ন",
      points: 15
    },
    {
      id: 7,
      type: "প্রতিশব্দ",
      word: "সূর্য",
      options: ["চাঁদ", "আদিত্য", "তারা", "আকাশ"],
      correct: "আদিত্য",
      points: 15
    },
    {
      id: 8,
      type: "নম্বর মনে রাখুন",
      sequence: "৭, ৩, ৯, ১, ৫",
      options: ["৭, ৩, ৯, ১, ৫", "৩, ৭, ৯, ৫, ১", "৯, ৫, ৭, ৩, ১", "১, ৩, ৫, ৭, ৯"],
      correct: "৭, ৩, ৯, ১, ৫",
      points: 20
    }
  ];

  // Timer effect
  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [gameActive, timeLeft]);

  // Check if game should end
  useEffect(() => {
    if (timeLeft === 0 && gameActive) {
      setGameActive(false);
      setShowResult(true);
      setGameHistory(prev => [...prev, { score, date: new Date().toLocaleDateString() }]);
    }
  }, [timeLeft, gameActive, score]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setShowResult(false);
    setCurrentQuestion(allGames[0]);
    setSelectedAnswer(null);
  };

  const generateNewQuestion = () => {
    // Simple sequential question selection
    const currentIndex = allGames.findIndex(game => game.id === (currentQuestion?.id || 0));
    const nextIndex = (currentIndex + 1) % allGames.length;
    setCurrentQuestion(allGames[nextIndex]);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answer) => {
    if (!gameActive) return;
    
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correct) {
      setScore(prev => prev + currentQuestion.points);
    }
    
    setTimeout(() => {
      if (timeLeft > 0) {
        generateNewQuestion();
      }
    }, 1000);
  };

  const resetGame = () => {
    setGameActive(false);
    setShowResult(false);
    setScore(0);
    setTimeLeft(30);
    setCurrentQuestion(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            খেলার সুযোগ
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            মজার খেলার মাধ্যমে জ্ঞান বাড়ান এবং পুরস্কার অর্জন করুন! 
            গণিত, ভাষা এবং স্মৃতি খেলায় অংশগ্রহণ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Game Status */}
              <div className="flex justify-between items-center mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{score}</div>
                  <div className="text-gray-600">পয়েন্ট</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{timeLeft}সে</div>
                  <div className="text-gray-600">সময় বাকি</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {currentQuestion ? currentQuestion.id : '-'}
                  </div>
                  <div className="text-gray-600">প্রশ্ন</div>
                </div>
              </div>

              {/* Game Controls */}
              <div className="text-center mb-8">
                {!gameActive && !showResult && (
                  <button
                    onClick={startGame}
                    className="bg-linear-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    খেলা শুরু করুন
                  </button>
                )}
                
                {gameActive && (
                  <div className="text-lg font-semibold text-gray-700">
                    খেলা চলছে...
                  </div>
                )}
                
                {showResult && (
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-4">
                      খেলা শেষ!
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-6">
                      আপনার স্কোর: {score} পয়েন্ট
                    </div>
                    <div className="flex space-x-4 justify-center">
                      <button
                        onClick={startGame}
                        className="bg-linear-to-r from-green-500 to-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                      >
                        আবার খেলুন
                      </button>
                      <button
                        onClick={resetGame}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                      >
                        বাতিল করুন
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Current Question */}
              {gameActive && currentQuestion && (
                <div className="mb-8">
                  <div className="bg-linear-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {currentQuestion.type || "প্রশ্ন"}:
                    </h3>
                    <p className="text-xl">
                      {currentQuestion.question || currentQuestion.word || currentQuestion.sequence}
                    </p>
                    {currentQuestion.points && (
                      <div className="text-sm opacity-90 mt-2">
                        {currentQuestion.points} পয়েন্ট জন্য
                      </div>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(option)}
                        disabled={selectedAnswer !== null}
                        className={`p-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                          selectedAnswer === null
                            ? 'bg-white hover:bg-gray-100 border-2 border-gray-200 hover:border-green-500'
                            : selectedAnswer === option
                              ? option === currentQuestion.correct
                                ? 'bg-green-500 text-white border-2 border-green-600'
                                : 'bg-red-500 text-white border-2 border-red-600'
                              : option === currentQuestion.correct
                                ? 'bg-green-500 text-white border-2 border-green-600'
                                : 'bg-gray-200 text-gray-500 border-2 border-gray-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Game Rules */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">খেলার নিয়ম</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>৩০ সেকেন্ডের মধ্যে যত বেশি প্রশ্নের উত্তর দিতে পারবেন</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>সঠিক উত্তরে পয়েন্ট পাবেন</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>ভুল উত্তরে পয়েন্ট কাটা যাবে না</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>সময় শেষে মোট পয়েন্ট দেখাবে</span>
                </li>
              </ul>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">আপনার খেলার ইতিহাস</h3>
              {gameHistory.length > 0 ? (
                <div className="space-y-2">
                  {gameHistory.slice(-5).reverse().map((game, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                      <span className="font-medium">খেলা {gameHistory.length - index}</span>
                      <span className="text-green-600 font-bold">{game.score} পয়েন্ট</span>
                      <span className="text-gray-500 text-sm">{game.date}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">এখনও কোনো খেলা খেলা হয়নি</p>
              )}
            </div>

            {/* Game Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">খেলার ধরন</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">গণিতের প্রশ্ন</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">ভাষা খেলা</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">স্মৃতি খেলা</span>
                </div>
              </div>
            </div>

            {/* Rewards */}
            <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">পুরস্কার সিস্টেম</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>০-৫০ পয়েন্ট:</span>
                  <span className="text-gray-600">প্রাথমিক পর্যায়</span>
                </div>
                <div className="flex justify-between">
                  <span>৫১-১০০ পয়েন্ট:</span>
                  <span className="text-blue-600 font-medium">দক্ষ খেলোয়াড়</span>
                </div>
                <div className="flex justify-between">
                  <span>১০১-১৫০ পয়েন্ট:</span>
                  <span className="text-green-600 font-bold">মাস্টার খেলোয়াড়</span>
                </div>
                <div className="flex justify-between">
                  <span>১৫১+ পয়েন্ট:</span>
                  <span className="text-purple-600 font-bold">জেনিয়াস!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">আপনার অর্জন</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "প্রথম খেলা", unlocked: score >= 0, icon: "🎯" },
              { name: "৫০+ পয়েন্ট", unlocked: score >= 50, icon: "⭐" },
              { name: "১০০+ পয়েন্ট", unlocked: score >= 100, icon: "🏆" },
              { name: "১৫০+ পয়েন্ট", unlocked: score >= 150, icon: "👑" },
              { name: "দ্রুত খেলোয়াড়", unlocked: timeLeft > 20, icon: "⚡" },
              { name: "সঠিকতা মাস্টার", unlocked: score > 0, icon: "🎯" }
            ].map((badge, index) => (
              <div 
                key={index} 
                className={`text-center p-4 rounded-xl border-2 ${
                  badge.unlocked 
                    ? 'bg-green-50 border-green-500' 
                    : 'bg-gray-100 border-gray-300 opacity-50'
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className={`font-medium ${badge.unlocked ? 'text-gray-900' : 'text-gray-500'}`}>
                  {badge.name}
                </div>
                <div className={`text-sm ${badge.unlocked ? 'text-green-600' : 'text-gray-400'}`}>
                  {badge.unlocked ? 'আনলক করা হয়েছে' : 'আনলক করতে হবে'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOpportunity;