import React from "react";
import styled, { css, useTheme } from "styled-components";

interface IMenuButton {
  bgColor: (opacity: number) => string;
}

const MenuButton = styled.div<IMenuButton>`
  border-radius: 50%;
  background-color: ${props => props.bgColor(1)};
  ${({ theme }) =>
    theme.screens.md
      ? css`
          width: 0.625rem;
          height: 0.625rem;
          margin-right: 0.2rem;
        `
      : css`
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
        `}
`;

const TopBarDiv = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${props => props.theme.colors.lightGray};
  ${({ theme }) =>
    theme.screens.md
      ? css`
          padding: 0.625rem 0.875rem;
        `
      : css`
          padding: 1rem 1.25rem 0.5rem 1.25rem;
        `}
`;

const ButtonGroup = styled.div`
  position: absolute;
  display: flex;
`;

const TopBarText = styled.p`
  line-height: 170%;
  font-weight: 600;
  text-align: center;
  margin-top: -0.25rem;
  color: rgba(0, 0, 0, 0.5);
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.paragraph.md
      : props.theme.fontSize.paragraph.lg};
`;

const TopBar: React.FC = () => {
  const { red, darkGreen, yellow } = useTheme().colors;

  return (
    <TopBarDiv>
      <ButtonGroup>
        <MenuButton bgColor={red} />
        <MenuButton bgColor={darkGreen} />
        <MenuButton bgColor={yellow} />
      </ButtonGroup>
      <TopBarText> Install Litmus </TopBarText>
    </TopBarDiv>
  );
};

export { TopBar };
