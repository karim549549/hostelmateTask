import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#B9FF66',
        'dark-blue': '#191A23',
        'light-grey': '#F3F3F3',
        'footer-dark': '#292A32',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
      },
      fontSize: {
        h1: ['60px', { lineHeight: '1.1', fontWeight: '700' }],
        h2: ['40px', { lineHeight: '1.15', fontWeight: '600' }],
        h3: ['30px', { fontWeight: '600' }],
        base: ['18px', { lineHeight: '28px' }],
        lg: ['20px', { lineHeight: '30px' }],
        sm: ['16px'],
        xs: ['14px'],
      },
      borderRadius: {
        xl: '14px',
        '2xl': '45px',
        '3xl': '48px',
        'cta-xl': '16px',
        card: '7px',
      },
      spacing: {
        container: '100px',
        ctaX: '60px',
        ctaY: '56px',
        inputX: '35px',
        inputY: '22px',
        btnX: '35px',
        btnY: '20px',
      },
    },
  },
  plugins: [],
};

export default config;
