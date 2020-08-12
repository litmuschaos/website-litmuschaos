const opacityCheck = (opacity: number) => {
  return opacity && opacity >= 0 && opacity <= 1;
};

export default {
  screens: {
    // max-widths in pixels
    xs: 450,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1600,
    xxxl: 1920,
  },
  fontSize: {
    heading: { lg: "2.2rem", md: "1.75rem" },
    subHeading: { lg: "1.5rem", md: "1.125rem" },
    paragraph: { lg: "1rem", md: "0.875rem" },
    subText: { lg: "1.25rem", md: "1.125rem" },
    button: "1.125rem",
    small: "0.875rem",
  },
  colors: {
    backgroundLight: "#F9FAFC",
    backgroundDark: "#F4F5F7",
    spaceGrey: "#F1F2F6",
    darkGray: "#6F6F6F",
    textPrimary: "#042A2B",
    textSecondary: "#5B44BA",
    purple: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(133, 140, 221, ${opacity})`
        : `rgba(133, 140, 221, 1)`,
    darkGreen: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(16, 155, 103, ${opacity})`
        : `rgba(16, 155, 103, 1)`,
    lightGreen: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(37, 193, 135, ${opacity})`
        : `rgba(37, 193, 135, 1)`,
    yellow: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(240, 183, 64, ${opacity})`
        : `rgba(240, 183, 64, 1)`,
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1,
  },
  zIndex: {
    content: "10",
    nav: "50",
  },
  gradient: {
    purple:
      "linear-gradient(135.47deg, #858CDD 1.77%, rgba(133, 140, 221, 0) 64.41%), #5B44BA;",
    green: "linear-gradient(82.87deg, #109C68 25.92%, #25C087 78.64%);",
  },
};
