import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../styles";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  Row,
  SectionLight,
} from "../../layout";
import {
  GreenStats,
  Heading,
  Paragraph,
  PurpleText,
  SubHeading,
} from "../../texts";

const UsefulLinks = styled.ul`
  li {
    list-style: none;
    display: flex;
    margin: 0.5rem 0;
  }

  li img {
    margin-right: 1rem;
    width: 0.5rem;
  }
`;

const GreenDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 1rem;
  margin-top: 0.4rem;
  background-color: ${props => props.theme.colors.darkGreen(1)};
`;

const Divider = styled.hr`
  border: 1px solid ${props => props.theme.colors.darkGreen(0.25)};
`;

const UsefulLinksContent: React.FC = () => {
  return (
    <div>
      <SubHeading style={{ fontWeight: 500 }}>Useful links</SubHeading>
      <UsefulLinks>
        <li>
          <GreenDot />
          <PurpleText style={{ fontSize: "1rem" }} underline={true}>
            How to use ChaosHub?
          </PurpleText>
        </li>
        <li>
          <GreenDot />
          <PurpleText style={{ fontSize: "1rem" }} underline={true}>
            Your own private hub?
          </PurpleText>
        </li>
        <li>
          <GreenDot />
          <PurpleText style={{ fontSize: "1rem" }} underline={true}>
            Contributing new experiments
          </PurpleText>
        </li>
      </UsefulLinks>
    </div>
  );
};

const WhyChaoshubContent: React.FC = () => {
  return (
    <>
      <Heading>Why ChaosHub?</Heading>
      <br />
      <Divider />
      <Row>
        <GreenStats style={{ margin: "1rem 1rem" }}>&#60;90%</GreenStats>
        <Paragraph style={{ margin: "1rem 0" }}>
          of the resilience of your service depends on fixing or tuning the
          weaknesses in the configuration or code of the rest of micro services
          including Kubernetes.
        </Paragraph>
      </Row>
      <Divider />
      <Paragraph style={{ margin: "2rem 0" }}>
        You will need chaos experiments to cover most of the micro services and
        they need to be continously updated with the changes in the micro
        services. LitmusChaos project encourages community to contribute their
        experiments to a central place so that their end users can use them and
        stay resilient. This central place is Litmus ChaosHub.
      </Paragraph>
    </>
  );
};

// Component
const WhyChaoshub: React.FC = () => {
  const { lg } = useTheme().screens;
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="0 0 0 2rem">
          <WhyChaoshubContent />
        </BoundedContainer>
        <BoundedContainer breakpoint="lg" width="50%" margin="1rem 0">
          {lg ? (
            <UsefulLinksContent />
          ) : (
            <Center fullHeight={false}>
              <UsefulLinksContent />
            </Center>
          )}
        </BoundedContainer>
      </ResponsiveRow>
    </SectionLight>
  );
};

export { WhyChaoshub };
