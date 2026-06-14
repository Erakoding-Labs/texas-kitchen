import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1280px'
			}
		},
		extend: {
			colors: {
				// Warm artisan bakery palette
				cream: {
					DEFAULT: '#FBF6EE',
					50: '#FEFCF8',
					100: '#FBF6EE',
					200: '#F4E9D7'
				},
				sand: {
					DEFAULT: '#E8D5BC',
					100: '#F1E4D0',
					200: '#E8D5BC',
					300: '#D9BE9B'
				},
				clay: {
					DEFAULT: '#B07D52',
					100: '#C99B6E',
					200: '#B07D52',
					300: '#8A5E38'
				},
				espresso: {
					DEFAULT: '#3D2B1F',
					100: '#5A4334',
					200: '#3D2B1F',
					300: '#2A1D14'
				},
				gold: {
					DEFAULT: '#C9A227',
					100: '#E0BE52',
					200: '#C9A227',
					300: '#A07F18'
				},
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				border: 'var(--border)'
			},
			fontFamily: {
				serif: ['Cormorant Garamond', 'Georgia', 'serif'],
				display: ['Playfair Display', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			borderRadius: {
				lg: '1rem',
				xl: '1.5rem',
				'2xl': '2rem'
			},
			boxShadow: {
				soft: '0 10px 40px -12px rgba(61, 43, 31, 0.18)',
				lift: '0 24px 60px -20px rgba(61, 43, 31, 0.28)'
			},
			keyframes: {
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-12px)' }
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				}
			},
			animation: {
				'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'fade-in': 'fade-in 0.8s ease forwards',
				float: 'float 6s ease-in-out infinite',
				marquee: 'marquee 32s linear infinite'
			}
		}
	},
	plugins: [animate]
};

export default config;
