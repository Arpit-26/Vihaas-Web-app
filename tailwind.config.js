/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blink: 'blink 2s infinite', // Define the blink animation
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #6D28D9, #8B5CF6)', // Vibrant gradient colors
      },
      textColor: {
        gradient: 'transparent',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities(
        {
          '.gradient-text-purple': {
            background: theme('backgroundImage.gradient-text'),
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          },
        },
        ['responsive', 'hover'],
      );
    },
  ],
};
