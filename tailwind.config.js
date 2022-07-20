module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      archivo: ["Archivo", "sans-serif"],
      "bebas-neue": ["Bebas Neue", "sans-serif"],
    },
    container: {
      center: true,
    },
    fontSize: {
      xxs: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        "active-blue": "#0A93EC",
        orange: {
          100: "#FFE3D6",
          200: "#FFD5C2",
          300: "#FFBEA0",
          400: "#FFAB85",
          500: "#FF9D70",
        },
        green: {
          100: "#8EF5D5",
          200: "#7CF4CE",
          300: "#4befbc",
          400: "#31EDB1",
          500: "#14E1A0",
        },
        blue: {
          100: "#9CE7E5",
          200: "#8CE3E0",
          300: "#73ddda",
          400: "#5BD7D3",
          500: "#3ACFCA",
        },
        purple: {
          100: "#9091F4",
          200: "#7D7FF2",
          300: "#5d5fef",
          400: "#4548ED",
          500: "#3336EB",
        },
        violet: {
          100: "#FEC3FE",
          200: "#FDAFFD",
          300: "#fd9cfd",
          400: "#FD87FD",
          500: "#FC73FC",
        },
        pink: {
          100: "#F490C3",
          200: "#F27DBA",
          300: "#ef5da8",
          400: "#ED459C",
          500: "#EB3392",
        },
        grey: {
          100: "#C1C1C3",
          200: "#97979B",
          300: "#5F5F63",
          400: "#4E4E51",
          500: "#3C3C3E",
          600: "#343436",
          700: "#303032",
          800: "#2E2E30",
          900: "#2B2B2D",
          950: "#161617",
        },
        navy: {
          100: "#414A6C",
          300: "#202231",
          400: "#181525",
          800: "#202231",
        },
      },
    },
  },
  plugins: [],
};
