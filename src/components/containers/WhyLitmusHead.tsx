import React from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "../../components/button";
import { Heading, Paragraph } from "../../components/texts";
import { Section } from "../../components/section-layout";
import { BoundedContainer } from "../layout";

// Styles

const BackgroundHeader = styled.div`
  z-index: -1;
  width: 50%;
  align-self: center;
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
    <div style={{ margin: md ? "5rem 0" : "2rem" }}>
      <Heading>
        Find defects on your Kubernetes clusters and applications
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
  const { lg } = useTheme().screens;
  return (
    <>
      <BackgroundHeader>
        {!lg ? (
          <img
            src="/svg/ChaosBirdWalking.svg"
            alt="Chaos Bird walking towards resilience"
            style={{ minWidth: "35rem" }}
          />
        ) : (
          <></>
        )}
      </BackgroundHeader>
    </>
  );
};

const WhyLitmusHead: React.FC = () => {
  const { lg } = useTheme().screens;
  return (
    <Section>
      <BoundedContainer width={!lg ? "45%" : "65%"}>
        <LeftHeaderContainer />
      </BoundedContainer>
      <RightHeaderContainer />
    </Section>
  );
};

export { WhyLitmusHead };
