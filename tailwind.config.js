export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans all JS, JSX, TS, TSX files in the src directory
    './public/index.html', // Scans the public/index.html file
  ],
  theme: {
    extend: {
      colors:{
         'custom-color': '#D29A5A'
      }
    },
  },
  plugins: [],
};