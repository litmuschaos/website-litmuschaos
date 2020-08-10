export default {
  screens: {
    // max-widths in pixels
    xs: 450,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1450
  },
  colors: {
    backgroundLight: "#F9FAFC",
    backgroundDark: "#F4F5F7",
    spaceGrey: "#F1F2F6",
    greenLight: "#25C187",
    greenDark: "#109B67",
    purpleLight: "#858CDD",
    purpleDark: "#858cdd",
    textPrimary: "#042A2B",
    textSecondary: "#5B44BA",
    pureWhite: "#FFFFFF",
    MayadataColor : "#001959"
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1
  },
  gradient: {
    purple:
      "linear-gradient(135.47deg, #858CDD 1.77%, rgba(133, 140, 221, 0) 64.41%), #5B44BA;",
    green:
      "linear-gradient(135.47deg, #109C68 1.77%, rgba(133, 140, 221, 0) 64.41%), #25C087;"
  },
  py: (value: number | string) =>
    `padding-top: ${value}; padding-bottom: ${value};`,
  // Add anything else you'd like.
  fontsize: {
    heading: "3rem",
    paragraph: "1.2rem",
    subheading: "1.5rem",
  }
};
