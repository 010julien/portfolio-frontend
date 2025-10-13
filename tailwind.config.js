/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1b9abe',
          dark: '#139cbc',
          light: '#9fd6e2',
          lighter: '#e9f7fe',
        },
        accent: '#139cbc',
        // Keep wax colors for backward compatibility, but map to new palette
        wax: {
          yellow: '#9fd6e2',
          orange: '#1b9abe',
          red: '#139cbc',
          blue: '#1b9abe',
          green: '#139cbc',
          purple: '#139cbc',
        },
      },
      backgroundImage: {
        'wax-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%231b9abe' fill-opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
