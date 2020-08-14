import React from "react";
import { Button } from "../../../components/button";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { ChaosBirdSteps } from "../../imageFetch/ChaosBirdSteps";

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

      <Button gradientColor="purple">Get Started</Button>
    </div>
  );
};

// Component
const Head: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="md" width="35%" margin="0">
          <Center fullHeight={true}>
            <HeaderContent />
          </Center>
        </BoundedContainer>

        <BoundedContainer breakpoint="lg" width="65%" margin="0 0 0 2rem">
          <ChaosBirdSteps />
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };
