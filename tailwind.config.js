/** @type {import('tailwindcss').Config} */
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
				primary: 'steelblue'
			},
			dark: {
				primary: 'turquoise'
			},
			yellow: {
				primary: 'yellow'
			},
			sepia: {
				primary: '#704214'
			}
		})
	]
};
