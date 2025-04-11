// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        night: {
          bg: '#101015',          // Deep black-blue
          surface: '#18181e',     // Surface card
          card: '#1f1f27',        // Lighter panel
          text: '#e5e5e5',        // Soft white
          heading: '#ffffff',     // Pure white for titles
          border: '#2e2e38',
          accent: '#c084fc',      // Soft violet-lavender
          subtle: '#a78bfa',
          muted: '#8b8b99',
        },
      },
      backgroundImage: {
        'night-gradient': 'linear-gradient(to right, #1f1f27, #2e2e38)',
        'button-gradient': 'linear-gradient(to right, #8b5cf6, #c084fc)',
        'hover-button-gradient': 'linear-gradient(to right, #c084fc, #a78bfa)',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
        soft: '0 2px 10px rgba(0, 0, 0, 0.2)',
      },
      borderColor: {
        night: '#2e2e38',
      },
      textColor: {
        night: {
          DEFAULT: '#e5e5e5',
          heading: '#ffffff',
          accent: '#c084fc',
          muted: '#a3a3b3',
        },
      },
    },
  },
  plugins: [],
}
