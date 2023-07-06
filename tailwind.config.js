/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueish: {
          500: '#2E8A99',
          600: '#142C66',
          700: '#0a1d3d',
          800: '#0E2954',
        },
      }
    },
  },
  plugins: [],
}

