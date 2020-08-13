import React from "react";
import styled from "styled-components";
import { TerminalPane } from "./terminalPane";
import { TopBar } from "./topbar";

const TerminalFrame = styled.div`
  max-width: 35rem;
  height: fit-content;
  border-radius: 0.5rem;
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.08);
`;

const Terminal: React.FC = () => {
  return (
    <TerminalFrame>
      <TopBar />
      <TerminalPane />
    </TerminalFrame>
  );
};

export { Terminal };
