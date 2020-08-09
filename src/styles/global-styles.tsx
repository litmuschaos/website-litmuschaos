import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.backgroundDark}; 
    color: ${props => props.theme.colors.textPrimary};
  }
  html {
    font-family: "Ubuntu", sans-serif;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export { GlobalStyles };
