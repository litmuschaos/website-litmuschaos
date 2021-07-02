import React from "react";
import { Button } from "../../../components/button";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { ChaoshubImage } from "../../image-fetch/ChaosHubImage";

const HeaderContent: React.FC = () => {
  return (
    <div>
      <Heading>
        A public repository for
        <br />
        Kubernetes Chaos
        <br />
        Experiments
      </Heading>
      <br />

      <Paragraph>
        It is all about sharing with the community. Chaos experiments are no
        different. The success of your chaos engineering efforts in your
        organization depends on the extent of chaos scenarios you built in into
        them. The ready chaos experiments on the hub can help cover a major
        chunk of them.
      </Paragraph>
      <br />
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://hub.litmuschaos.io/"
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
        <BoundedContainer breakpoint="lg" width="50%" margin="-4rem 0">
          <ChaoshubImage />
        </BoundedContainer>

        <BoundedContainer
          breakpoint="lg"
          width="50%"
          margin="-4rem 0 -4rem 2rem"
        >
          <Center >
            <HeaderContent />
          </Center>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };

