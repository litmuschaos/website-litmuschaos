import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../../styles";
import { CSSDebugger } from "../css-debugger";
// Components
import { Footer } from "../footer";
import { Banner } from "../banner";
import { Adopter } from "../adopter";


import Header from "./Header";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <GlobalStyles />
        <CSSDebugger />
        <Header />
        <main>{children}</main>
        <Adopter />
        <Banner />
        
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
