import React from "react";
import { useTheme } from "styled-components";
// import { useTheme } from "../styles";
import { Button, WhiteOnGreenButton } from "../../button";
import { BoundedContainer, SectionDark } from "../../layout";
import { Heading, Paragraph } from "../../texts";

// Components

const LeftHeaderContainer: React.FC = () => {
  const { sm } = useTheme().screens;

  const flexibleButton = (
    <Button screen={sm ? "small" : "large"} gradientColor="purple">
      Get Started
    </Button>
  );

  return (
    <div>
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

const Head: React.FC = () => {
  return (
    <SectionDark>
      <BoundedContainer width="40%" margin="0">
        <LeftHeaderContainer />
      </BoundedContainer>
    </SectionDark>
  );
};

export { Head };
