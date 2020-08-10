import React from "react";
import styled from "styled-components";
import { Section } from "../section-layout";
import { useTheme } from "../../styles";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  min-height: 50rem;
  width: 87.625rem;
  object {
    width: ${(props) => (props.theme.md || props.theme.sm ? "90%" : "100%")};
  }
`;

const FeaturesDesign: React.FC = () => {
  const { xs, sm, md, lg } = useTheme().screens;
  return lg ? (
    <Wrapper>
      <object
        data="/svg/ZigZagMobile.svg"
        type="image/svg+xml"
        style={{
          transform: "translateX(-1rem)",
          width: xs ? "100%" : sm ? "75%" : md ? "65%" : lg ? "50%" : "",
        }}
      ></object>
    </Wrapper>
  ) : (
    <Wrapper>
      <object data="/svg/FullZigZag.svg" type="image/svg+xml"></object>
    </Wrapper>
  );
};

const WhyLitmusFeatures: React.FC = () => {
  return (
    <Section>
      <FeaturesDesign />
    </Section>
  );
};

export { WhyLitmusFeatures };
