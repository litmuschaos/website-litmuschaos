import React from "react";
import styled from "styled-components";
import {
  BoundedContainer,
  ColumnCenter,
  ResponsiveRow,
  Row,
  SectionLight,
} from "../../layout";
import { Heading, Paragraph, SubText } from "../../texts";
import { VideoFrame } from "../../videoBox";

const FadedDiv = styled.div`
  width: 100%;
  height: 0.625rem;
  margin-top: 4.5rem;
  margin-bottom: ${props => (props.theme.screens.xl ? "8rem" : "0")};
  background: linear-gradient(
    90deg,
    rgba(235, 235, 235, 0) 0%,
    #ebebeb 10%,
    #ebebeb 85%,
    rgba(235, 235, 235, 0) 100%
  );
`;

const KnobOuter = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  top: 0.35rem;
  width: 2rem;
  height: 2rem;
  background: white;
  border-radius: 50%;
  margin-top: -1rem;
  box-shadow: 0px 9px 11px rgba(91, 68, 186, 0.15);
`;

const KnobInner = styled.div`
  display: grid;
  place-items: center;
  width: 0.875rem;
  height: 0.875rem;
  background: ${props => props.theme.colors.darkGreen(1)};
  border-radius: 50%;
`;

interface IKnob {
  text: string;
}

const Knob: React.FC<IKnob> = ({ text }) => {
  return (
    <div>
      <KnobOuter>
        <KnobInner />
      </KnobOuter>
      <div style={{ padding: "2rem 2rem 0 0" }}>
        <SubText>{text}</SubText>
      </div>
    </div>
  );
};

const QuickStart: React.FC = () => {
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="md">
        <BoundedContainer breakpoint="md" width="35%" margin="0 0 2rem 0">
          <ColumnCenter>
            <Heading>Start in minutes not in days</Heading>
            <Paragraph>
              A chaos workflow can be scheduled within minutes from scratch with
              almost no learning curve. Th initial start of your chaos
              engineering journey is straight forward.
            </Paragraph>
          </ColumnCenter>
        </BoundedContainer>
        <VideoFrame
          width="40rem"
          src="https://www.youtube.com/embed/yhWgzN90SME"
        />
      </ResponsiveRow>
      <FadedDiv>
        <Row>
          <Knob text="Install Litmus through helm chart" />
          <Knob text="Choose a workflow template" />
          <Knob text="Tune chaos experiments" />
          <Knob text="Schedule the workflow" />
          <Knob text="Find weaknesses if any" />
          <Knob text="Observe chaos analytics" />
        </Row>
      </FadedDiv>
    </SectionLight>
  );
};

export { QuickStart };
