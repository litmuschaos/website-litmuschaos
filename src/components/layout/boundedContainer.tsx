import React from "react";
import styled from "styled-components";

interface IBoundedContainer {
  width: string;
  children: React.ReactNode;
  margin: string;
}

interface IPanelContainer {
  width: string;
  margin: string;
}

const PanelContainer = styled.div<IPanelContainer>`
  margin: ${props => props.margin};
  width: ${props => (props.theme.screens.sm ? "100%" : props.width)};
`;

const BoundedContainer: React.FC<IBoundedContainer> = ({
  width,
  children,
  margin
}) => {
  return (
    <PanelContainer width={width} margin={margin}>
      {children}
    </PanelContainer>
  );
};

export { BoundedContainer };
