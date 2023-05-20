/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter']
      },
      colors: {
        wpu: '#bada55',
        kopi: '#c0ffee',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle : 'goyang 1s linear infinite',
        wandering: 'jalan 2s linear infinite',
      },
      keyframes: {
        goyang: {
          '0%,100%' : { transform: 'rotate(-3deg)' },
          '50%' : { transform: 'rotate(3deg)' },
        },
        jalan: {
          '0%,100%' : { transform: 'translateY(-34px)'},
          '50%' : { transform: 'translateY(0px)'},
  
        }
      }
    },
  },
  plugins: [],
}

