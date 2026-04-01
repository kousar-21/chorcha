import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../Shared/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
      }`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun size={20} className="transition-transform hover:rotate-45" />
      ) : (
        <Moon size={20} className="transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
