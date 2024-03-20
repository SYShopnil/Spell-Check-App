/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.stories.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: '-1px 2px 11px 0px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1172px',
        '2xl': '1352px',
        'max-md': { raw: '(max-width: 991px)' },
        'max-sm': { raw: '(max-width: 767px)' },
      },
      colors: {
        primary: '#1FA45B',
      },
      backgroundImage: {
        primaryGradient:
          'linear-gradient(90deg, #90E900 0.33%, #EFE600 100.33%)',
      },
      fontSize: {
        base: ['0.875rem', { lineHeight: '150%', fontWeight: 400 }],
        base_2: ['1rem', { lineHeight: '150%', fontWeight: 400 }],
        md: ['1.25rem', { lineHeight: '130%', fontWeight: 500 }],
        lg: ['1.75rem', { lineHeight: '130%', fontWeight: 500 }],
        xl: ['2.5rem', { lineHeight: '120%', fontWeight: 500 }],
        '2xl': ['4rem', { lineHeight: '110%', fontWeight: 600 }],
        '3xl': ['6rem', { lineHeight: '110%', fontWeight: 600 }],
      },
      keyframes: {},
      animation: {},
      borderRadius: {
        none: '0',
        primary: '1.5rem',
        secondary: '2.5 rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
