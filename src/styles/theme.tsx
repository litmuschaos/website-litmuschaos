export default {
  screens: {
    // max-widths in pixels
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  },
  colors: {
    backgroundLight: "#F9FAFC",
    backgroundDark: "#F4F5F7",
    greenLight: "#25C187",
    greenDark: "#109B67",
    purpleLight: "#858CDD",
    purpleDark: "#858cdd",
    textPrimary: "#5B44BA"
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1
  },
  py: (value: number | string) =>
    `padding-top: ${value}; padding-bottom: ${value};`
  // Add anything else you'd like.
};
