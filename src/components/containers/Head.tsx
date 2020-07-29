import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 50%;
  padding: 2% 8%;
`;

interface IHead {
  leftProp: JSX.Element | React.ReactElement | React.FunctionComponent | null;
  rightProp: JSX.Element | React.ReactElement | React.FunctionComponent | null;
}

const Head: React.FC<IHead> = ({ leftProp, rightProp }) => {
  return (
    <Main>
      <Container>{leftProp}</Container>
      <Container>{rightProp}</Container>
    </Main>
  );
};

export { Head };
