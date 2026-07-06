
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // يدعم الوضع الليلي
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'], // الخط الافتراضي للعربية
      },
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        accent: {
          DEFAULT: '#3B82F6',
          light: '#DBEAFE',
          hover: '#2563EB',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
