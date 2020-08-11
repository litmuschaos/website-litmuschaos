import React from "react";
import styled, { useTheme } from "styled-components";
import { BoundedContainer, ResponsiveRow, SectionDark } from "../../layout";
import { Heading, Paragraph, Subheading } from "../../texts";

interface IColor {
  color: (opacity: number) => string;
}

const OuterCircle = styled.div<IColor>`
  width: 6.25rem;
  height: 6.25rem;
  display: grid;
  place-items: center;
  border: 1px solid ${props => props.color(0.2)};
  border-radius: 50%;
  background: transparent;
`;

const InnerCircle = styled.div<IColor>`
  width: 5rem;
  height: 5rem;
  display: grid;
  place-items: center;
  background: ${props => props.color(1)};
  box-shadow: 0px 19px 33px ${props => props.color(0.25)};
  border-radius: 50%;
`;

const CardIcon: React.FC<IColor> = ({ color }) => {
  return (
    <div>
      <OuterCircle color={color as any}>
        <InnerCircle color={color as any}>
          <div>icon</div>
        </InnerCircle>
      </OuterCircle>
    </div>
  );
};

interface IInfoSection {
  color: (opacity: number) => string;
  title: string;
  description: string;
}

const InfoSection: React.FC<IInfoSection> = ({ color, title, description }) => {
  const { md } = useTheme().screens;

  return (
    <BoundedContainer width={md ? "80%" : "20rem"} margin="1rem">
      <CardIcon color={color} />
      <Subheading>{title}</Subheading>
      <Paragraph>{description}</Paragraph>
    </BoundedContainer>
  );
};

const CloudNativeWay: React.FC = () => {
  const { purple, darkGreen, lightGreen, yellow } = useTheme().colors;
  const { lg } = useTheme().screens;
  return (
    <SectionDark>
      <Heading textAlign="center">Do it the cloud-native way</Heading>
      <ResponsiveRow breakpoint="lg">
        <img
          src="/svg/cloud-native-way.svg"
          alt="chaos bird doing experiments"
          width={lg ? "80%" : "30%"}
        />
        <div style={{ margin: lg ? "0" : "2rem 0 0 2rem" }}>
          <ResponsiveRow breakpoint="md">
            <InfoSection
              color={purple}
              title="Declarative chaos"
              description="Litmus provides chaos CRDs to manage chaos. Using chaos API, orchestration, scheduling and complex workflow management can be done declaratively."
            />
            <InfoSection
              color={darkGreen}
              title="Declarative chaos"
              description="Litmus provides chaos CRDs to manage chaos. Using chaos API, orchestration, scheduling and complex workflow management can be done declaratively."
            />
          </ResponsiveRow>
          <ResponsiveRow breakpoint="md">
            <InfoSection
              color={lightGreen}
              title="Declarative chaos"
              description="Litmus provides chaos CRDs to manage chaos. Using chaos API, orchestration, scheduling and complex workflow management can be done declaratively."
            />
            <InfoSection
              color={yellow}
              title="Declarative chaos"
              description="Litmus provides chaos CRDs to manage chaos. Using chaos API, orchestration, scheduling and complex workflow management can be done declaratively."
            />
          </ResponsiveRow>
        </div>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { CloudNativeWay };
