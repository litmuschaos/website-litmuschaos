import React from "react";
import styled from "styled-components";
import { Heading, Paragraph } from "../../../components/texts";
import { ResponsiveRow } from "../../../components/layout";
import { Button } from "../../../components/button";
import { useTheme } from "../../../styles";

// Styles
const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 3rem;
  width: ${(props) => (!props.theme.screens.sm ? "35%" : "")};
`;

const CommunityImage = styled.img`
  width: 50%;
  margin: -5% 0;
`;

// Component
const Head: React.FC = () => {
  const { sm } = useTheme().screens;

  return (
    <div style={{ height: "100%" }}>
      <ResponsiveRow breakpoint="sm">
        {sm ? (
          <></>
        ) : (
          <CommunityImage src="./svg/CommunityBackground.svg" alt="Community" />
        )}
        <HeaderText style={{ marginTop: "5%" }}>
          <Heading>
            By the community,
            <br />
            for the community!
          </Heading>
          <Paragraph
            style={{
              margin: "2rem 0",
            }}
          >
            Created by our users, contributors, and adopters, the Litmus
            community truly believes in adding to the value of open source
            culture where serving the community is of utmost priority to us, and
            imparting the value of cloud-native chaos is all that matters.
            <br />
            <br />
            We welcome Kubernetes SREs and Developers to join this zealous
            community to learn and share all about cloud-native Chaos
            Engineering and help Kubernetes infrastructures be resilient. Let’s
            make this journey wonderful together.
          </Paragraph>
          <Button screen={sm ? "small" : "large"} gradientColor="purple">
            Get Started
          </Button>
        </HeaderText>
      </ResponsiveRow>
    </div>
  );
};

export { Head };
