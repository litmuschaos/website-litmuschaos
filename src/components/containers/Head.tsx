import React from "react";
import styled, { useTheme } from "styled-components";
// import { useTheme } from "../styles";
import { Button, WhiteOnGreenButton } from "../../components/button";
import { Heading, Paragraph } from "../../components/texts";
import { BoundedContainer } from "../layout";

// Styles

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BackgroundHeader = styled.div`
  position: absolute;
  top: 0;
  left: 35%;
  z-index: -1;
  width: 65%;
`;

// Components

const OutlinedPurpleBox: React.FC = () => (
  <img src="/svg/outlined_purple_box.svg" alt="litmus logo" />
);

const LeftHeaderContainer: React.FC = () => {
  const { sm, md } = useTheme().screens;

  const flexibleButton = (
    <Button screen={sm ? "small" : "large"} gradientColor="purple">
        Get Started
    </Button>
  );

  return (
    <div style={{ margin: md ? "5rem 0" : "5rem" }}>
      <WhiteOnGreenButton>OPEN-SOURCE PLATFORM</WhiteOnGreenButton>
      <Heading>
        Chaos Engineering
        <br />
        for your Kubernetes
      </Heading>
      <Paragraph>
        Kubernetes developers and SREs use Litmus to create, manage and monitor
        chaos workflows. Resilience of your Kubernetes starts with finding a
        weakness and start fixing it.
      </Paragraph>
      <div style={{ marginTop: "1rem" }}>{flexibleButton}</div>
    </div>
  );
};

const RightHeaderContainer: React.FC = () => {
  return (
    <>
      <BackgroundHeader>
        <OutlinedPurpleBox />
      </BackgroundHeader>
    </>
  );
};

const Head: React.FC = () => {
  return (
    <Main>
      <BoundedContainer width="45%">
        <LeftHeaderContainer />
      </BoundedContainer>
      <RightHeaderContainer />
    </Main>
  );
};

export { Head };
