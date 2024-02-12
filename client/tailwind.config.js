import formsPlugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-primary': "url('/src/assets/img/fondo-blog.jpg')",
      },
      colors: {
        'primary-blue': '#1F3668',
        'primary-red': '#DC143C',
        'primary-green': '#228B22',
        'secondary-blue': '#345088'
      },
    },
  },
  plugins: [
    formsPlugin,
  ],
}

