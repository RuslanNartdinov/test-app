import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
	  keyframes: {
		marquee: {
		  '0%': { transform: 'translateX(100%)' },
		  '100%': { transform: 'translateX(-100%)' },
		},
		'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
		'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
	  },
	  animation: {
		marquee: 'marquee 6s linear infinite',
		'fade-in': 'fade-in 0.5s ease-in-out',
		'fade-out': 'fade-out 0.5s ease-in-out',
	  },
	},
  },
  plugins: [
    require('tailwindcss-animations')
  ],
};
export default config;