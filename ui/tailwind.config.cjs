module.exports = {
  mode: "jit",
  plugins: [],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
        md: "0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16)",
        lg: "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)",
        xl: "0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)",
        "2xl":
          "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
        "3xl":
          "0px 2px 8px rgba(40, 41, 61, 0.08), 0px 20px 32px rgba(96, 97, 112, 0.24)",
        inner: "inset 0px 0.5px 4px rgba(96, 97, 112, 0.32)",
        dropdown: "0px 0px 0px 3px rgba(128, 144, 92, 0.3)",
        input: "0px 0px 0px 2px rgba(128, 144, 92, 0.4)",
        none: "none",
      },
      colors: {
        primary: {
          darkest: "#1D7761",
          dark: "#27A082",
          DEFAULT: "#31CBA4",
          light: "#57D6B6",
          lightest: "#80E0C8",
        },
        secondary: {
          darkest: "#4D2E3A",
          dark: "#6C4152",
          DEFAULT: "#8B546A",
          light: "#A76C84",
          lightest: "#BA8C9F",
        },
        accent: {
          darkest: "#444F5F",
          dark: "#59687D",
          DEFAULT: "#6E8099",
          light: "#8E9BAF",
          lightest: "#ABB5C4",
        },
        light: {
          darkest: "#BABABA",
          dark: "#D4D4D4",
          DEFAULT: "#EEEEEE",
          lightest: "#FFFFFF",
        },
        dark: {
          darkest: "#161B27",
          dark: "#1D2434",
          DEFAULT: "#273147",
          light: "#3A4969",
          lightest: "#4C608A",
        },
        danger: {
          darkest: "#8C1515",
          dark: "#A31818",
          DEFAULT: "#B91C1C",
          light: "#DB2121",
          lightest: "#E23E3E",
        },
        success: {
          darkest: "#117937",
          dark: "#138D40",
          DEFAULT: "#16A34A",
          light: "#1BC559",
          lightest: "#28E26C",
        },
        info: {
          darkest: "#AD8406",
          dark: "#CA9A07",
          DEFAULT: "#EAB308",
          light: "#F7C01B",
          lightest: "#F8C93B",
        },
      },
    },
  },
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: "media", // or 'media' or 'class'
};
