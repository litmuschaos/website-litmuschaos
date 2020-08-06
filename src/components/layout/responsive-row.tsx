import React from "react";
import styled, { css } from "styled-components";

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  ${({ theme }) =>
    theme.screens.sm
      ? css`
          flex-flow: column;
          align-items: start;
        `
      : css`
          flex-flow: row;
          align-items: center;
          justify-content: center;
        `};
`;

const PanelContainerMD = styled.div`
  width: 100%;
  display: flex;
  ${({ theme }) =>
    theme.screens.md
      ? css`
          flex-flow: column wrap;
          align-items: start;
        `
      : theme.screens.sm
      ? css`
          flex-flow: column;
          align-items: start;
        `
      : css`
        flex-flow: row;
        align-items: center;
        justify-content: center;
      `
    };
`;

const ResponsiveRow: React.FC = ({ children }) => {
  return <PanelContainer>{children}</PanelContainer>;
};

const ResponsiveRowMD: React.FC = ({ children }) => {
  return <PanelContainerMD>{children}</PanelContainerMD>;
};

export { ResponsiveRow, ResponsiveRowMD };
