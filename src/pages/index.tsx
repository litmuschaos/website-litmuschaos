import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Layout, ResponsiveRow } from "../components/layout";
import { Head } from "../components/sections/home";
import { SEO } from "../components/seo";
import { theme, useTheme } from "../styles";

const CloudNativeWay: React.FC = ({ children }) => {
  const { sm } = useTheme().screens;
  if (sm) {
    return <div style={{ margin: "0 1rem" }}>{children}</div>;
  } else {
    return (
      <div style={{ margin: "28rem 0 3rem 0", textAlign: "center" }}>
        {children}
      </div>
    );
  }
};

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
    <ThemeProvider theme={theme()}>
      <OutlinedPurpleBox />
      <Layout>
        <SEO />
        <Head />
        <CloudNativeWay>
          <h2>Do it the cloud-native way</h2>
          <ResponsiveRow>
            <img
              src="./svg/chaosbird_experimenting.svg"
              alt="Chaos Bird Experimenting"
            />
            <div>
              <p>Some</p>
              <p>File</p>
            </div>
          </ResponsiveRow>
        </CloudNativeWay>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
