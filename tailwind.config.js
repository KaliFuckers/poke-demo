/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        "likeButton": {
          "0%": {
            "background-size": "0%"
          },
          "100%": {
            
          }
        }
      },
      animation: {
        "heartBeat": "heart-hover-bg 0.2s ease both"
      }
    },
  },
  plugins: [],
}
