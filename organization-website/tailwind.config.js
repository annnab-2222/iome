// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          primary: '#2563eb',
          background: '#ffffff',
          surface: '#f8fafc',
          text: '#1e293b',
          muted: '#64748b',
        },
        // Dark theme colors (Stellar-inspired)
        dark: {
          primary: '#3b82f6',
          background: '#0f172a',
          surface: '#1e293b',
          text: '#f8fafc',
          muted: '#94a3b8',
          accent: '#7c3aed',
        },
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}