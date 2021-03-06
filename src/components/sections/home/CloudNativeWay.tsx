import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useTheme } from "styled-components";
import { InfoSection } from "../../info-section";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../../layout";
import { Heading } from "../../texts";

const CloudNativeWay: React.FC = () => {
  const { purple, darkGreen, lightGreen, yellow } = useTheme().colors;
  return (
    <SectionDark>
      <Center>
        <Heading textAlign="center">Do it the cloud-native way</Heading>
        <ResponsiveRow breakpoint="xl">
          <BoundedContainer breakpoint="xl" width="50%" margin="0">
            <StaticImage
              src="../../../images/cloud-native-way.png"
              alt="Choas Bird doing experiments"
              placeholder="blurred"
            />
          </BoundedContainer>

          <BoundedContainer breakpoint="xl" width="45%" margin="0">
            <ResponsiveRow breakpoint="xl">
              <InfoSection
                color={purple}
                imgSrc="/svg/declarative-chaos.svg"
                title="Declarative chaos"
                description="Litmus provides chaos CRDs to manage chaos. Orchestration, scheduling and complex workflow management can be done declaratively and also by using chaos API."
              />
              <InfoSection
                color={darkGreen}
                imgSrc="/svg/ready-experiments.svg"
                title="Ready experiments"
                description="Most of the generic chaos experiments are readily available for you to get started with your initial chaos engineering needs."
              />
            </ResponsiveRow>
            <ResponsiveRow breakpoint="xl">
              <InfoSection
                color={lightGreen}
                imgSrc="/svg/create-your-own.svg"
                title="Create your own"
                description="The Litmus SDK is available in GO, Python, and Ansible. A basic experiment structure is created quickly using SDK. Kubernetes developers and SREs need to add chaos logic to create a new experiment."
              />
              <InfoSection
                color={yellow}
                imgSrc="/svg/chaos-workflows.svg"
                title="Chaos Workflows"
                description="From very simple to highly complex chaos workflows, all are easy to construct. Use GitOps and the chaos workflows to scale your chaos engineering efforts and increase your Kubernetes platform’s resilience."
              />
            </ResponsiveRow>
          </BoundedContainer>
        </ResponsiveRow>
      </Center>
    </SectionDark>
  );
};

export { CloudNativeWay };
