// import { Layout, ResponsiveRow } from '../components/layout'
import React from "react";
import styled from "styled-components";
import { ResponsiveRow, ResponsiveRowMD } from '../layout'
import { Heading, SubHeading, Paragraph } from '../texts/index'
import { Section } from "../../components/section-layout";
import { useTheme } from '../../styles'

const Features = styled.div`
//   min-width: 16rem; big
  width: 100%;
  padding: 10px;
  text-align:start;
`;

const TwoFeatures = styled.div`
    min-width: 20rem;
    // width: 200% !important; big
    display:flex;
    flex-flow:wrap row;
    justify-content:flex-start;
    align-items:center;
    align-self:space-around;
    padding:50px;
`


const CloudNativeWayDiv: React.FC = ({ children }) => {
    const { sm } = useTheme().screens
    if (sm) {
      return <div style={{ margin: '0 1rem' }}>{children}</div>
    } else {
      return (
        <div style={{ margin: '28rem 0 3rem 0', textAlign: 'center' }}>
          {children}
        </div>
      )
    }
  };

const CloudNativeWay: React.FC = () => {
    return (
        <Section>
            <CloudNativeWayDiv>
                <Heading>Do it the cloud-native way</Heading>
                <>
                    <ResponsiveRowMD>
                        <img
                            src="./svg/ChaosBirdExperimenting.svg"
                            alt="Chaos Bird Experimenting"
                        />
                        <ResponsiveRow>
                            <TwoFeatures>
                                <Features>
                                    <img
                                        src="./svg/VioletCloud.svg"
                                        alt="Declarative Chaos Icon"
                                    />
                                    <SubHeading>Declarative chaos</SubHeading>
                                    <Paragraph>
                                        Litmus provides chaos CRDs to manage chaos. Using chaos API, orchestration, scheduling and complex workflow management can be done declaratively.
                                    </Paragraph>
                                </Features>

                                <Features>
                                    <img
                                        src="./svg/GreenCloud.svg"
                                        alt="Ready experiments Icon"
                                    />
                                    <SubHeading>Ready experiments</SubHeading>
                                    <Paragraph>
                                        Most of the generic chaos experiments are readily available for you to get started with your initial chaos engineering needs.
                                    </Paragraph>
                                </Features>
                            </TwoFeatures>

                            <TwoFeatures>
                                <Features>
                                    <img
                                        src="./svg/LightGreenCloud.svg"
                                        alt="Create your own Icon"
                                    />
                                    <SubHeading>Create your own</SubHeading>
                                    <Paragraph>
                                        SDK is available in GO, Python and Ansible. A basic experiment structure is created quickly using SDK and developers and SREs just need to add the chaos logic into to make a new experiment.
                                    </Paragraph>
                                </Features>

                                <Features>
                                    <img
                                        src="./svg/YellowCloud.svg"
                                        alt="Chaos Workflows Icon"
                                    />
                                    <SubHeading>Chaos Workflows</SubHeading>
                                    <Paragraph>
                                        Simple to complex chaos workflows are easy to construct. Use GitOps and the chaos workflows to scale your chaos engineering efforts and increase the resilience of your Kubernetes platform.
                                    </Paragraph>
                                </Features>
                            </TwoFeatures>
                        </ResponsiveRow>
                    </ResponsiveRowMD>
                </>
            </CloudNativeWayDiv>
        </Section>
    );
};

export { CloudNativeWay };