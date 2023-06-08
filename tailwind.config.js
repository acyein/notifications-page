/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        pink: 'hsl(1, 90%, 64%)',
        navy: 'hsl(219, 85%, 26%)',
        blue: {
          '900': 'hsl(224, 21%, 14%)'
        },
        bluegray: {
          '100': 'hsl(210, 60%, 98%)',
          '200': 'hsl(211, 68%, 94%)',
          '300': 'hsl(205, 33%, 90%)',
          '400': 'hsl(219, 14%, 63%)',
          '500': 'hsl(219, 12%, 42%)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
