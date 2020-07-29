import React from "react";
import styled from "styled-components";

interface IHead {
  leftProp: JSX.Element;
  rightProp: JSX.Element;
}

const Main = styled.div`
    display: flex;
    flex-direction: row'
`;

const Head: React.FC<IHead> = ({ leftProp, rightProp }) => {
  return (
    <Main>
      {leftProp}
      {rightProp}
    </Main>
  );
};

export { Head };
