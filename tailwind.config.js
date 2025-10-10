/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          600: '#16a34a',
          700: '#15803d',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f58710',
          600: '#f45b11',
          700: '#ea580c',
        }
      }
    },
  },
  plugins: [],
}
