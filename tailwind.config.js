/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const MONOCHROME_MODE = false;

const palette = [colors.neutral, colors.sky, colors.amber];  // default

// const palette = [colors.slate, colors.sky, colors.teal];  // a little colder
// const palette = [colors.slate, colors.orange, colors.yellow];  // halloween
// const palette = [colors.slate, colors.emerald, colors.rose];  // christmas
// const palette = [colors.slate, colors.blue, colors.red];  // 4th of july


const primary_base_color = palette[0];
const secondary_base_color = MONOCHROME_MODE ? palette[0] : palette[1];  // sky, neutral, yellow, red
const tertiary_base_color = MONOCHROME_MODE ? palette[0] : palette[2];  // teal, neutral

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
          DEFAULT: primary_base_color['400'],
          light: primary_base_color['300'],
          '50': primary_base_color['50'],
          '100': primary_base_color['100'],
          '200': primary_base_color['200'],
          '300': primary_base_color['300'],
          '400': primary_base_color['400'],
          '500': primary_base_color['500'],
          '600': primary_base_color['600'],
          '700': primary_base_color['700'],
          '800': primary_base_color['800'],
          '900': primary_base_color['900'],
          '950': primary_base_color['950'],
        },
        secondary: {
          dark: secondary_base_color['950'],
          DEFAULT: secondary_base_color['400'],
          light: secondary_base_color['500'],
          '50': secondary_base_color['50'],
          '100': secondary_base_color['100'],
          '200': secondary_base_color['200'],
          '300': secondary_base_color['300'],
          '400': secondary_base_color['400'],
          '500': secondary_base_color['500'],
          '600': secondary_base_color['600'],
          '700': secondary_base_color['700'],
          '800': secondary_base_color['800'],
          '900': secondary_base_color['900'],
          '950': secondary_base_color['950'],
        },
        tertiary: {
          dark: tertiary_base_color['950'],
          DEFAULT: tertiary_base_color['400'],
          light: tertiary_base_color['500'],
          '50': tertiary_base_color['50'],
          '100': tertiary_base_color['100'],
          '200': tertiary_base_color['200'],
          '300': tertiary_base_color['300'],
          '400': tertiary_base_color['400'],
          '500': tertiary_base_color['500'],
          '600': tertiary_base_color['600'],
          '700': tertiary_base_color['700'],
          '800': tertiary_base_color['800'],
          '900': tertiary_base_color['900'],
          '950': tertiary_base_color['950'],
        },
        neutral: {
          // Add definitions to exising color
          dark: colors.neutral['950'],
          DEFAULT: colors.neutral['400'],
          light: colors.neutral['300'],
        }
      },
      screens: {
        xs: "300px",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/spaceWallpaper.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
