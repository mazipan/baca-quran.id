/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require('tw-colors');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				blueish: {
					500: '#2E8A99',
					600: '#142C66',
					700: '#0E2954',
					800: '#0a1d3d',
					900: '#07162d'
				}
			}
		}
	},
	plugins: [
		createThemes({
			light: {
				primary: 'white',
				secondary: '#F3F4F6',
				text: 'black'
			},
			dark: {
				primary: '#142C66',
				secondary: '#0a1d3d',
				text: 'white'
			},
			sepia: {
				primary: '#704214',
				secondary: '#653B12',
				text: '#5E4636'
			}
		})
	]
};
