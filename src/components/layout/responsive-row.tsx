import React from "react";
import styled from "styled-components";

const PanelContainer = styled.div`
  display: flex;
  flex-direction: ${({ theme }) => (theme.screens.xs ? "column" : "row")};
  justify-content: center;
  width: 100%;
`;

const ResponsiveRow: React.FC = ({ children }) => {
  return <PanelContainer>{children}</PanelContainer>;
};

export { ResponsiveRow };
