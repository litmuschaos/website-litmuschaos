import React from "react";
import { useTheme } from "styled-components";
import { IconCircle } from "../../icon-circle";
import { BoundedContainer, ResponsiveRow, SectionDark } from "../../layout";
import { Heading, Paragraph, Subheading } from "../../texts";
import { ChaosBirdExp } from "./ChaosBirdExp";

interface IInfoSection {
  color: (opacity: number) => string;
  imgSrc: string;
  title: string;
  description: string;
}

const InfoSection: React.FC<IInfoSection> = ({
  color,
  title,
  description,
  imgSrc,
}) => {
  const { md } = useTheme().screens;

  return (
    <BoundedContainer
      breakpoint="sm"
      width={md ? "80%" : "20rem"}
      margin="1rem"
    >
      <IconCircle bgColor={color} effectColor={color} size={6.25}>
        <img src={imgSrc} alt={title} />
      </IconCircle>
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
      <ResponsiveRow breakpoint="xxl">
        <BoundedContainer breakpoint="lg" width="40rem" margin="0">
          <ChaosBirdExp />
        </BoundedContainer>

        <div style={{ margin: lg ? "0" : "2rem 0 0 2rem" }}>
          <ResponsiveRow breakpoint="md">
            <InfoSection
              color={purple}
              imgSrc="/svg/declarative-chaos.svg"
              title="Declarative chaos"
              description="Litmus provides chaos CRDs to manage chaos. Using chaos API, orchestration, scheduling and complex workflow management can be done declaratively."
            />
            <InfoSection
              color={darkGreen}
              imgSrc="/svg/ready-experiments.svg"
              title="Ready experiments"
              description="Most of the generic chaos experiments are readily available for you to get started with your initial chaos engineering needs."
            />
          </ResponsiveRow>
          <ResponsiveRow breakpoint="md">
            <InfoSection
              color={lightGreen}
              imgSrc="/svg/create-your-own.svg"
              title="Create your own"
              description="SDK is available in GO, Python and Ansible. A basic experiment structure is created quickly using SDK and developers and SREs just need to add the chaos logic into to make a new experiment."
            />
            <InfoSection
              color={yellow}
              imgSrc="/svg/chaos-workflows.svg"
              title="Chaos Workflows"
              description="Simple to complex chaos workflows are easy to construct. Use GitOps and the chaos workflows to scale your chaos engineering efforts and increase the resilience of your Kubernetes platform."
            />
          </ResponsiveRow>
        </div>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { CloudNativeWay };
