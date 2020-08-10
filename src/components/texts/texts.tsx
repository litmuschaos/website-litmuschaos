import styled, { DefaultTheme } from "styled-components";

const calcSize = (theme: DefaultTheme) => {
  console.log(theme.screens);
  return "3.5rem";
};

const Heading = styled.h1`
  font-size: ${props => calcSize(props.theme)};
  line-height: 130%;
`;

export { Heading };
