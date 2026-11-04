/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          gold: "#B99470",
          goldLight: "#D4B999",
          goldDark: "#8C6A48",
          goldHover: "#A8835E",
          plum: "#883563",
          plumDark: "#5C1E40",
          plumLight: "#9E4A78",
          maroon: "#6B1D2F",
          dark: "#141110",
          charcoal: "#1F1A18",
          sand: "#F5F0E8",
          cream: "#FAF8F5",
          border: "#E8DFD3",
          muted: "#766C66",
          spice: "#D96A27",
          mint: "#1E7246",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "var(--font-gilda)", "Cinzel", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "Cinzel", "var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse-subtle': 'pulseSubtle 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
