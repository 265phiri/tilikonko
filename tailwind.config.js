/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'red': 'red',
        'brandBlack': '#333333',
        'brandGrey': '#c1c1c1',
        'offBlack': '#1b0a31',
        'accent': '#9747ff',
        'fadedAccent': '#a393eb',
        'background': '#FAF9FF',
        'fallBack': '#338ef5'
   
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      }, keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      }    
      ,fontFamily: {
        DM: ['DM Sans', 'sans-serif'],
        EricaOne: ['Erica One', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

