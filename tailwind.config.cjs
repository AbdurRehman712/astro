/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container:{
			center: true,
			screen: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1152px',
				'2xl': '1152px',
			}
		},
		extend: {
			fontSize: {
				'2xs': ['0.625rem', '0.75rem'], // 10px
				'3xs': ['0.5rem', '0.625rem'], // 8px
				'4xs': ['0.375rem', '0.5rem'], // 6px
				'5xs': ['0.25rem', '0.375rem'], // 4px
			  }
		},
	},
	plugins: [],
};
