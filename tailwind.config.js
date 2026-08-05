export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#1d4ed8',
          600: '#1e40af',
          900: '#0f172a'
        },
        accent: '#7c2d12'
      },
      boxShadow: {
        glass: '0 24px 120px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
