import React from "react";
import { Button } from "../../../components/button";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { CommunityImage } from "../../image-fetch/CommunityImage";

const HeaderContent: React.FC = () => {
  return (
    <div>
      <Heading>
        By the community,
        <br />
        for the community!
      </Heading>
      <br />

      <Paragraph>
        Created by our users, contributors, and adopters, the Litmus community
        truly believes in adding to the value of open source culture. Serving
        and listening to the community is a priority to us.
        <br />
        <br />
        We welcome Kubernetes SREs and Developers to join this zealous community
        to learn and share all about Cloud-Native Chaos Engineering. There are
        many contributors in our community who are ready to mentor those who
        want to contribute. Ask a question in our slack channel.
      </Paragraph>
      <br />

      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://docs.litmuschaos.io/docs/getstarted/"
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
        <BoundedContainer breakpoint="lg" width="60%" margin="0">
          <CommunityImage />
        </BoundedContainer>

        <BoundedContainer breakpoint="lg" width="40%" margin="2rem 0 0 2rem">
          <Center >
            <HeaderContent />
          </Center>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };

