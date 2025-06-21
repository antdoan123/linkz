/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // If using App Router
    "./pages/**/*.{js,ts,jsx,tsx}",   // If using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // For your components
  ],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem', // Full-width container for laptops (1280px)
      },
      colors: {
        // Optional: Custom branding colors if needed
        brand: {
          purple: '#6B5B95',
          blue: '#0077b6',
          pink: '#ff6f91',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // Default modern stack
      },
    },
  },
  plugins: [],
}
