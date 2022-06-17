/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{tsx, jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFE600',
        secondary: '#3483FA',
        secondaryHover: '#2d74df',
        gray: {
          150: '#EEEEEE',
          450: '#999999',
          550: '#666666',
          750: '#333333',
        },
      },
      fontSize: {
        '2.5xl': '28px',
        '4.5xl': '46px',
      },
      borderRadius: {
        xs: '4px',
      },
      minWidth: {
        45: '180px',
        '2.5xl': '680px',
      },
      minHeight: {
        45: '180px',
        '2.5xl': '680px',
      },
      maxWidth: {
        45: '180px',
        '2.5xl': '680px',
      },
      maxHeight: {
        45: '180px',
        '2.5xl': '680px',
      },
    },
  },
  plugins: [],
};
