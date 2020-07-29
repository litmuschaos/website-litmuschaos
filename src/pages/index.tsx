import React from "react";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Head } from "../components/containers/index";
// import { useTheme } from "../styles";
import { Button, ButtonMobile, WhiteOnGreenButton } from "../components/button";

// Styles

const LeftPropDiv = styled.div`
  height: 20rem;
  margin: 5rem 0;

  .customBtn {
    margin-top: 1rem;
  }
`;

const BackgroundHeader = styled.div`
  position: absolute;
  top: 0;
  left: 35%;
  z-index: -1;
  height: 20rem;
  width: 65%;
`;

// Components

const OutlinedPurpleBox: React.FC = () => (
  <img src="/svg/outlined_purple_box.svg" alt="litmus logo" />
);

const leftHeaderContainer: React.FC = () => {
  // const { sm } = useTheme().screens;

  // const flexibleButton = sm ? (
  //   <ButtonMobile>Get Started</ButtonMobile>
  // ) : (
  //   <Button>Get Started</Button>
  // );

  const flexibleButton = <Button>Get Started</Button>;

  return (
    <LeftPropDiv>
      <WhiteOnGreenButton>OPEN-SOURCE PLATFORM</WhiteOnGreenButton>
      <h1>
        Chaos Engineering
        <br />
        for your Kubernetes
      </h1>
      <p>
        Kubernetes developers and SREs use Litmus to create, manage and monitor
        chaos workflows. Resilience of your Kubernetes starts with finding a
        weakness and start fixing it.
      </p>
      <div className="customBtn">{flexibleButton}</div>
    </LeftPropDiv>
  );
};

const rightHeaderContainer: React.FC = () => {
  return (
    <>
      <BackgroundHeader>
        <OutlinedPurpleBox />
      </BackgroundHeader>
    </>
  );
};

const App = () => (
  <Layout>
    <SEO />
    <Head leftProp={leftHeaderContainer()} rightProp={rightHeaderContainer()} />
  </Layout>
);

export default App;
