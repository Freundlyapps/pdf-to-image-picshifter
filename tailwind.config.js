/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#30D5C8',
        secondary: '#FFA500',
        background: '#fff8f0',
        text: '#2b4162',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #30D5C8, #FFA500)',
      }
    },
  },
  plugins: [],
}
