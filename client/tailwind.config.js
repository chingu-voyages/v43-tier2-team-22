/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        'h-nav': 'calc(100vh - 72px)',
        
      },
      fontFamily: {
        righteous: ['righteous', 'sans-serif'],
        inter: ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
