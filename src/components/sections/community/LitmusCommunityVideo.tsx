import React from "react";
import { Button } from "../../../components/button";
import { SectionDark } from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { VideoFrame } from "../../../components/videoBox";
import { useTheme } from "../../../styles";
import { CommunityText } from "./globalStyle";

// Component
const LitmusCommunityVideo: React.FC = () => {
  const { sm } = useTheme().screens.sm;

  const paragraphText =
    "Creating chaos on YouTube. Subscribe to our channel for early updates on meeting recordings, tutorials, events and more";
  return (
    <SectionDark style={{ textAlign: "center" }}>
      <Heading textAlign="center" style={{ margin: "0 auto" }}>
        See what’s happening in
        <br />
        the Litmus community
      </Heading>

      <CommunityText style={{ margin: "2rem auto" }}>
        <Paragraph textAlign="center">{paragraphText}</Paragraph>
      </CommunityText>

      <VideoFrame
        width="47.188rem"
        src="https://www.youtube.com/embed/yhWgzN90SME"
      />

      <Button
        style={{ margin: "3rem 0" }}
        screen={sm ? "small" : "large"}
        gradientColor="purple"
      >
        Visit Our Youtube
      </Button>
    </SectionDark>
  );
};

export { LitmusCommunityVideo };
