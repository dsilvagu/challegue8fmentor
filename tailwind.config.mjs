/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'redhat': ['"Red Hat Display Variable"', 'sans-serif']
			}
		},
		colors: {
			'ppblue': 'hsl(225, 100%, 94%)',
			'pbblue': 'hsl(245, 75%, 52%)',
			'pvpblue': 'hsl(225, 100%, 98%)',
			'pdblue': 'hsl(224, 23%, 55%)',
			'pdblue': 'hsl(223, 47%, 23%)'
		}
	},
	plugins: [],
}
