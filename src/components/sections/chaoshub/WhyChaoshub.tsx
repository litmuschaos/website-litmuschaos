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
import { Heading, Paragraph, PurpleText, SubText } from "../../texts";

const UsefulLinks = styled.ul`
  li {
    list-style: none;
    display: flex;
    margin: 0.5rem 0;
  }

  li img {
    margin: 0 1rem;
    width: 2%;
  }
`;

const Divider = styled.hr`
  border: 1px solid rgba(16, 155, 103, 0.25);
`;

const UsefulLinksContent = (
  <>
    <UsefulLinks>
      <li>
        <SubText>Useful links</SubText>
      </li>
      <br />
      <li>
        <img src="./svg/circleListIcon.svg" alt="hashtag" />
        <PurpleText style={{ fontSize: "1rem" }} underline={true}>
          How to use ChaosHub?
        </PurpleText>
      </li>
      <li>
        <img src="./svg/circleListIcon.svg" alt="hashtag" />
        <PurpleText style={{ fontSize: "1rem" }} underline={true}>
          Your own private hub?
        </PurpleText>
      </li>
      <li>
        <img src="./svg/circleListIcon.svg" alt="hashtag" />
        <PurpleText style={{ fontSize: "1rem" }} underline={true}>
          Contributing new experiments
        </PurpleText>
      </li>
    </UsefulLinks>
  </>
);

const WhyChaoshubContent = (
  <>
    <Heading>Why ChaosHub?</Heading>
    <br />
    <Divider />
    <Row>
      <div
        style={{
          margin: "1rem 1rem",
          fontSize: "4rem",
          fontWeight: "bold",
          height: "100%",
          color: "#109B67",
        }}
      >
        &#60;90%
      </div>
      <Paragraph
        style={{
          margin: "1rem 0",
          height: "100%",
        }}
      >
        of the resilience of your service depends on fixing or tuning the
        weaknesses in the configuration or code of the rest of micro services
        including Kubernetes.
      </Paragraph>
    </Row>
    <Divider />
    <Paragraph
      style={{
        margin: "2rem 0",
      }}
    >
      You will need chaos experiments to cover most of the micro services and
      they need to be continously updated with the changes in the micro
      services. LitmusChaos project encourages community to contribute their
      experiments to a central place so that their end users can use them and
      stay resilient. This central place is Litmus ChaosHub.
    </Paragraph>
  </>
);

// Component
const WhyChaoshub: React.FC = () => {
  const { sm } = useTheme().screens;
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="0 0 0 2rem">
          <>{WhyChaoshubContent}</>
        </BoundedContainer>
        <BoundedContainer breakpoint="md" width="50%" margin="1rem 0">
          {sm ? (
            <>{UsefulLinksContent}</>
          ) : (
            <Center fullHeight={false}>{UsefulLinksContent}</Center>
          )}
        </BoundedContainer>
      </ResponsiveRow>
    </SectionLight>
  );
};

export { WhyChaoshub };
