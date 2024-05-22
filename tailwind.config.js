/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


const primary_base_color = colors.neutral;
const secondary_base_color = colors.sky;
const tertiary_base_color = colors.teal;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          dark: primary_base_color['950'],
          light: primary_base_color['200'],
        } ,
        secondary: {
          dark: secondary_base_color['950'],
          light: secondary_base_color['500'],
        } ,
        tertiary: {
          dark: tertiary_base_color['950'],
          light: tertiary_base_color['500'],
        } ,

        neutral: {
          dark: colors.neutral['950'],
          DEFAULT: colors.neutral['500'] ,
          light: colors.neutral['300']
        }
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/herobg2b.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
