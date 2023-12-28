/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./app/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        gray: {
          text: {
            t1: '#808080',
            t2: '#7e8992',
            t3: '#5e6c77',
            t4: '#63707b',
          },
        },
      },
    },
  },
  plugins: [],
}
