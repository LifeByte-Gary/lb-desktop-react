/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: {
      'red': {
        '50': '#ffebee',
        '100': '#ffcdd2',
        '200': '#ef9a9a',
        '300': '#e57373',
        '400': '#',
        '500': '#',
        '600': '#',
        '700': '#',
        '800': '#',
        '900': '#',
        'A100': '#',
        'A200': '#',
        'A300': '#',
      }
    },
    extend: {},
  },
  plugins: [],
}
