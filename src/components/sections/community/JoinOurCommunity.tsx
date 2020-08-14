import React from "react";
import styled from "styled-components";
import { Heading } from "../../../components/texts";
import { Slack } from "../../../components/slack";
import { ResponsiveRow, SectionLight } from "../../../components/layout";
import { CommunityText } from "./globalStyle";
import { theme } from "../../../styles";

// Styles
const CommunityTextList = styled.div`
  width: 100%;
  margin: ${(props) => (props.theme.screens.sm ? "0" : "0 4%")};
  display: flex;
  flex-direction: column;

  ul {
    margin: 1rem 0.5rem;
    padding: 0 2rem;
    width: ${(props) => (props.theme.screens.sm ? "50%" : "100%")};
  }

  li {
    list-style: none;
    display: flex;
    margin: 0.5rem -3rem;
    font-size: 0.7rem;
  }

  li img {
    margin: 0 0.5rem;
    width: 3%;
  }

  .importantLinks {
    width: 2%;
  }
`;

const BlueTestTube = styled.img`
  position: absolute;
  width: ${(props) => (props.theme.screens.sm ? "15%" : "3%")};
  margin-top: ${(props) => (props.theme.screens.sm ? "13rem" : "")};
  left: ${(props) =>
    props.theme.screens.sm
      ? "50%"
      : props.theme.screens.md
      ? "8%"
      : props.theme.screens.xl
      ? "8%"
      : "10%"};
`;

const GreenTestTube = styled.img`
  position: absolute;
  width: ${(props) => (props.theme.screens.sm ? "15%" : "3%")};
  margin-top: ${(props) =>
    props.theme.screens.sm
      ? "17rem"
      : props.theme.screens.md
      ? "6%"
      : props.theme.screens.xl
      ? "8%"
      : "6%"};
  left: ${(props) =>
    props.theme.screens.sm
      ? "65%"
      : props.theme.screens.md
      ? "50%"
      : props.theme.screens.xl
      ? "40%"
      : "45%"};
`;

const SlackBox = styled.div`
  margin: ${(props) =>
    props.theme.screens.sm
      ? "0 auto"
      : props.theme.screens.md
      ? "0"
      : "0 2rem"};
  width: ${(props) =>
    props.theme.screens.sm ? "80%" : props.theme.screens.md ? "40%" : "100%%"};
  height: ${(props) =>
    props.theme.screens.sm ? "100%" : props.theme.screens.md ? "100%" : "100%"};
  box-shadow: -0.2rem 0.3rem 0.7rem 0.1rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
`;

// Component
const JoinOurCommunity: React.FC = () => {
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="sm">
        <CommunityText>
          <Heading>Join our Community meetings</Heading>
          <p style={{ margin: "1rem 0", color: theme().colors.textSecondary }}>
            We meet on every 3rd saturday of the month!
          </p>

          <BlueTestTube src="./svg/testTubeBlue.svg" alt="Blue Test Tube" />
          <GreenTestTube src="./svg/testTubeGreen.svg" alt="Green Test Tube" />

          <div
            style={{
              width: "80%",
              margin: "1rem 0",
            }}
          >
            <ResponsiveRow breakpoint="sm">
              <CommunityTextList>
                <p>Topics we discuss</p>
                <ul>
                  <li>
                    <img src="./svg/hashtag.svg" alt="hashtag" />
                    Litmus Arch in Intuit
                  </li>
                  <li>
                    <img src="./svg/hashtag.svg" alt="hashtag" />
                    Contributor Experiences & Insights
                  </li>
                  <li>
                    <img src="./svg/hashtag.svg" alt="hashtag" />
                    SIG-Documentation Charter
                  </li>
                  <li style={{ marginLeft: "-1.5rem" }}>and many more!</li>
                </ul>
              </CommunityTextList>
              <CommunityTextList>
                <p>Important Links</p>
                <ul>
                  <li>
                    <img
                      className="importantLinks"
                      src="./svg/circleListIcon.svg"
                      alt="Circle List Icon"
                    />
                    Meeting
                  </li>
                  <li>
                    <img
                      className="importantLinks"
                      src="./svg/circleListIcon.svg"
                      alt="Circle List Icon"
                    />
                    Meta Repository
                  </li>
                  <li>
                    <img
                      className="importantLinks"
                      src="./svg/circleListIcon.svg"
                      alt="Circle List Icon"
                    />
                    Release Tracker
                  </li>
                </ul>
              </CommunityTextList>
            </ResponsiveRow>
          </div>
        </CommunityText>
        <SlackBox>
          <Slack />
        </SlackBox>
      </ResponsiveRow>
    </SectionLight>
  );
};

export { JoinOurCommunity };
