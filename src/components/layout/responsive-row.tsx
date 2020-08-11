import React from "react";
import styled, { css } from "styled-components";

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  ${({ theme }) =>
    theme.screens.sm
      ? css`
          flex-direction: column;
          align-items: start;
          
          
        `
      : css`
          flex-direction: row;
          
          justify-content: center;
          
        `};
`;

const ResponsiveRow: React.FC = ({ children }) => {
  return <PanelContainer>{children}</PanelContainer>;
};

export { ResponsiveRow };
