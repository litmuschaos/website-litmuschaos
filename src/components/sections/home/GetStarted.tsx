import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../styles";
import { IconCircle } from "../../icon-circle";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../../layout";
import { Terminal } from "../../terminal";
import { Heading, Paragraph, SubText, UnderlinedPurpleText } from "../../texts";

const FadedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 0.625rem;
  margin-left: 2rem;
  background: ${props => props.theme.gradient.fadedLine(0)};
`;

const Wrapper = styled.div`
  width: ${props => (props.theme.screens.md ? "80vw" : "40vw")};
  padding-top: ${props => (props.theme.screens.md ? "2rem" : "1rem")};
  margin-left: -1.4rem;
`;

interface IStep {
  bullet: string;
  title: string;
  description: string;
}

const Step: React.FC<IStep> = ({ bullet, title, description }) => {
  const { gradient, colors } = useTheme();
  return (
    <div style={{ display: "flex" }}>
      <IconCircle
        bgColor={gradient.green}
        effectColor={colors.darkGreen}
        size={3.25}
      >
        <SubText textAlign="center" color="#fff" fontWeight="600">
          {bullet}
        </SubText>
      </IconCircle>
      <div style={{ padding: "0.5rem 0 0 2rem" }}>
        <UnderlinedPurpleText>{title}</UnderlinedPurpleText>
        <br />
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

const GetStartedSteps: React.FC = () => {
  return (
    <BoundedContainer breakpoint="md" width="50%" margin="0">
      <FadedDiv>
        <Wrapper>
          <Step
            bullet="1"
            title="Install Litmus"
            description="Install Litmus with a helm chart. Default options will get you a
          minimal version of Litmus to run or schedule individual chaos
          experiments."
          />
          <Step
            bullet="2"
            title="Get experiments"
            description="Install Litmus with a helm chart. Default options will get you a
          minimal version of Litmus to run or schedule individual chaos
          experiments."
          />
          <Step
            bullet="3"
            title="Run chaos"
            description="Create a chaos engine and attach the experiments you have installed. Run the chaos engine manifest through kubectl to run your chaos experiment."
          />
        </Wrapper>
      </FadedDiv>
    </BoundedContainer>
  );
};

const GetStarted: React.FC = () => {
  return (
    <SectionDark>
      <Heading textAlign="center">Get started with Litmus</Heading>
      <ResponsiveRow breakpoint="md" alignItems="start">
        <BoundedContainer breakpoint="md" width="50%" margin="0">
          <Center>
            <Terminal />
          </Center>
        </BoundedContainer>
        <GetStartedSteps />
      </ResponsiveRow>
    </SectionDark>
  );
};

export { GetStarted };
