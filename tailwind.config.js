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
      backgroundImage: {
        desktop: "url('/public/images/home-desktop.png)",
        tablet: "url('/public/images/home-teblet.png)",
        mobile: "url('/public/images/home-mobile.png)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    }
  },
  plugins: [],
};
