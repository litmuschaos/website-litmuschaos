import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/button";
import { SectionLight } from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";

const CommunityText = styled.div`
  width: ${props => (props.theme.screens.sm ? "85%" : "60%")};
  margin: ${props => (props.theme.screens.sm ? "0 auto" : "0 5rem")};
  display: flex;
  flex-direction: column;
`;

const BlueTestTube = styled.img`
  position: absolute;
  width: ${props => (props.theme.screens.sm ? "5%" : "3%")};
  margin-top: ${props => (props.theme.screens.sm ? "-3%" : "6%")};
  left: ${props =>
    props.theme.screens.sm ? "85%" : props.theme.screens.xl ? "15%" : "20%"};
  transform: ${props =>
    props.theme.screens.sm ? "rotate(50deg)" : "rotate(0)"};
`;

const YellowTestTube = styled.img`
  display: ${props => (props.theme.screens.sm ? "none" : "block")};
  position: absolute;
  width: 3%;
  margin-top: -2%;
  left: ${props => (props.theme.screens.xl ? "12%" : "15%")};
`;

const GreenTestTube = styled.img`
  position: absolute;
  width: ${props => (props.theme.screens.sm ? "7%" : "3%")};
  margin-top: ${props => (props.theme.screens.sm ? "-10%" : "0")};
  left: ${props => (props.theme.screens.sm ? "90%" : "80%")};
  transform: ${props =>
    props.theme.screens.sm ? "rotate(-50deg)" : "rotate(0)"};
`;

// Component
const ReadyToStart: React.FC = () => {
  const paragraphText =
    "You have many ready to use generic chaos experiments. Choose a simple one like a pod-delete chaos and start your learning on chaos.";
  return (
    <SectionLight style={{ textAlign: "center" }}>
      <div>
        <YellowTestTube src="/svg/testTubeYellow.svg" alt="Yellow Test Tube" />

        <Heading textAlign="center" style={{ margin: "0 auto" }}>
          Ready to start using ChaosHub?
        </Heading>

        <BlueTestTube src="/svg/testTubeBlue.svg" alt="Blue Test Tube" />
        <GreenTestTube src="/svg/testTubeGreen.svg" alt="Green Test Tube" />

        <CommunityText style={{ margin: "2rem auto" }}>
          <Paragraph textAlign="center">{paragraphText}</Paragraph>
        </CommunityText>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://hub.litmuschaos.io/"
        >
          <Button style={{ margin: "3rem 0" }} gradientColor="purple">
            Go to ChaosHub
          </Button>
        </a>
      </div>
    </SectionLight>
  );
};

export { ReadyToStart };
