import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state from localStorage during initial render
    const savedTheme = localStorage.getItem('theme');
    return savedTheme !== 'light'; // Default to dark mode
  });

  useEffect(() => {
    // Apply theme class to document and save to localStorage
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  function toggleTheme() {
    setIsDarkMode(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
