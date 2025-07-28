// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        secondary: '#34495E',
        third: '#7F8C8D',
        fourth: '#BDC3C7',
        textColor: '#ECF0F1',
      },
      screens: {
        'max-xs': {'raw': '(max-width: 392px)'}

      },

    },
  },
  plugins: [],
}