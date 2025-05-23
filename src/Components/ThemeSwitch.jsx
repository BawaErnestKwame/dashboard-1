// ThemeSwitch.jsx
import React, { useState } from 'react';
import useStore from '../Store/index.js'; // ✅ Import your custom Zustand store

const ThemeSwitch = () => {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);
  const [isDarkMode, setIsDarkmode] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkmode(!isDarkMode);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`switch ${isDarkMode ? "light" : "dark"}`} onClick={toggleTheme}>
        <div className={`ball ${isDarkMode ? "dark" : "light"}`}>
            <div className={`ball ${isDarkMode ? "dark" : "light"}`}></div>
        </div>
      
    </div>
  );
};

export default ThemeSwitch;
