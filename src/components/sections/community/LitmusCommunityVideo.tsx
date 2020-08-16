import React from "react";
import { Button } from "../../../components/button";
import { BoundedContainer, SectionDark } from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { VideoFrame } from "../../video-box";

// Component
const LitmusCommunityVideo: React.FC = () => {
  const paragraphText =
    "We update recordings of our events on YouTube. Subscribe to our channel for early updates on meeting recordings, tutorials, events and more";
  return (
    <SectionDark style={{ textAlign: "center" }}>
      <Heading textAlign="center" style={{ margin: "0 auto" }}>
        See what’s happening in
        <br />
        the Litmus community
      </Heading>

      <BoundedContainer breakpoint="sm" width="80%" margin="2rem auto">
        <Paragraph textAlign="center">{paragraphText}</Paragraph>
      </BoundedContainer>

      <VideoFrame
        width="47.188rem"
        src="https://www.youtube.com/embed/t3KygaEYCuU"
      />

      <a
        rel="noopener noreferrer"
        target="_target"
        href="https://www.youtube.com/channel/UCa57PMqmz_j0wnteRa9nCaw"
      >
        <Button style={{ margin: "3rem 0" }} gradientColor="purple">
          Visit Our Youtube
        </Button>
      </a>
    </SectionDark>
  );
};

export { LitmusCommunityVideo };
