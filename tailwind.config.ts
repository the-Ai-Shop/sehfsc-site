import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#228B22',
        'primary-dark': '#1a6b1a',
        'primary-deep': '#0f4010',
        'site-bg': '#f5f4f0',
        'site-border': '#d4d0c4',
        amber: '#b8770a',
        'amber-light': '#f5a623',
        fire: '#C8401A',
        'fire-dark': '#A33316',
        ember: '#E87B2C',
        ash: '#3D3730',
        sand: '#F2EDE4',
        stone: '#8C8278',
        safe: '#4A7C59',
        'safe-light': '#EAF2EC',
      },
      fontFamily: {
        serif: ['PT Serif', 'Georgia', 'serif'],
        sans: ['PT Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
