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
  width: ${props => (props.screen === "small" ? "50%" : "15rem")};
  border: none;
  outline:none;
  background: ${props =>
    props.gradientColor === "purple"
      ? props.theme.gradient.purple
      : props.theme.gradient.green};
  color: ${props => props.theme.colors.pureWhite};
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:row wrap;
  border-radius: 0.5rem;
  font-size: ${props => props.theme.fontsize.subheading};
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

// White On Green Button Styles
const WhiteOnGreenButtonStyles = styled.button`
  height: 2rem;
  min-width: 13rem;
  border: none;
  outline:none;
  border-radius: 0.2rem;
  background: ${props => props.theme.colors.pureWhite};
  color: ${props => props.theme.colors.greenDark};
  font-size: ${props => props.theme.fontsize.paragraph};
  font-weight: bold;
  cursor: pointer;
  width: 168px;
  height: 28px;
  background: #FFFFFF;
  box-shadow: 0px 5px 13px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  :disabled {
    background: lightgray;
  }
`;

// Outline Button Styles
const OutlinedButton = styled.button`
  min-width: 2rem;
  padding: 0.5rem 2rem;
  background: transparent;
  outline:none;
  color: ${props => props.theme.colors.backgroundDark};
  border: 0.05rem solid white;
  border-radius: 0.5rem;
  font-size: ${props => props.theme.fontsize.paragraph};
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

const WhiteOnGreenButton: React.FC = ({ children }) => {
  return <WhiteOnGreenButtonStyles>{children}</WhiteOnGreenButtonStyles>;
};

export { Button, OutlinedButton, WhiteOnGreenButton };
