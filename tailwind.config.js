module.exports = {
  purge: [],
  theme: {
    extend: {},
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      ml: '920px',
      lg: '1024px',
      xl: '1280px',
      
    },
    zIndex: {
      '-10': '-10',
    }
  }, 
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
