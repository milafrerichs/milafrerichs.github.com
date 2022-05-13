module.exports = {
  future: {},
  purge: [],
  theme: {
    colors: {
      'cv' : '#2b4c7e',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },

    },
    container: {
      center: true,
    },
    screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        'readable': '65ch',
      }
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover'],
      flexDirection: ['responsive', 'group-hover'],
      flexWrap: ['responsive', 'group-hover'],
      alignItems: ['responsive', 'group-hover'],
      alignSelf: ['responsive', 'group-hover'],
      justifyContent: ['responsive', 'group-hover'],
      alignContent: ['responsive', 'group-hover'],
      flex: ['responsive', 'group-hover'],
      flexGrow: ['responsive', 'group-hover'],
      flexShrink: ['responsive', 'group-hover'],
    }
  },
  plugins: [
     require('@tailwindcss/typography'),
  ],
}
/*

105a106
>   'cv' : '#2b4c7e',
  511a513
>     'readable': '65ch',
  547a550
>     '128': '32rem',
  622a626
>     'readable': '65ch',
  901,902c905,906
<     display: ['responsive'],
  <     flexbox: ['responsive'],
  ---
>     display: ['responsive', 'group-hover'],
  >     flexbox: ['responsive', 'group-hover'],
  957,958c961,963
  <     require('./plugins/container')({
    <       // center: true,
    // ---
    // >     require('tailwindcss-spaced-items')(),
    // >     require('tailwindcss/plugins/container')({
    // >       center: true,
    // })
  })

  */
