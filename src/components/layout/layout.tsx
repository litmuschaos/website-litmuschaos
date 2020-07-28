import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../../styles";
// Components
import { CSSDebugger } from "../css-debugger";
import { Footer } from "../footer";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`;

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  // const { title, description } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <GlobalStyles />
        <CSSDebugger />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
