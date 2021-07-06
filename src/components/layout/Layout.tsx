import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
// Components
import { Footer } from "../footer";
import { Nav } from "../nav";
import { PreFooter } from "../pre-footer";

const Container = styled.div`
  position: relative;
  z-index: ${(props) => props.theme.zIndex.content};
`;

interface Ilayoutprops {
  noPreFooter?: boolean;
}

const Layout: React.FC<Ilayoutprops> = ({ children, noPreFooter }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <Nav />
        <main>{children}</main>
        {noPreFooter ? <></> : <PreFooter />}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
