/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)"],
        text: ["var(--font-text)"]
      },
      colors: {
        primaryColor: '#4D4D4D',
        secondColor: '#8A702E',
        titleColor: '#0F241D',
        textColor: '#767676',
        backgroundColor: '#F9F9F9',
        bacgroundColorFooter: '#DCDCDC',
        hoverButton: '#616161',
      },
    },

    backgroundImage: {
      desktop: "url('../../public/images/home-desktop.png')",
      gradientOne: "linear-gradient(90deg, #4D4D4D 0%, rgba(72, 123, 114, 0) 100%)",
      gradientTwo: "linear-gradient(270deg, #4D4D4D 0%, rgba(72, 123, 114, 0) 100%)"
    },

    screens: {

      'xs': { max: "639px" },

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'sm-max': { max: "767px" },

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md-max': { max: "1023px" },

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg-max': { max: "1279px" },

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
