import React from "react";
import styled, { useTheme } from "styled-components";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow:row wrap;
`

const SectionStylesLarge = styled.div`
  max-width: 120rem;
  padding:40px;
  width: 70vw;
  min-height: 100vh;
  height:100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const SectionStyles = styled.div`
  max-width: 100vw;
  padding:40px;
  width: 100vw;
  min-height: 80vh;
  height:100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Section: React.FC = ({ children }) => {
    const { xl } = useTheme().screens;
    if (xl){
        return (
        <Container>
            <SectionStyles>{children}</SectionStyles>
        </Container>
    )}
    else{ return (
        <Container>
            <SectionStylesLarge>{children}</SectionStylesLarge>
        </Container>
    )}
};

export {Section};