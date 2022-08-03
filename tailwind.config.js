const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        karla: ['Karla', ...defaultTheme.fontFamily.sans],
        inconsolata: ['Inconsolata', ...defaultTheme.fontFamily.mono],
        'dm-sans': ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary': '#ecbf32',
        'discord': '#5865f2',
        'facebook': '#4267b2',
        'instagram': '#E1306C',
        'youtube': '#FF0000',

        // roles
        'admin': '#70ab77',
        'leadership': '#ff9600',
        'tester': '#992d22',
        'game-dev': '#516ef0',
        'senior-dev': '#516ef0',
        'lead-dev': '#ff0000',
        'pm': '#8b786b',
        'fm': '#206694',
      },
    },
  },
  plugins: [],
}
