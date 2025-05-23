// src/Store/index.js
import { create } from 'zustand';

const useStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  setTheme: (theme) => {
    set({ theme });

    // Apply or remove "dark" class on <html>
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  },
}));

export default useStore;
