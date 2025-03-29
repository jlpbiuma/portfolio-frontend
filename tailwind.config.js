const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'grid-black': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0V20M0 1H20' stroke='black' stroke-opacity='0.1'/%3E%3C/svg%3E\")",
        'grid-white': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0V20M0 1H20' stroke='white' stroke-opacity='0.1'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse': 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  // ... rest of your config
} 