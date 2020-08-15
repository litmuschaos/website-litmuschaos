import React from "react";
import styled from "styled-components";
import {
  BoundedContainer,
  ResponsiveRow,
  SectionLight,
} from "../../../components/layout";
import { Slack } from "../../../components/slack";
import {
  Heading,
  Paragraph,
  PurpleText,
  SubText,
} from "../../../components/texts";

// Styles
const CommunityTextList = styled.div`
  width: 100%;

  ul {
    margin: 1rem 0.5rem;
    padding: 0;
  }

  li {
    list-style: none;
    display: flex;
    margin: 0.5rem 0;
  }

  li img {
    margin-right: 0.5rem;
    width: 0.8rem;
  }
`;

const BlueTestTube = styled.img`
  position: absolute;
  width: ${(props) => (props.theme.screens.sm ? "15%" : "3%")};
  margin-top: ${(props) => (props.theme.screens.sm ? "10rem" : "-8rem")};
  left: ${(props) =>
    props.theme.screens.sm
      ? "50%"
      : props.theme.screens.md
      ? "8%"
      : props.theme.screens.mmd
      ? "5%"
      : props.theme.screens.xl
      ? "13%"
      : props.theme.screens.xxxl
      ? "8%"
      : "14%"};
`;

const GreenTestTube = styled.img`
  position: absolute;
  width: ${(props) => (props.theme.screens.sm ? "15%" : "3%")};
  margin-top: ${(props) =>
    props.theme.screens.sm
      ? "12rem"
      : props.theme.screens.xl
      ? "-4rem"
      : props.theme.screens.xxxl
      ? "-3rem"
      : "-3rem"};
  left: ${(props) =>
    props.theme.screens.sm
      ? "65%"
      : props.theme.screens.mmd
      ? "80%"
      : props.theme.screens.xl
      ? "70%"
      : props.theme.screens.xxxl
      ? "49%"
      : "47%"};
`;

const GreenDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 1rem;
  margin-top: 0.4rem;
  background-color: ${(props) => props.theme.colors.darkGreen(1)};
`;

// Component
const JoinOurCommunity: React.FC = () => {
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="xl">
        <BoundedContainer breakpoint="xl" width="60%" margin="0">
          <Heading>Join our Community meetings</Heading>
          <br />
          <PurpleText fontSize="subHeading" underline={false} fontWeight={500}>
            We meet on every 3rd saturday of the month!
          </PurpleText>
          <br />
          <BlueTestTube src="./svg/testTubeBlue.svg" alt="Blue Test Tube" />
          <GreenTestTube src="./svg/testTubeGreen.svg" alt="Green Test Tube" />

          <ResponsiveRow breakpoint="sm">
            <CommunityTextList>
              <SubText>Topics we discuss</SubText>
              <ul>
                <li>
                  <img src="/svg/hashtag.svg" alt="hashtag" />
                  <Paragraph>Litmus Arch in Intuit</Paragraph>
                </li>
                <li>
                  <img src="/svg/hashtag.svg" alt="hashtag" />
                  <Paragraph>Contributor Experiences & Insights</Paragraph>
                </li>
                <li>
                  <img src="/svg/hashtag.svg" alt="hashtag" />
                  <Paragraph>SIG-Documentation Charter</Paragraph>
                </li>
                <Paragraph style={{ marginLeft: "1.2rem" }}>
                  and many more!
                </Paragraph>
              </ul>
            </CommunityTextList>

            <CommunityTextList>
              <SubText>Important Links</SubText>
              <ul>
                <li>
                  <GreenDot />
                  <PurpleText
                    fontSize="paragraph"
                    fontWeight={400}
                    underline={true}
                  >
                    Meeting
                  </PurpleText>
                </li>
                <li>
                  <GreenDot />
                  <PurpleText
                    fontSize="paragraph"
                    fontWeight={400}
                    underline={true}
                  >
                    Meta Repository
                  </PurpleText>
                </li>
                <li>
                  <GreenDot />
                  <PurpleText
                    fontSize="paragraph"
                    fontWeight={400}
                    underline={true}
                  >
                    Release Tracker
                  </PurpleText>
                </li>
              </ul>
            </CommunityTextList>
          </ResponsiveRow>
        </BoundedContainer>

        <Slack />
      </ResponsiveRow>
    </SectionLight>
  );
};

export { JoinOurCommunity };
