import { type Config } from "tailwindcss";

const config = {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			'plus-jakarta-sans': [
  				'Plus Jakarta Sans"',
  				'sans-serif'
  			],
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		fontWeight: {
  			regular: '400',
  			medium: '500',
  			semibold: '600',
  			bold: '700'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		colors: {
  			custom: {
  				black: '#000000',
  				white: '#FFFFFF',
  				strokeColor: '#F1F4FF',
  				gray: {
  					'50': '#F2F2F7',
  					'100': '#E8E8E8',
  					'200': '#DDDDDD',
  					'300': '#BBBBBB',
  					'400': '#A6A6A6',
  					'500': '#868686',
  					'600': '#727272',
  					'700': '#5E5E5E',
  					'800': '#4B4B4B',
  					'900': '#282828'
  				},
  				red: {
  					'50': '#FCDAE2',
  					'100': '#F9B5C5',
  					'200': '#F591A9',
  					'300': '#F26C8C',
  					'400': '#EF476F',
  					'500': '#C2395A',
  					'600': '#952B44',
  					'700': '#671D2F',
  					'800': '#511624',
  					'900': '#3A0F19'
  				},
  				yellow: {
  					'50': '#FFF6E0',
  					'100': '#FFEDC2',
  					'200': '#FFE3A3',
  					'300': '#FFDA85',
  					'400': '#FFD166',
  					'500': '#D8B052',
  					'600': '#B18F3D',
  					'700': '#8B6D29',
  					'800': '#775D1F',
  					'900': '#644C14'
  				},
  				orange: {
  					'50': '#FCE3E1',
  					'100': '#F9C6C2',
  					'200': '#F6AAA4',
  					'300': '#F38D85',
  					'400': '#F07167',
  					'500': '#C95C53',
  					'600': '#A1473F',
  					'700': '#7A312C',
  					'800': '#662722',
  					'900': '#521C18'
  				},
  				green: {
  					'50': '#CDF7EC',
  					'100': '#9BEFD9',
  					'200': '#6AE6C6',
  					'300': '#38DEB3',
  					'400': '#06D6A0',
  					'500': '#05AB80',
  					'600': '#048060',
  					'700': '#025640',
  					'800': '#024030',
  					'900': '#012B20'
  				},
  				turquoise: {
  					'50': '#B5EDF1',
  					'100': '#88DEE3',
  					'200': '#5ACED5',
  					'300': '#2DBFC7',
  					'400': '#00AFB9',
  					'500': '#008C94',
  					'600': '#00696F',
  					'700': '#00464A',
  					'800': '#003538',
  					'900': '#002325'
  				},
  				lightBlue: {
  					'50': '#D8E7FF',
  					'100': '#B0CFFF',
  					'200': '#89B6FF',
  					'300': '#619EFF',
  					'400': '#3A86FF',
  					'500': '#2E6DCF',
  					'600': '#2353A0',
  					'700': '#173A70',
  					'800': '#112D58',
  					'900': '#0C2041'
  				},
  				blue: {
  					'50': '#D5DAFA',
  					'100': '#AAB4F5',
  					'200': '#808FF1',
  					'300': '#5569EC',
  					'400': '#2B44E7',
  					'500': '#2236B9',
  					'600': '#1A298B',
  					'700': '#111B5C',
  					'800': '#0D1445',
  					'900': '#090E2E'
  				},
  				purple: {
  					'50': '#E6D7FB',
  					'100': '#CDAFF7',
  					'200': '#B588F4',
  					'300': '#9C60F0',
  					'400': '#8338EC',
  					'500': '#692DBD',
  					'600': '#4F228E',
  					'700': '#34165E',
  					'800': '#271147',
  					'900': '#1A0B2F'
  				}
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config;