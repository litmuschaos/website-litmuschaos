import "modern-css-reset/dist/reset.min.css";
import { useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import media from "use-media";
import themeObject from "./theme";

export { theme, useTheme };

type DefaultThemeObject = Omit<typeof themeObject, "screens"> & {
  screens: {
    [key: string]: number;
  };
};

const theme = (): DefaultTheme => {
  const { screens, ...themeValues }: DefaultThemeObject = themeObject;
  const breakpointSizes = Object.keys(screens).reduce((accum, key: string) => {
    const value = media({ maxWidth: screens[key] });
    return {
      ...accum,
      [key]: value
    };
  }, {});
  return {
    ...themeValues,
    screens: breakpointSizes
  };
};

const useTheme = () => useContext(ThemeContext);
