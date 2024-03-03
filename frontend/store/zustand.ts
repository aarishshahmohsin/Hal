import {create} from 'zustand';

export const useLangStore = create((set) => ({
  language: 'en', // Default language is English
  setLanguage: (lang: any) => set({ language: lang }),
}));