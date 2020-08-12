import styled from "styled-components";

interface IButton {
  gradientColor: "purple" | "green";
  screen: "small" | "large";
}

// Default Button Styles
const Button = styled.button<IButton>`
  height: 3rem;
  min-width: 10rem;
  width: ${props => (props.screen === "small" ? "70%" : "15rem")};
  border: none;
  background: ${props =>
    props.gradientColor === "purple"
      ? props.theme.gradient.purple
      : props.theme.gradient.green};
  color: ${props => props.theme.colors.pureWhite};
  border-radius: 0.25rem;
  font-size: ${props => props.theme.fontSize.button};
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

// White On Green Button Styles
const WhiteOnGreenButton = styled.button`
  height: 2rem;
  min-width: 13rem;
  border: none;
  border-radius: 0.2rem;
  background: ${props => props.theme.colors.pureWhite};
  color: ${props => props.theme.colors.darkGreen(1)};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 5px 13px rgba(0, 0, 0, 0.08);
  :disabled {
    background: lightgray;
  }
`;

// Outline Button Styles
const OutlinedButton = styled.button`
  min-width: 2rem;
  padding: 0.5rem 2rem;
  background: transparent;
  color: black;
  border: 0.05rem solid black;
  border-radius: 0.5rem;
  font-size: ${props => props.theme.fontSize.button};
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

export { Button, OutlinedButton, WhiteOnGreenButton };
