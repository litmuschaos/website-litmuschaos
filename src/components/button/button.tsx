import React from "react";
import styled from "styled-components";

interface IButton {
  gradientColor: "purple" | "green";
  screen: "small" | "large";
}

// Default Button Styles
const Button = styled.button<IButton>`
  height: 4.5rem;
  min-width: 8rem;
  width: ${(props) => (props.screen === "small" ? "60%" : "15rem")};
  border: none;
  outline: none;
  background: ${(props) =>
    props.gradientColor === "purple"
      ? props.theme.gradient.purple
      : props.theme.gradient.green};
  color: ${(props) => props.theme.colors.pureWhite};
  border-radius: 0.5rem;
  font-size: ${(props) => props.theme.fontsize.paragraph};
  cursor: pointer;
  background: linear-gradient(
      133.06deg,
      #858cdd 1.77%,
      rgba(133, 140, 221, 0) 64.41%
    ),
    #5b44ba;
  box-shadow: 0px 10px 29px rgba(91, 68, 186, 0.25);
  border-radius: 0.5rem;
  :disabled {
    background: lightgray;
  }
`;

// White On Green Button Styles
const WhiteOnGreenButtonStyles = styled.button`
  height: 2rem;
  max-width: fit-content;
  border: none;
  outline: none;
  border-radius: 0.2rem;
  background: ${(props) => props.theme.colors.pureWhite};
  color: ${(props) => props.theme.colors.greenDark};
  font-size: ${(props) => props.theme.fontsize.paragraph}-0.2rem;
  font-weight: bold;
  cursor: pointer;
  width: 19.5rem;
  height: 2.5rem;
  background: ${(props) => props.theme.colors.pureWhite};
  box-shadow: 0px 5px 13px rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  :disabled {
    background: lightgray;
  }
`;

// Outline Button Styles
const OutlinedButton = styled.button`
  min-width: 2rem;
  padding: 0.5rem 2rem;
  background: transparent;
  outline: none;
  color: ${(props) => props.theme.colors.backgroundDark};
  border: 0.05rem solid white;
  border-radius: 0.5rem;
  font-size: ${(props) => props.theme.fontsize.paragraph};
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

const WhiteOnGreenButton: React.FC = ({ children }) => {
  return <WhiteOnGreenButtonStyles>{children}</WhiteOnGreenButtonStyles>;
};

export { Button, OutlinedButton, WhiteOnGreenButton };
