/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Width-based breakpoints (default behavior)
        '2xsm': '300px',
        // 'xsm': '430px',
        'sm': '675px',
        'md': '810px',
        'lg': '1024px',
        'xl': '1325px',
        '2xl': '1600px',
        // Height-based breakpoints (custom)
        'h-2xsm': {'raw': '(min-height: 300px)'},
        'h-xsm': {'raw': '(min-height: 430px)'},
        'h-sm': {'raw': '(min-height: 675px)'},
        'h-md': {'raw': '(min-height: 810px)'},
        'h-lg': {'raw': '(min-height: 1024px)'},
        'h-xl': {'raw': '(min-height: 1325px)'},
        'h-2xl': {'raw': '(min-height: 1600px)'},
      },
      fontFamily: {
        'Parisienne': ["Parisienne", "cursive"],
        'AveriaLibre': ["Averia Libre", "system-ui"],
        'Roboto': ["Roboto", "sans-serif"],
        'DancingScript': ["Dancing Script", "cursive"],
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(2)' },
          '50%': { transform: 'scale(1.5)' },
          '75%': { transform: 'scale(2)' },
          '100%': { transform: 'scale(1)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%, 80%': { transform: 'rotate(-10deg)' },
          '40%, 60%': { transform: 'rotate(10deg)' },
          '0%, 20%, 40%, 60%, 80%, 100%': { transformOrigin: 'bottom right' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        translateLeftToRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px) scale(1.3)' },
        },
        translateRightToLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px) scale(1.3)' },
        },
        translateDownToUp: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'scale(1.5) translateY(10px) translateX(-4px)' },
          '100%': { transform: 'scale(1) translateY(0) translateX(0)' },
        },
        translateUpToDown: {
          '0%': { transform: 'scale(1) translateY(0) translateX(0)' },
          '50%': { transform: 'scale(1.5) translateY(-10px) translateX(-4px)' },
          '100%': { transform: 'scale(1) translateY(0) translateX(0)' },
        },
      },
      animation: {
        'heartbeat': 'heartbeat 1s infinite',
        'waving-hand': 'wave 1.5s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'left-to-right': 'translateLeftToRight 1.5s ease-in-out infinite',
        'right-to-left': 'translateRightToLeft 1.5s ease-in-out infinite',
        'bounce-down-to-up':'translateDownToUp 1.5s ease-in-out infinite',
        'bounce-up-to-down':'translateUpToDown 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    
  ],
}