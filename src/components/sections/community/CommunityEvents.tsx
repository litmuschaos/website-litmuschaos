import React from "react";
import { Card } from "../../../components/card";
import {
  BoundedContainer,
  ResponsiveRow,
  SectionLight,
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { CNCFImage } from "../../image-fetch/CNCF";
import { CommunitySyncUpImage } from "../../image-fetch/CommunitySyncUp";

const CommunityEvents: React.FC = () => {
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="xl">
        <BoundedContainer breakpoint="xl" width="40%" margin="0 2rem 0 0">
          <Heading>Community Events</Heading>
          <Paragraph style={{ margin: "1rem 0" }}>
            Our resolve is to reach the global community and escalate the value
            of Cloud-Native Chaos Engineering among Kubernetes Developers and
            SREs. We organize meetups every month to reach out to the community.
            Join into one of our meetups and experience the real aura of Chaos.
            You can also conduct your own meetup, join our community, and put
            forward your idea.
          </Paragraph>
        </BoundedContainer>
        <BoundedContainer breakpoint="xl" width="40rem" margin="0 auto">
          <ResponsiveRow breakpoint="xl">
            <Card
              width="100%"
              height="100%"
              subheading="Kubernetes Chaos Engineering Meetup"
              body=" Discussion about the best practices and tutorials for practicing chaos engineering"
              image={<CNCFImage />}
            />

            <Card
              width="100%"
              height="100%"
              subheading="Community Sync Up"
              body="Meet and learn from the maintainers, contributors, and developers of Litmus everything about Chaos Engineering."
              image={<CommunitySyncUpImage />}
            />
          </ResponsiveRow>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionLight>
  );
};

export { CommunityEvents };
