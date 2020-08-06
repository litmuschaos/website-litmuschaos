import React from "react";
import styled, { useTheme } from "styled-components";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow:row wrap;
`

const SectionStylesLarge = styled.div`
  max-width:  70vw;
  width: 70vw;
  min-height: 70vh;
  height:100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const SectionStyles = styled.div`
  max-width: 100vw;
  padding:40px;
  width: 100vw;
  min-height: 80vh;
  height:100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Section: React.FC = ({ children }) => {
    const { sm, md } = useTheme().screens;
    if (sm || md){
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