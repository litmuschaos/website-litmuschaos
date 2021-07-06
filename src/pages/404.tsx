import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "../components/button";
import { BoundedContainer, Center, ResponsiveRow } from "../components/layout";
import { Link } from "../components/link";
import { Paragraph } from "../components/texts";
import { theme, useTheme } from "../styles";

const BackgroundDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 5rem 2rem;
  background: url("/svg/404Background.svg") no-repeat;
  background-size: cover;
`;

const Content: React.FC = () => {
  const { textSecondary } = useTheme().colors;
  const { lg, xxxl } = useTheme().screens;
  return (
    <div style={{ marginLeft: lg ? 0 : "2rem" }}>
      <h1 style={{ fontSize: lg ? "2.5rem" : xxxl ? "3.5rem" : "4rem" }}>
        Whoops!
        <br />
        This page is unavailable
      </h1>
      <br />

      <Paragraph>The page does not exist, or please try again later</Paragraph>
      <br />
      <Link to="/">
        <Button backgroundColor={textSecondary}>Go back home</Button>
      </Link>
    </div>
  );
};

// Component
const NotFoundPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme()}>
      <BackgroundDiv>
        <Center>
          <ResponsiveRow breakpoint="lg">
            <BoundedContainer
              breakpoint="lg"
              width="50%"
              margin="0"
              style={{ maxWidth: "100%" }}
            >
              <Center>
                <Content />
              </Center>
            </BoundedContainer>

            <BoundedContainer breakpoint="lg" width="50%" margin="0 0 0 2rem">
              <StaticImage
                src="../images/404.png"
                alt="Page not found image"
                placeholder="blurred"
              />
            </BoundedContainer>
          </ResponsiveRow>
        </Center>
      </BackgroundDiv>
    </ThemeProvider>
  );
};

export default NotFoundPage;
