/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./assets/**/*.{js,jsx,ts,tsx}"

  ],
  theme: {
    extend: {
      colors:{
        'textInput': '#DFE3E3',
        'textPrincipal':'#3111F3'
      },
      fontSize:{
       'subtitle':'16px',
       
      }
    },
  },
  plugins: [],
}

