const opacityCheck = (opacity: number) => {
  return opacity && opacity >= 0 && opacity <= 1;
};

export default {
  screens: {
    // max-widths in pixels
    xs: 450,
    sm: 640,
    md: 768,
    mmd: 890,
    lg: 1024,
    xl: 1280,
    xxl: 1350,
    xxxl: 1600,
    xxxxl: 1800,
  },
  fontSize: {
    heading: { lg: "2.2rem", md: "1.75rem" },
    subHeading: { lg: "1.5rem", md: "1.125rem" },
    paragraph: { lg: "1.1rem", md: "0.9rem" },
    subText: { lg: "1.25rem", md: "1.125rem" },
    button: { lg: "1.125rem", md: "0.875rem" },
    small: { lg: "0.875rem", md: "0.75rem" },
  },
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    boxShadowCol1: "rgba(0, 0, 0, 0.18)",
    boxShadowCol2: "rgba(0, 0, 0, 0.22)",
    dropShadowNavbarDesktop: "rgba(225, 225, 225, 0.5)",
    swagBtnLink: "#7e8f9a",
    backgroundLight: "#F9FAFC",
    backgroundDark: "#F4F5F7",
    spaceGrey: "#F1F2F6",
    lightGray: "#EBEBEB",
    darkGray: "#6F6F6F",
    textPrimary: "#042A2B",
    textSecondary: "#5B44BA",
    darkBlue: "#005797",
    lightBlue: "#03B5B0",
    CTAredhat: "#000000",
    CTAanutanetworks: "#03B5B0",
    CTAorange: "#181818",
    CTAkitopi: "#E1F0F2",
    CTAintuit: "#1F2022",
    CTAlenskart: "#005797",
    CTAhalodoc: "linear-gradient(266.12deg, #90062F 0%, #E9094C 99.53%)",
    yellowPill: "#ffa615",
    bannerShadowFrom: "rgba(0, 0, 0, 0.1)",
    bannerShadowTo: "rgba(0, 0, 0, 0.13)",
    mobileNavBackground: "rgba(225, 225, 225, 0.3)",
    githubGray: "#cfd3e3",

    grayText: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(102, 102, 102, ${opacity})`
        : `rgba(102, 102, 102, 1)`,
    red: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(202, 44, 44, ${opacity})`
        : `rgba(202, 44, 44, 1)`,
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
    lightGreenGradient:
      "linear-gradient(270deg, #25C187 0%, rgba(37, 193, 135, 0) 100%)",
    fadedLine: (deg: number) => `linear-gradient(
            ${deg}deg,
            rgba(235, 235, 235, 0) 0%,
            #ebebeb 10%,
            #ebebeb 85%,
            rgba(235, 235, 235, 0) 100%
          );`,
    githubGradient: "linear-gradient(133.06deg, #f9fafc 1.78%, #eef1f7 64.41%)",
  },
};
