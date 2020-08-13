import React from "react";
import styled, { css } from "styled-components";
import { TerminalPane } from "./terminalPane";
import { TopBar } from "./topbar";

const Wrapper = styled.div`
  ${props =>
    props.theme.screens.md
      ? css`
          display: block;
        `
      : css`
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
        `}
`;

const TerminalFrame = styled.div`
  max-width: 35rem;
  height: fit-content;
  border-radius: 0.5rem;
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.08);
`;

const Terminal: React.FC = () => {
  return (
    <Wrapper>
      <TerminalFrame>
        <TopBar />
        <TerminalPane />
      </TerminalFrame>
    </Wrapper>
  );
};

export { Terminal };
