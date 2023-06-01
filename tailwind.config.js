/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/src/assets/images/pattern-bg-mobile.png')",
        'hero-desktop': "url('/src/assets/images/pattern-bg-desktop.png')",
      },
      boxShadow: {
        'ip': '0px 50px 50px -25px rgba(0, 0, 0, 0.0983665)',
      }
    }
  },
  plugins: []
}
