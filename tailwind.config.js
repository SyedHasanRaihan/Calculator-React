/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '1920px',
      // => @media (min-width: 1024px) { ... }

      
    }
  },
  plugins: [],
}
