export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['BebasNeue', 'Impact', 'sans-serif'],
        sans: ['OpenSans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        empanada: {
          cream: '#fff7e6',
          gold: '#f4a62a',
          amber: '#d97706',
          salsa: '#d9342b',
          brown: '#5a2e14',
        },
      },
      boxShadow: {
        warm: '0 24px 70px rgba(90, 46, 20, 0.18)',
      },
    },
  },
  plugins: [],
};
