/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 1.5s ease-in-out",
        "wiggle-small": "wiggle-small 0.5s ease-in-out infinite",
        "wiggle-large": "wiggle-large 1s ease-in-out infinite",
        "fade-in-wiggle-large": "fade-in 1.5s ease-in-out, wiggle-large 1s 0.5s ease-in-out infinite",
      },
    },
    colors: {
      "primary": "#1352BC",
      "primary-light": "#3577E9",
      "primary-dark": "#124392",
      "secondary": "#F06B0E",
      "secondary-light": "#F27E2C",
      "secondary-dark": "#E7680D",
      "black": "#000000",
      "white": "#FFFFFF",
    },
    fontFamily: {
      "title": ["Bebas Neue", "sans-serif"],
      "text": ["Montserrat", "sans-serif"],
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
