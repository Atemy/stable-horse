/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'header-background': '#E3EAEE',
<<<<<<< HEAD
      },
      fontFamily: {
        display: 'Inter, ui-serif', 
=======
        'button-background': '#2C6A3F',
        'button-text':'#FFFFFF',
        'card-background': '#D9D9D9',
      },
      fontFamily: {
        display: 'Inter', 
>>>>>>> 628a36c (Сверстала карточку лошадей)
    },
    },
    screens: {
      // 390 — от 0 до 743px => isMobile
      // 744 — от 744px до 1023px => isSmallTablet
      // 1024 — от 1024px до 1279px => isTablet
      // 1440 — от 1280px до ∞ => isDesktop
      'sm': '390px',
      'md': '744px',
      'lg': '1024px',
      'xl': '1280px',
      
  },
  },
  plugins: [],
}


