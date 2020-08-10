import React from "react";
import { Layout, ResponsiveRow } from "../components/layout";
import { SEO } from "../components/seo";
import styled from "styled-components";
import { Button } from "../components/button";
import { Slack } from "../components/slack";
import { BoundedContainer } from "../components/layout";
import { useTheme, theme } from "../styles";

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

const CommunityText = styled.div`
  width: ${(props) => (props.theme.screens.sm ? "80%" : "40%")};
  margin: ${(props) => (props.theme.screens.sm ? "0 auto" : "")};
  display: flex;
  flex-direction: column;
`;

const CommunityTextList = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

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
  margin-top: ${(props) => (props.theme.screens.sm ? "90%" : "")};
  left: ${(props) => (props.theme.screens.sm ? "50%" : "10%")};
`;

const GreenTestTube = styled.img`
  position: absolute;
  width: ${(props) => (props.theme.screens.sm ? "15%" : "3%")};
  margin-top: ${(props) => (props.theme.screens.sm ? "105%" : "6%")};
  left: ${(props) => (props.theme.screens.sm ? "65%" : "45%")};
`;

const H1 = styled.h1`
  font-size: 1.7rem;
`;

const SlackBox = styled.div`
  margin: ${(props) => (props.theme.screens.sm ? "0 auto" : "0 2rem")};
  width: ${(props) => (props.theme.screens.sm ? "80%" : "25%")};
  box-shadow: -0.2rem 0.3rem 0.7rem 0.1rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
`;

// Components
const Header: React.FC = () => {
  const { sm } = useTheme().screens;

  return (
    <div style={{ height: "100%" }}>
      <ResponsiveRow>
        {sm ? (
          <></>
        ) : (
          <CommunityImage src="./svg/CommunityBackground.svg" alt="Community" />
        )}
        <HeaderText style={{ marginTop: "5%" }}>
          <H1>
            By the community,
            <br />
            for the community!
          </H1>
          <p
            style={{
              fontSize: "0.9rem",
              margin: "2rem 0",
              color: theme().colors.darkGrey,
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
          </p>
          <Button screen={sm ? "small" : "large"} gradientColor="purple">
            Get Started
          </Button>
        </HeaderText>
      </ResponsiveRow>
    </div>
  );
};

const JoinOurCommunity: React.FC = () => {
  return (
    <div
      style={{ background: theme().colors.backgroundDark, padding: "5rem 0" }}
    >
      <ResponsiveRow>
        <CommunityText>
          <H1>Join our Community meetings</H1>
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
            <ResponsiveRow>
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
    </div>
  );
};

const Community = () => {
  return (
    <Layout>
      <SEO />
      <BoundedContainer width="95%" margin="1rem auto">
        <Header />
      </BoundedContainer>
      <BoundedContainer width="100%" margin="0">
        <JoinOurCommunity />
      </BoundedContainer>
    </Layout>
  );
};

export default Community;
