/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {

      screens: {
        // 2xl: '1450px',

        'sm': '640px',
        'md': '805px',
        'lg': '863px',
        'xl': '1024px',
        '2xl': '1450px',
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      colors: {
        dark: '#333',
        pink: '#ef3340',
        green: '#006241',
        purple: '#B37697',
        crimson: '#76232f',
        darkGreen: '#1e3932',
        darkGray: 'rgba(0, 0, 0, .77)'
      }
    },
  },
  plugins: [],
}