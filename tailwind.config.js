/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#000033',
        'primary-emerald': '#00FF7F',
        'primary-light': '#90EE90',
      },
      fontFamily: {
        sans: ['var(--font-source-sans)'],
        display: ['var(--font-lato)'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.6s ease-out forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}