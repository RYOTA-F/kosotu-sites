/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./app/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      screens: {
        sp: { max: '540px' },
        tb: { max: '960px' },
        pc: '960px',
      },
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
