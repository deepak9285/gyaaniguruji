/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    boxshadow:{
       extend: {
        '3xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '4xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],

}

