/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#050505',      // Negro profundo
        blood: '#8a0000',     // Rojo Carmesí
        gold: '#c5a059',      // Oro Antiguo
        bone: '#e0e0e0',      // Blanco Sucio
        surface: '#0a0a0a',   // Gris muy oscuro para tarjetas
      },
      fontFamily: {
        serif: ['"Cinzel Decorative"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Playfair Display SC"', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
