import React from "react";
import styled from "styled-components";

interface IButton {
  gradientColor: "purple" | "green";
  screen: "small" | "large";
}

// Default Button Styles
const Button = styled.button<IButton>`
  height: 3rem;
  min-width: 10rem;
  width: ${props => (props.screen === "small" ? "70%" : "20.0625rem")};
  border: none;
  background: ${props =>
    props.gradientColor === "purple"
      ? props.theme.gradient.purple
      : props.theme.gradient.green};
  color: ${props => props.theme.colors.pureWhite};
  border-radius: 0.25rem;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: #5B44BA25;
  :disabled {
    background: lightgray;
  }
`;

// White On Green Button Styles
const WhiteOnGreenButtonStyles = styled.button`
  height: 2rem;
  min-width: 13rem;
  border: none;
  border-radius: 0.2rem;
  background: ${props => props.theme.colors.pureWhite};
  color: ${props => props.theme.colors.greenDark};
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

// Outline Button Styles
const OutlinedButton = styled.button`
  min-width: 2rem;
  padding: 0.5rem 2rem;
  background: transparent;
  color: ${props => props.theme.colors.backgroundDark};
  border: 0.05rem solid white;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

const WhiteOnGreenButton: React.FC = ({ children }) => {
  return <WhiteOnGreenButtonStyles>{children}</WhiteOnGreenButtonStyles>;
};

export { Button, OutlinedButton, WhiteOnGreenButton };
