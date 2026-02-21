/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',     
        secondary: '#FF6B35',   
        dark: '#0F172A',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      // ───────────────────────────────────────────────
      // Animations used in the hero background + others
      // ───────────────────────────────────────────────
      keyframes: {
        grow: {
          '0%': { height: '0px', opacity: '0' },
          '100%': { height: '3rem', opacity: '1' },
        },

        // Slow background panning (used in hero)
        slowPan: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },

        // Subtle gradient movement overlay
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },

        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },

      animation: {
        grow: 'grow 0.6s ease-out forwards',

        // Hero background movement
        'slow-pan': 'slowPan 40s linear infinite',
        'gradient-shift': 'gradientShift 18s ease infinite',

        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-up-slow': 'fadeInUp 1.2s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
      },

      fontSize: {
        '7xl': ['5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['7.5rem', { lineHeight: '1' }],
      },

      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
      },

      // Softer shadows for cards / images
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.12)',
        'glow-indigo': '0 0 40px -5px rgba(99, 102, 241, 0.4)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')]
}