import React from "react";
import styled, { useTheme } from "styled-components";
// import { useTheme } from "../styles";
import { Button, WhiteOnGreenButton } from "../../button";
import { BoundedContainer, ResponsiveRow, SectionDark } from "../../layout";
import { Paragraph } from "../../texts";

const MainHeading = styled.h1`
  margin: 1rem 0;
  line-height: 130%;
  font-size: ${(props) => (props.theme.screens.md ? "2rem" : "2.6rem")};
`;

// Components
const HeadText: React.FC = () => {
  const { sm, md } = useTheme().screens;

  const flexibleButton = (
    <Button
      gradientColor="purple"
      onClick={() =>
        window.open("https://docs.litmuschaos.io/docs/getstarted/")
      }
    >
      Get Started
    </Button>
  );

  const HeadContent = (
    <>
      <WhiteOnGreenButton disabled>CLOUD-NATIVE</WhiteOnGreenButton>
      <MainHeading>
        Chaos Engineering
        <br />
        for your Kubernetes
      </MainHeading>
      <Paragraph>
        Chaos Engineering is fundamental to increasing the resilience of today’s
        cloud native, highly dynamic applications and infrastructure. Kubernetes
        developers and SREs use Litmus to create, manage and monitor chaos
        workflows by extending Kubernetes itself.
      </Paragraph>
      <div style={{ marginTop: "1rem" }}>{flexibleButton}</div>
    </>
  );

  if (sm) {
    return <div style={{ marginTop: "5rem" }}>{HeadContent}</div>;
  } else if (md) {
    return <div style={{ marginTop: "5rem", width: "80%" }}>{HeadContent}</div>;
  } else {
    return (
      <BoundedContainer breakpoint="md" width="40%" margin="6rem 0">
        {HeadContent}
      </BoundedContainer>
    );
  }
};

const Head: React.FC = () => {
  return (
    <SectionDark
      style={{ background: "none", position: "relative", zIndex: 49 }}
    >
      <ResponsiveRow breakpoint="md">
        <HeadText />
        <div style={{ width: "45%" }} />
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };
