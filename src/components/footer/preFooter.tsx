import React from "react";
import styled from "styled-components";
import { Row, ResponsiveRow, BoundedContainer, SectionLight } from "../layout";
import { top_adopters } from "./data";
import { Heading, Paragraph, Subheading } from "../../components/texts";
import { Button } from "../button";
import { CommunityText } from "../sections/community";
import { useTheme } from "../../styles";

const Image = styled.img`
  width: ${(props) => (props.theme.screens.sm ? "3.5rem" : "18%")};
  display: flex;
`;

const HorizontalSpacing = styled.div`
  width: ${(props) => (props.theme.screens.sm ? "100%" : "80%")};
  margin-bottom: 2rem;
`;

const BlueBackgroundEllipse = styled.img`
  position: relative;
  top: ${(props) => (props.theme.screens.xl ? "20%" : "-15%")};
  width: 100%;
`;

const CNCFBlock = styled.div`
  position: relative;
  z-index: 1;
  background: ${(props) => props.theme.colors.backgroundLight};
  width: ${(props) => (props.theme.screens.xl ? "100%" : "35rem")};
  border-radius: 0.5rem;
  box-shadow: -0.2rem 0.3rem 0.7rem 0.1rem rgba(0, 0, 0, 0.3);
  height: ${(props) => (props.theme.screens.xl ? "7rem" : "10rem")};
  margin-top: ${(props) =>
    props.theme.screens.sm ? "0" : props.theme.screens.xl ? "-50%" : "-70%"};
`;

const CNCFText = styled.div`
  position: relative;
  z-index: 1;
  width: ${(props) =>
    props.theme.screens.sm ? "100%" : props.theme.screens.xl ? "80%" : "50%"};
  margin: 2rem auto;
`;

const CNCFLogo = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: ${(props) => (props.theme.screens.sm ? "15rem" : "25rem")};
`;

const HorizontalWrap = styled.div`
  margin: ${(props) => (props.theme.screens.sm ? "0 2rem" : "0 5rem")};
  width: 85%;
`;

const PreFooterLow: React.FC = () => {
  const { sm } = useTheme().screens;

  return (
    <SectionLight>
      <ResponsiveRow breakpoint="sm">
        <CommunityText>
          <Heading>Create, Manage and Monitor Chaos on Kubernetes</Heading>
          <Paragraph style={{ margin: "1rem 0" }}>
            Litmus is highly extensible and integrates with other tools to
            enable the creation of custom experiments. Kubernetes developers &
            SREs use Litmus to manage chaos in a declarative manner and find
            weaknesses in their applications and infrastructure
          </Paragraph>
          <Button
            style={{ margin: "2rem 0" }}
            screen={sm ? "large" : "small"}
            gradientColor="purple"
          >
            Get started with Litmus
          </Button>
        </CommunityText>
        <BoundedContainer breakpoint="sm" width="40%" margin="0 auto">
          <ResponsiveRow breakpoint="sm">
            {sm ? (
              <CNCFBlock>
                <CNCFLogo src="./svg/cncf.svg" alt="CNCF" />
              </CNCFBlock>
            ) : (
              <div>
                <BlueBackgroundEllipse
                  src="./svg/BlueBackgroundEllipse.svg"
                  alt="Community"
                />
                <CNCFBlock>
                  <CNCFLogo src="./svg/cncf.svg" alt="CNCF" />
                </CNCFBlock>
              </div>
            )}
          </ResponsiveRow>
          <CNCFText>
            <Paragraph textAlign="center">
              We are a Cloud Native Computing Foundation sandbox project
            </Paragraph>
          </CNCFText>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionLight>
  );
};

const PreFooterUp: React.FC = () => {
  const { sm } = useTheme().screens;
  return (
    <SectionLight>
      <div style={{ width: "100%" }}>
        <BoundedContainer breakpoint="sm" width="100%" margin="0">
          <ResponsiveRow
            breakpoint="sm"
            style={{ justifyContent: "space-between" }}
          >
            <HorizontalWrap>
              <Subheading style={{ margin: "0.5rem 0" }}>Created by</Subheading>
              <img src="./svg/mayadata-logo.svg" alt="Mayadata Logo" />
            </HorizontalWrap>

            <HorizontalWrap>
              <Subheading style={{ margin: "0.5rem 0" }}>Adopted by</Subheading>
              <Row>
                {top_adopters.links.map((link) => (
                  <Image src={link.image} alt={`${link.name} logo`} />
                ))}
              </Row>
            </HorizontalWrap>

            <HorizontalWrap>
              <Subheading style={{ margin: "0.5rem 0" }}>
                Add yourself to the adopters
              </Subheading>
              <Paragraph>
                <HorizontalSpacing>
                  and share your chaos engeneering story to the community
                </HorizontalSpacing>
              </Paragraph>
              {sm ? (
                <Button
                  style={{ width: "100%" }}
                  screen="small"
                  gradientColor="green"
                >
                  Become an Adopter
                </Button>
              ) : (
                <Button screen="small" gradientColor="green">
                  Become an Adopter
                </Button>
              )}
            </HorizontalWrap>
          </ResponsiveRow>
        </BoundedContainer>
      </div>
    </SectionLight>
  );
};

const PreFooter: React.FC = () => {
  return (
    <>
      <PreFooterUp />
      <PreFooterLow />
    </>
  );
};
export { PreFooter };
