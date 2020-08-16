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
    <SectionDark style={{ marginTop: "-8rem" }}>
      <FeaturesDiv>
        {xxl ? <></> : <FeaturesImage />}

        <ResponsiveRow breakpoint="xxl">
          {xxl ? <></> : <div style={{ width: "45%" }}></div>}

          <BoundedContainer
            breakpoint="xxl"
            width="55%"
            margin="6rem 0 9rem 5rem"
          >
            <FeatureSection
              color={purple}
              imgSrc="/svg/experiment.svg"
              title="Easy to write chaos experiments"
              description="SDK is available in GO, Python and Ansible. A basic experiment structure is created quickly using SDK and developers and SREs just need to add the chaos logic into to make a new experiment. Your chaos logic is turned into a well orchestrated chaos experiment quickly and easily."
            />
          </BoundedContainer>
        </ResponsiveRow>

        <ResponsiveRow breakpoint="xxl">
          <BoundedContainer
            breakpoint="xxl"
            width="55%"
            margin="6rem 2rem 10rem 0"
          >
            <FeatureSection
              color={darkGreen}
              imgSrc="/svg/declarative-chaos2.svg"
              title="Declarative chaos management"
              description="Chaos management is 100% declarative. Done cloud-native way. Litmus provides CRDs and a chaos operator to manage the life cycle of chaos. This capability also helps in scaling the chaos to chaos workflows."
            />
          </BoundedContainer>

          {xxl ? <></> : <div style={{ width: "45%" }}></div>}
        </ResponsiveRow>

        <ResponsiveRow breakpoint="xxl">
          {xxl ? <></> : <div style={{ width: "45%" }}></div>}

          <BoundedContainer
            breakpoint="xxl"
            width="55%"
            margin="6rem 0 9rem 2rem"
          >
            <FeatureSection
              color={yellow}
              imgSrc="/svg/application-specific.svg"
              title="Application specific experiments"
              description="Litmus provides not only the ability to introduce chaos into infrastructure and Kubernetes resources but also into application itself.  These application specific experiments help in identifyin the weaknesses related to faults related to applications that run on Kubernetes."
            />
          </BoundedContainer>
        </ResponsiveRow>

        <ResponsiveRow breakpoint="xxl">
          <BoundedContainer
            breakpoint="xxl"
            width="55%"
            margin="6rem 2rem 9rem 0"
          >
            <FeatureSection
              color={lightGreen}
              imgSrc="/svg/chaos-portal.svg"
              title="Chaos Portal for chaos at scale"
              description="Litmus Portal provides capabilities to orchestrate complex chaos workflows, monitor chaos events and metrics around chaos experiments. Workflows running on multiple Kubernetes clusters can be managed from this portal. Multiple team members can share the workflows management together."
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
