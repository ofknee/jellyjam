export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Quicksand', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				display: ['Outfit', 'sans-serif'],
			},
			colors: {
				'jelly-pink': '#ff71ce',
				'jelly-blue': '#01cdfe',
			},
			backdropBlur: {
				'xl': '16px',
			},
			borderRadius: {
				'3xl': '24px',
				'2xl': '20px',
			},
		},
	},
	plugins: [],
}