// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita o dark mode baseado em classes
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-gray': '#F5F5F7',
        'apple-blue': '#0071E3',
        'apple-dark': '#1D1D1F',
        'dark-bg': '#1A1A1A',
        'dark-card': '#2A2A2A',
        'dark-text': '#E5E5E5',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};