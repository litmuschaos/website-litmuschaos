import React from "react";
import styled from "styled-components";

// Default Button Styles
const Button = styled.button`
  height: 3rem;
  min-width: 10rem;
  border: none;
  background: ${props => props.theme.gradient.purpleGradient}
  color: ${props => props.theme.colors.backgroundDark};
  border-radius: 0.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

const ButtonMobile = styled.button`
  height: 3rem;
  min-width: 10rem;
  width: 70%;
  border: none;
  background: ${props => props.theme.gradient.purpleGradient}
  color: ${props => props.theme.colors.backgroundDark};
  border-radius: 0.2rem;
  font-size: 0.9rem;
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
  border-radius: 0.2rem;
  background: ${props => props.theme.colors.pureWhite};
  color: ${props => props.theme.colors.greenLight};
  font-size: 0.9rem;
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;
const WhiteOnGreenButtonTextStyles = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
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
  return (
    <WhiteOnGreenButtonStyles>
      <WhiteOnGreenButtonTextStyles>{children}</WhiteOnGreenButtonTextStyles>
    </WhiteOnGreenButtonStyles>
  );
};

export { Button, ButtonMobile, OutlinedButton, WhiteOnGreenButton };
