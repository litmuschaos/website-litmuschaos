import React from "react";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { Head } from "../components/sections/home";
import { CloudNativeWay } from "../components/sections/home/CloudNativeWay";
import { SEO } from "../components/seo";
import { useTheme } from "../styles";

const OutlinedPurpleBoxImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
`;

const OutlinedPurpleBox: React.FC = () => {
  const { md } = useTheme().screens;
  return (
    <OutlinedPurpleBoxImage
      src={
        md ? "/svg/outlined_purple_box-md.svg" : "/svg/outlined_purple_box.svg"
      }
      alt="banner image"
    />
  );
};

const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme()}>
        <OutlinedPurpleBox />
      </ThemeProvider> */}

      <Layout>
        <SEO />
        <Head />
        <CloudNativeWay />
      </Layout>
    </>
  );
};

export default App;
