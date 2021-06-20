module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif'],
    },
    flexGrow: {
      0: 0,
      DEFAULT: 1,
      1: 1,
      2: 2,
      3: 3,
      '4:': 4,
    },
    extend: {
      blur: {
        '4xl': '200px'
      },
      maxWidth: {
        '8xl': '1920px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          xl: '0rem',
        },
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        accent: 'var(--bg-accent)',
      },
      textColor: {
        accent: 'var(--text-accent)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      colors: {
        primary: 'var(--text-accent)',
        secondary: 'var(--text-accent)',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        bgPrimary: 'var(--bg-primary)',
        bgSecondary: 'var(--bg-secondary)',
        textSecondary: 'var(--text-secondary)',
        accent: 'var(--bg-accent)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '900px',
          },
          '@screen 2xl': {
            maxWidth: '1400px',
          },
        },
      })
    },
  ],
}
