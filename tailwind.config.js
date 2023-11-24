/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#6C63FF',
        gray: '#4D4C59'
      },
      fontSize: {
        titleClamp: 'clamp(1.5rem, 1.2857rem + 1.0714vw, 2.25rem)',
        counterClamp: 'clamp(3rem, 2.5714rem + 2.1429vw, 4.5rem)'
      },
      animation: {
        appear: 'appear .5s backwards',
        disappear: 'disappear .3s forwards'
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' }
        },
        disappear: {
          '100%': { opacity: '0' }
        }
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '768px'},
        // => @media (max-width: 768px) { ... }
  
        'sm': {'max': '475px'},
        // => @media (max-width: 475px) { ... }
      }
    },
  },
  plugins: [],
}

