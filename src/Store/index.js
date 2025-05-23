// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  theme: typeof window !== 'undefined' ? localStorage.getItem('theme') ?? 'light' : 'light',
  setTheme: (value) => set({ theme: value }),
}));

export default useStore;
