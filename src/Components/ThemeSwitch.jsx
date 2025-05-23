// src/Components/ThemeSwitch.jsx
import React from 'react';
import useStore from '../Store/index.js';

const ThemeSwitch = () => {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-sm"
    >
      {theme === 'dark' ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
    </button>
  );
};

export default ThemeSwitch;
