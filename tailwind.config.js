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
    // screens: {
    //   sm: { min: "640px", max: "767px" },
    //   md: { min: "768px", max: "1023px" },
    //   lg: { min: "1024px", max: "1279px" },
    //   xl: { min: "1280px", },
    // },
    extend: {
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
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        accent: 'var(--color-bg-accent)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      colors: {
        primary: 'var(--color-text-accent)',
        secondary: 'var(--color-text-accent)',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--accents-2)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      scale: {
        120: '1.2',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: 'var(--color-text-accent)',
        secondary: 'var(--color-text-accent)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    // container: false
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
