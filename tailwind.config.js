/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx,mdx}', './lib/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand: Arctic Cyan / Ice White / Slate Blue
        arctic: {
          DEFAULT: '#06B6D4',
          dark: '#0891B2',
          deep: '#0E7490',
          light: '#22D3EE',
          tint: '#ECFEFF',
        },
        ice: '#F8FAFC',
        slateblue: {
          DEFAULT: '#334155',
          light: '#475569',
          dark: '#1E293B',
        },
      },
      fontFamily: {
        // System stack only — zero webfont requests, instant text paint on 4G.
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.06), 0 10px 26px -14px rgba(15, 23, 42, 0.28)',
      },
      keyframes: {
        softping: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '75%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        softping: 'softping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
