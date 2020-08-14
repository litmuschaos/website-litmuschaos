import React from "react";
import styled from "styled-components";
import { Heading, Paragraph, Subheading } from "../../../components/texts";
import { ResponsiveRow, Row } from "../../../components/layout";
import { OutlinedButton } from "../../../components/button";
import { theme, useTheme } from "../../../styles";
import { OctocatSM, OctocatMD } from "../../imageFetch/Octocat";

// Styles
const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 3rem;
  width: ${(props) => (!props.theme.screens.sm ? "35%" : "")};
`;

const Contributing: React.FC = () => {
  const { sm } = useTheme().screens;
  return (
    <div style={{ height: "100%" }}>
      <ResponsiveRow breakpoint="sm">
        {sm ? <OctocatSM /> : <OctocatMD />}
        <HeaderText style={{ marginTop: "5%" }}>
          <Heading>Contributing</Heading>
          <Paragraph
            style={{
              margin: "2rem 0",
            }}
          >
            We invite contributions in all forms. Join us in writing blogs on
            DEV.to about experiments, features, and your experience. Use the
            #litmuschaos tag for your blog to get featured.
          </Paragraph>
          <OutlinedButton
            width="30%"
            backgroundColor={`${theme().colors.textSecondary}`}
          >
            <Row style={{ justifyContent: "center" }}>
              <img
                style={{
                  margin: "0 0.5rem",
                  filter:
                    "invert(20%) sepia(20%) saturate(2700%) hue-rotate(110deg) brightness(118%) contrast(119%)",
                }}
                src="./svg/Dev.svg"
                width="20"
                alt="Dev Icon"
              />
              <div>Go to dev.to</div>
            </Row>
          </OutlinedButton>
          <br />
          <br />
          <Subheading>Contribute your chaos experiments</Subheading>
          <Paragraph
            style={{
              margin: "2rem 0",
            }}
          >
            We are devoted to being an open source driven community and appeal
            to our community members to contribute chaos experiments, file
            issues, raise pull requests, and provide feedback to help enhance
            the user experience and bring in new enhancements to develop
            LitmusChaos.
            <br />
            <br />
            Begin now on CONTRIBUTING.md or check the CONTRIBUTING.md file in
            the respective Litmus repository for instructions on how to
            contribute. Feel free to discuss about your contributions on our
            slack channel.
          </Paragraph>

          <OutlinedButton
            width="55%"
            backgroundColor={`${theme().colors.textSecondary}`}
          >
            <Row style={{ justifyContent: "center" }}>
              <img
                style={{
                  margin: "0 0.5rem",
                  filter:
                    "invert(20%) sepia(20%) saturate(2700%) hue-rotate(110deg) brightness(118%) contrast(119%)",
                }}
                src="./svg/Github.svg"
                width="20"
                alt="Github Icon"
              />
              {sm ? (
                <div style={{ fontSize: "0.9rem" }}>
                  About contibuting on our GitHub
                </div>
              ) : (
                <div>About contibuting on our GitHub</div>
              )}
            </Row>
          </OutlinedButton>
        </HeaderText>
      </ResponsiveRow>
    </div>
  );
};

export { Contributing };
