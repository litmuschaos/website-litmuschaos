import React from "react";
import { Card } from "../../../components/card";
import {
  BoundedContainer,
  ResponsiveRow,
  SectionLight,
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { CNCFImage } from "../../image-fetch/CNCF";
import { HacktoberFestImage } from "../../image-fetch/HacktoberFest";

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
            {/* <Card
              width="100%"
              height="100%"
              subheading="Community Sync Up"
              body="Meet and learn from the maintainers, contributors, and developers of Litmus everything about Chaos Engineering."
              image={<CommunitySyncUpImage />}
              link="https://zoom.us/j/91358162694"
            /> */}

            <Card
              width="100%"
              height="100%"
              subheading="HacktoberFest"
              body="Contribute to LitmusChaos and get a chance to win not only swags but also a grand prize and much more"
              image={<HacktoberFestImage />}
              link="https://mayadata.io/hacktoberfest-2020"
            />

            <Card
              width="100%"
              height="100%"
              subheading="Kubernetes Chaos Engineering Meetup"
              body=" Discussion about the best practices and tutorials for practicing chaos engineering"
              image={<CNCFImage />}
              link="https://community.cncf.io/events/details/cncf-kubernetes-chaos-engineering-meetup-group-presents-kubernetes-chaos-engineering-meetup-1/#/"
            />
          </ResponsiveRow>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionLight>
  );
};

export { CommunityEvents };
