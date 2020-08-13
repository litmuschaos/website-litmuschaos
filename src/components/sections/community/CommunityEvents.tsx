import React from "react";
import { Card } from "../../../components/card";
import {
  BoundedContainer,
  ResponsiveRow,
  SectionDark,
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { CommunityText } from "./globalStyle";

const CommunityEvents: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="sm">
        <CommunityText>
          <Heading>Community Events</Heading>
          <Paragraph style={{ margin: "1rem 0" }}>
            Our resolve is to reach the global community and escalate the value
            of Cloud-Native Chaos Engineering among Kubernetes Developers and
            SREs. We organize meetups every month to reach out to the community.
            Join into one of our meetups and experience the real aura of Chaos.
            You can also conduct your own meetup, join our community, and put
            forward your idea.
          </Paragraph>
        </CommunityText>
        <BoundedContainer breakpoint="sm" width="40%" margin="0 auto">
          <ResponsiveRow breakpoint="sm">
            <Card
              width="100%"
              height="100%"
              subheading="CNCF Meetup"
              body=" Discussion about the best practices and tutorials for practicing chaos engineering"
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mariaclusters.com%2Fimg%2Findex%2Fcncf.png&f=1&nofb=1"
            />

            <Card
              width="100%"
              height="100%"
              subheading="Community Sync Up"
              body="Meet and learn from the maintainers, contributors, and developers of Litmus"
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.mayadata.io%2Fhubfs%2F1.7Release-01-1.jpg%23keepProtocol&f=1&nofb=1"
            />
          </ResponsiveRow>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { CommunityEvents };
