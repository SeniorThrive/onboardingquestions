/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#3762D4', // Updated primary blue
          700: '#2563EB',
          800: '#204D94',
          900: '#172554',
        },
        purple: {
          50: '#FAF5FF',
          500: '#AE7CEC', // Added for gradient
        },
        green: {
          500: '#22C55E',
          600: '#16A34A',
        },
        amber: {
          500: '#F59E0B',
          600: '#D97706',
        },
        red: {
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'confetti': 'confetti 1s ease-out forwards',
      },
      keyframes: {
        confetti: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};