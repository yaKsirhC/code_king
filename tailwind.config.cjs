/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'lred': "#D90D32",
				'lblue': "#393265",
				'ldarkblue': "#2B2551"
			}
		},
	},
	plugins: [],
}
