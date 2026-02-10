/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'padang-red': '#DC2626',
        'padang-orange': '#F97316',
        'padang-brown': '#78350F',
        'padang-gold': '#FBBF24',
        'padang-cream': '#FFFBEB',
        'padang-text': '#292524',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
