/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require('tw-colors');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    }
  },
  plugins: [
    createThemes({
      light: {
        primary: 'white',
        secondary: '#F3F4F6',
        foreground: '#000',
        'foreground-secondary': '#9ca3af'
      },
      dark: {
        primary: '#142C66',
        secondary: '#0a1d3d',
        foreground: 'white',
        'foreground-secondary': '#d1d5db'
      },
      // -- issue with hsl conversion
      // sepia: {
      //   primary: '#884A39',
      //   secondary: '#653B12',
      //   foreground: '#5E4636',
      //   'foreground-secondary': '#5E4636'
      // },
      forest: {
        'primary': '#016A70',
        'secondary': '#014c4f',
        'foreground': '#D0E7D2',
        'foreground-secondary': '#d1d5db'
      },
      pinky: {
        'primary': '#FF597B',
        'secondary': '#FF8E9E',
        'foreground': '#1f2937',
        'foreground-secondary': '#ffd6e6'
      },
      halloween: {
        'primary': '#662549',
        'secondary': '#451952',
        'foreground': '#F39F5A',
        'foreground-secondary': '#AE445A'
      },
    })
  ]
};
