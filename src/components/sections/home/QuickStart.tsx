import React from "react";
import styled, { css } from "styled-components";
import {
  BoundedContainer,
  ColumnCenter,
  ResponsiveRow,
  SectionLight,
} from "../../layout";
import { Heading, Paragraph, SubText } from "../../texts";
import { VideoFrame } from "../../videoBox";

const FadedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;
  margin-bottom: ${props => (props.theme.screens.xl ? "8rem" : "0")};
  ${props =>
    props.theme.screens.md
      ? css`
          width: 0.625rem;
          flex-direction: column;
          background: linear-gradient(
            0deg,
            rgba(235, 235, 235, 0) 0%,
            #ebebeb 10%,
            #ebebeb 85%,
            rgba(235, 235, 235, 0) 100%
          );
        `
      : css`
          width: 100%;
          height: 0.625rem;
          background: linear-gradient(
            90deg,
            rgba(235, 235, 235, 0) 0%,
            #ebebeb 10%,
            #ebebeb 85%,
            rgba(235, 235, 235, 0) 100%
          );
        `}
`;

const KnobOuter = styled.div`
  display: grid;
  place-items: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 9px 11px rgba(91, 68, 186, 0.15);
  ${props =>
    props.theme.screens.md
      ? css`
          position: absolute;
          margin-left: -0.4rem;
          width: 1.428rem;
          height: 1.428rem;
        `
      : css`
          position: relative;
          margin-top: -0.65rem;
          width: 2rem;
          height: 2rem;
        `}
`;

const KnobInner = styled.div`
  display: grid;
  place-items: center;
  background: ${props => props.theme.colors.darkGreen(1)};
  border-radius: 50%;
  ${props =>
    props.theme.screens.md
      ? css`
          width: 0.625rem;
          height: 0.625rem;
        `
      : css`
          width: 0.875rem;
          height: 0.875rem;
        `}
`;

const TextWrapper = styled.div`
  position: relative;
  width: ${({ theme }) => (theme.screens.md ? "80vw" : "fit-content")};
  padding: ${({ theme }) =>
    theme.screens.md ? "0 0 2.5rem 2.5rem" : "2rem 2rem 0 0"};
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
      <TextWrapper>
        <SubText>{text}</SubText>
      </TextWrapper>
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
        <Knob text="Install Litmus through helm chart" />
        <Knob text="Choose a workflow template" />
        <Knob text="Tune chaos experiments" />
        <Knob text="Schedule the workflow" />
        <Knob text="Find weaknesses if any" />
        <Knob text="Observe chaos analytics" />
      </FadedDiv>
    </SectionLight>
  );
};

export { QuickStart };
