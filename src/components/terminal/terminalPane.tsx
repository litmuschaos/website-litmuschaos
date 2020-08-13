import React from "react";
import styled from "styled-components";
import { KubeCmd } from "../texts";

const Body = styled.div`
  background-color: white;
  border-radius: 0 0 0.5rem 0.5rem;
  height: ${props => (props.theme.screens.md ? "7.938rem" : "18.125rem")};
  padding: ${props => (props.theme.screens.md ? "0.875rem" : "1.25rem")};
`;

const TerminalPane: React.FC = () => {
  return (
    <Body>
      <KubeCmd text="https://litmuschaos.github.io/pages/litmus-operator-latest.yaml" />
    </Body>
  );
};

export { TerminalPane };
