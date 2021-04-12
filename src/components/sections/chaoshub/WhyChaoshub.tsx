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
  background-color: ${(props) => props.theme.colors.darkGreen(1)};
`;

const Divider = styled.hr`
  border: 1px solid ${(props) => props.theme.colors.darkGreen(0.25)};
`;

const UsefulLinksContent: React.FC = () => {
  return (
    <div>
      <SubHeading style={{ fontWeight: 500 }}>Useful links</SubHeading>
      <UsefulLinks>
        <li>
          <GreenDot />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.litmuschaos.io/docs/chaoshub/"
          >
            <PurpleText fontSize="paragraph" fontWeight={500}>
              How to use ChaosHub?
            </PurpleText>
          </a>
        </li>
        <li>
          <GreenDot />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.litmuschaos.io/docs/chaos-workflows/"
          >
            <PurpleText fontSize="paragraph" fontWeight={500}>
              Your own Chaos Workflows
            </PurpleText>
          </a>
        </li>
        <li>
          <GreenDot />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/litmuschaos/chaos-charts/blob/master/CONTRIBUTING.md"
          >
            <PurpleText fontSize="paragraph" fontWeight={500}>
              Contributing new experiments
            </PurpleText>
          </a>
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
        <GreenStats style={{ margin: "1rem 1rem" }}>&gt;90%</GreenStats>
        <Paragraph style={{ margin: "1rem 0" }}>
          The resilience of your service depends not just on your application
          but on the stability or implementation of other cloud-native
          applications or Kubernetes platform. More than 90% of the times your
          service can get affected because some other application is not
          resilient.
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
