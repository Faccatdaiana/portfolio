/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          300: '#FF9CC4',
          400: '#FF85B6',
          500: '#FF69B4', // Main pink
          600: '#FF4DA5',
          700: '#FF2C97',
        },
        black: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
          darker: '#0A0A0A',
        },
        gray: {
          800: '#1F1F1F',
          900: '#141414',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'pink': '0 4px 14px 0 rgba(255, 105, 180, 0.25)',
      },
    },
  },
  plugins: [],
};