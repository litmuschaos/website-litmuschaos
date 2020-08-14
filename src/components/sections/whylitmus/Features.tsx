import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../styles";
import { ConveyorBelt } from "../../image-fetch/ConveyorBelt";
import { FeaturesImage } from "../../image-fetch/FeaturesImage";
import { FeatureSection } from "../../info-section";
import { BoundedContainer, ResponsiveRow, SectionDark } from "../../layout";

const FeaturesDiv = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: ${props => (props.theme.xxl ? "2rem" : "0")};
  padding-bottom: 5rem;
`;

const Features: React.FC = () => {
  const { xxl } = useTheme().screens;
  const { purple, darkGreen, lightGreen, yellow } = useTheme().colors;

  return (
    <SectionDark>
      <FeaturesDiv>
        {xxl ? <></> : <FeaturesImage />}

        <ResponsiveRow breakpoint="xxl">
          {xxl ? <></> : <div style={{ width: "45%" }}></div>}

          <BoundedContainer
            breakpoint="xxl"
            width="55%"
            margin="6rem 0 12rem 5rem"
          >
            <FeatureSection
              color={purple}
              imgSrc="/svg/experiment.svg"
              title="Easy to write chaos experiments"
              description="SDK is available in GO, Python and Ansible. A basic experiment structure is created quickly using SDK and developers and SREs just need to add the chaos logic into to make a new experiment. Your chaos logic is turned into a well orchestrated chaos experiment quickly and easily. "
            />
          </BoundedContainer>
        </ResponsiveRow>

        <ResponsiveRow breakpoint="xxl">
          <BoundedContainer
            breakpoint="xxl"
            width="55%"
            margin="6rem 2rem 12rem 0"
          >
            <FeatureSection
              color={darkGreen}
              imgSrc="/svg/experiment.svg"
              title="Easy to write chaos experiments"
              description="SDK is available in GO, Python and Ansible. A basic experiment structure is created quickly using SDK and developers and SREs just need to add the chaos logic into to make a new experiment. Your chaos logic is turned into a well orchestrated chaos experiment quickly and easily. "
            />
          </BoundedContainer>

          {xxl ? <></> : <div style={{ width: "45%" }}></div>}
        </ResponsiveRow>

        <ResponsiveRow breakpoint="xxl">
          {xxl ? <></> : <div style={{ width: "45%" }}></div>}

          <BoundedContainer
            breakpoint="xxl"
            width="55%"
            margin="6rem 0 12rem 2rem"
          >
            <FeatureSection
              color={yellow}
              imgSrc="/svg/experiment.svg"
              title="Easy to write chaos experiments"
              description="SDK is available in GO, Python and Ansible. A basic experiment structure is created quickly using SDK and developers and SREs just need to add the chaos logic into to make a new experiment. Your chaos logic is turned into a well orchestrated chaos experiment quickly and easily. "
            />
          </BoundedContainer>
        </ResponsiveRow>

        <ResponsiveRow breakpoint="xxl">
          <BoundedContainer breakpoint="xxl" width="55%" margin="6rem 2rem 0 0">
            <FeatureSection
              color={lightGreen}
              imgSrc="/svg/experiment.svg"
              title="Easy to write chaos experiments"
              description="SDK is available in GO, Python and Ansible. A basic experiment structure is created quickly using SDK and developers and SREs just need to add the chaos logic into to make a new experiment. Your chaos logic is turned into a well orchestrated chaos experiment quickly and easily. "
            />
          </BoundedContainer>

          {xxl ? <></> : <div style={{ width: "45%" }}></div>}
        </ResponsiveRow>
      </FeaturesDiv>
      <ConveyorBelt />
    </SectionDark>
  );
};

export { Features };
