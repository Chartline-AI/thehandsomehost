/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy:       '#0D1F3C',
        'navy-mid': '#162B52',
        'navy-light': '#1E3A6E',
        ivory:      '#F5F0E8',
        'ivory-warm': '#EDE5D6',
        coral:      '#E05C4B',
        brass:      '#C9A84C',
        'brass-lt': '#F0EBE2',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
