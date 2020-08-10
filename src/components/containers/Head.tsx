import React from "react";
import styled, { useTheme } from "styled-components";
// import { useTheme } from "../styles";
import { Button, WhiteOnGreenButton } from "../../components/button";
import { Heading, Paragraph } from "../../components/texts";
import { Section } from "../../components/section-layout";
import { BoundedContainer } from "../layout";

// Styles

const BackgroundHeader = styled.div`
  position: absolute;
  top: 0;
  left: 35%;
  z-index: -1;
  width: 65%;
`;

// Components

const LeftHeaderContainer: React.FC = () => {
  const { sm, md } = useTheme().screens;
  const flexibleButton = (
    <Button screen={sm ? "small" : "large"} gradientColor="purple">
      Get Started
    </Button>
  );

  return (
    <div style={{ margin: md ? "5rem 0" : "0rem 5rem 0rem 0rem" }}>
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
  const { sm, md } = useTheme().screens;
  return (
    <>
      <BoundedContainer width="50%">
        <BackgroundHeader>
          {sm || md ? (
            <object data="/svg/MainRectangleMobile.svg" type="image/svg+xml" />
          ) : (
            <object
              data="/svg/MainRectangle.svg"
              type="image/svg+xml"
              style={{ maxWidth: "100%" }}
            />
          )}
        </BackgroundHeader>
      </BoundedContainer>
    </>
  );
};

const Head: React.FC = () => {
  return (
    <Section>
      <BoundedContainer width="45%">
        <LeftHeaderContainer />
      </BoundedContainer>
      <RightHeaderContainer />
    </Section>
  );
};

export { Head };
