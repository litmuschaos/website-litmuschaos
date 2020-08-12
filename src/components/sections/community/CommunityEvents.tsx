import React from "react";
import { Heading, Paragraph } from "../../../components/texts";
import {
  BoundedContainer,
  ResponsiveRow,
  SectionDark,
} from "../../../components/layout";
import { Card } from "../../../components/card";
import { CommunityText } from "./globalStyle";

const CommunityEvents: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="sm">
        <CommunityText>
          <Heading>Community Events</Heading>
          <Paragraph style={{ margin: "1rem 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            felis nec arcu eleifend scelerisque. Curabitur facilisis, nibh sit
            amet tincidunt porttitor, orci lorem accumsan ex, quis scelerisque
            quam ligula fringilla risus.
          </Paragraph>
        </CommunityText>
        <BoundedContainer width="40%" margin="0 auto">
          <ResponsiveRow breakpoint="sm">
            <ResponsiveRow breakpoint="sm">
              <Card
                width="90%"
                height="18rem"
                subheading="CNCF Meetup"
                body="Lorem Ipsum"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mariaclusters.com%2Fimg%2Findex%2Fcncf.png&f=1&nofb=1"
              />
            </ResponsiveRow>
            <ResponsiveRow breakpoint="sm">
              <Card
                width="90%"
                height="18rem"
                subheading="3rd Wednesday Meetup"
                body="Some type of meetup"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.mayadata.io%2Fhubfs%2F1.7Release-01-1.jpg%23keepProtocol&f=1&nofb=1"
              />
            </ResponsiveRow>
          </ResponsiveRow>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { CommunityEvents };
