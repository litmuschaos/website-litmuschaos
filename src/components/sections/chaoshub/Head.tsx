import React from "react";
import { Button } from "../../../components/button";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { ChaoshubImage } from "../../image-fetch/ChaosHubImage";

const HeaderContent: React.FC = () => {
  return (
    <div>
      <Heading>
        Your Experiments for
        <br />
        Kubernetes are ready!
      </Heading>
      <br />

      <Paragraph>
        It is all about sharing with the community. Chaos experiments are no
        different. The success of your chaos engineering efforts in your
        organization depends on the extent of chaos scenarios you build in into
        them. Chaos experiments can help.
      </Paragraph>
      <br />
      <a target="_blank" href="https://hub.litmuschaos.io/">
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
        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <ChaoshubImage />
        </BoundedContainer>

        <BoundedContainer breakpoint="lg" width="50%" margin="2rem 0 0 2rem">
          <Center fullHeight={true}>
            <HeaderContent />
          </Center>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };
