import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../../styles";
// Components
import { Footer } from "../footer";
import Header from "./Header";

const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    background: green;
  }
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
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export { Layout };
