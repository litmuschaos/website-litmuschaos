import React from "react";
import styled, { useTheme } from "styled-components";
// import { useTheme } from "../styles";
import { Button, WhiteOnGreenButton } from "../../button";
import { BoundedContainer, ResponsiveRow, SectionDark } from "../../layout";
import { Paragraph } from "../../texts";

const MainHeading = styled.h1`
  margin: 1rem 0;
  line-height: 130%;
  font-size: ${props => (props.theme.screens.md ? "2rem" : "2.6rem")};
`;

// Components
const HeadText: React.FC = () => {
  const { sm, md } = useTheme().screens;

  const flexibleButton = <Button gradientColor="purple">Get Started</Button>;

  const HeadContent = (
    <>
      <WhiteOnGreenButton>CLOUD-NATIVE</WhiteOnGreenButton>
      <MainHeading>
        Chaos Engineering
        <br />
        for your Kubernetes
      </MainHeading>
      <Paragraph>
        Kubernetes developers and SREs use Litmus to create, manage and monitor
        chaos workflows. Resilience of your Kubernetes starts with finding a
        weakness and start fixing it.
      </Paragraph>
      <div style={{ marginTop: "1rem" }}>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.litmuschaos.io/docs/getstarted/"
        >
          {flexibleButton}
        </a>
      </div>
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
    <SectionDark>
      <ResponsiveRow breakpoint="md">
        <HeadText />
        <div style={{ width: "45%" }} />
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };
