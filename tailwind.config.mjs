export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				display: ['Sniglet', 'cursive'],
				secondary: ['Montserrat', 'sans-serif'],
			},
			colors: {
				// New palette from design spec
				'glacier-blue': '#82A7B9',  // primary title
				'olive-green':  '#769966',  // secondary title
				'charcoal':     '#4A4A4A',  // body text
				'pearl-white':  '#F8FAFC',  // background
				'ice-blue':     '#C5E7F1',  // hover / glow
				'gray-blue':    '#A3C0D3',  // bg gradients
				'slate-blue':   '#5F7D95',  // footer / captions
				'link-water':   '#D9E4F5',  // borders / dividers
				// Backward-compat remapped to new palette
				'jelly-blue':   '#82A7B9',  // glacier blue
				'jelly-pink':   '#769966',  // olive green
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