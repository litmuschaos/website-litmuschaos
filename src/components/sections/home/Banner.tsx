import React from "react";
import styled from "styled-components";
import { SectionDark } from "../../layout";
import { Paragraph, SubHeading } from "../../texts";

const HomeBannerContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: ${(props) => (props.theme.screens.lg ? "column" : "row")};
`;

const BackgroundBanner = styled.img`
  display: block;
  position: absolute;
  top: ${(props) => (props.theme.screens.lg ? "-40px" : "-60px")};
  height: ${(props) =>
    props.theme.screens.lg ? "calc(100% + 40px)" : "calc(100% + 60px)"};
  left: ${(props) => (props.theme.screens.lg ? "-20px" : "-60px")};
  z-index: -1;
`;

const BannerLeft = styled.div`
  width: ${(props) => (props.theme.screens.lg ? "100%" : "50%")};
  padding: 1rem;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 5.05263px 15.1579px rgba(0, 0, 0, 0.18),
    0px 26.9474px 60.6316px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
`;

const BannerRight = styled.div`
  margin-top: ${(props) => (props.theme.screens.lg ? "3rem" : "0")};
  ${(props) =>
    props.theme.screens.lg
      ? ""
      : "width: 50%; display: flex; flex-direction: column; justify-content: center; padding-left: 2rem;"}
`;

const BannerLeftItemCont = styled.div`
  background-color: #f5f9fc;
  border-radius: 10px;
  padding: 3rem 1rem;
  height: 300px;
  overflow: hidden;
  position: relative;
`;

const LitmusLogo = styled.img`
  height: ${(props) => (props.theme.screens.lg ? "35px" : "50px")};
`;

const ParagraphBanner = styled.p`
  font-size: ${(props) => (props.theme.screens.lg ? "0.9rem" : "1rem")};
  font-weight: 600;
  margin-top: 0.5rem;
`;

const GradientBackground = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  width: ${(props) => (props.theme.screens.lg ? "100%" : "80%")};
`;

const BannerHome: React.FC = () => {
  return (
    <>
      <SectionDark>
        <HomeBannerContainer>
          <BannerLeft>
            <BackgroundBanner
              src="./Banner/bannerBackground.png"
              alt="Banner Background"
            />
            <BannerLeftItemCont>
              <LitmusLogo src="./Banner/logo.png" alt="Litmus Logo" />
              <ParagraphBanner>Releasing on August 15, 2021</ParagraphBanner>
              <GradientBackground
                src="./Banner/gradientShape.png"
                alt="Gradient Image"
              />
            </BannerLeftItemCont>
          </BannerLeft>
          <BannerRight>
            <SubHeading>Chaos Engineering for Enterprises.</SubHeading>
            <Paragraph>
              With biggest and promising updates, Litmus 2.0 is going to be
              released on 15th August, 2021. Read the blog to know few of the
              new features.
            </Paragraph>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://dev.to/litmus-chaos/litmus-2-0-simplifying-chaos-engineering-for-enterprises-4448"
              style={{ color: "#5b44ba" }}
            >
              Sneek peek into Litmus 2.0
            </a>
          </BannerRight>
        </HomeBannerContainer>
      </SectionDark>
    </>
  );
};

export { BannerHome };
