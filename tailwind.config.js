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
        },
        "ripple": {
          "0%": {
            "width": "0px",
            "height": "0px",
            "opacity": 0.5
          },
          "100%": {
            "width": "500px",
            "height": "500px",
            "opacity": 0
          }
        }
      },
      animation: {
        "heartBeat": "heart-hover-bg 0.2s ease both",
        "ripple-effect": "ripple 0.5s ease forwards"
      }
    },
  },
  plugins: [],
}
