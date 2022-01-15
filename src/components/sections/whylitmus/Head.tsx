import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button } from "../../../components/button";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";

const HeaderContent: React.FC = () => {
  return (
    <div>
      <Heading>
        Find defects on your Kubernetes clusters and applications
      </Heading>
      <br />

      <Paragraph>
        Plan your chaos testing efforts seamless in a cloud-native way. Get
        started with ready to use experiments from ChaosHub. Develop new
        experiments with easy to use SDK. Schedule workflows and monitor them
        using Portal. Take control of resilience of your Kubernetes.
      </Paragraph>
      <br />
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://docs.litmuschaos.io/docs/getting-started/installation/"
      >
        <Button gradientColor="purple">Get Started</Button>
      </a>
    </div>
  );
};

// Component
const Head: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="35%" margin="0">
          <Center>
            <HeaderContent />
          </Center>
        </BoundedContainer>

        <BoundedContainer breakpoint="lg" width="65%" margin="0 0 0 2rem">
          <StaticImage
            src="../../../images/chaos-bird-steps.png"
            alt="Choas Bird climbing stairs towars resilience"
            placeholder="blurred"
          />
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };
