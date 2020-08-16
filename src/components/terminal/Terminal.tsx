import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { YamlContext } from "../../context";
import { KubeCmd } from "../texts";
import { TopBar } from "./TopBar";

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
  width: ${props =>
    props.theme.screens.md
      ? "auto"
      : props.theme.screens.mmd
      ? "20rem"
      : props.theme.screens.xl
      ? "25rem"
      : "35rem"};
  height: fit-content;
  border-radius: 0.5rem;
  box-shadow: 0px 20px 48px rgba(0, 0, 0, 0.08);
`;

const Body = styled.div`
  background-color: white;
  border-radius: 0 0 0.5rem 0.5rem;
  height: ${props => (props.theme.screens.md ? "10rem" : "18.125rem")};
  padding: ${props => (props.theme.screens.md ? "0.875rem" : "1.25rem")};
`;

const Terminal: React.FC = () => {
  const { yamlLink } = useContext(YamlContext);

  return (
    <Wrapper>
      <TerminalFrame>
        <TopBar />
        <Body>
          <KubeCmd text={yamlLink} />
        </Body>
      </TerminalFrame>
    </Wrapper>
  );
};

export { Terminal };
