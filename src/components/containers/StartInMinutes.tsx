// import { Layout, ResponsiveRow } from '../components/layout'
import React from "react";
import styled from "styled-components";
import { ResponsiveRow } from '../layout'
import { Heading, SubHeading, Paragraph } from '../texts/index'
// import { useTheme } from '../../styles'

const Subtext = styled.div`
  min-width: 8rem;
  width: 50%;
  padding: 10px;
`;

const CircleDot = styled.div`
    width: 2.7rem;
    height: 2.7rem;
    background: #109B67;
    border: 8px solid #FFFFFF;
    border-radius:50%;
    box-shadow: 0px 9px 11px rgba(91, 68, 186, 0.15);
`

// co React.FC = ({ children }) => {
//     const { sm } = useTheme().screens
//     if (sm) {
//       return <div style={{ margin: '0 1rem' }}>{children}</div>
//     } else {
//       return (
//         <div style={{ margin: '28rem 0 3rem 0', textAlign: 'center' }}>
//           {children}
//         </div>
//       )
//     }
//   };

const StartInMinutes: React.FC = () => {
    return (
        <>
            <ResponsiveRow>
            <>
                <Heading>Start in minutes not in days</Heading>
                <Subtext>
                    <Paragraph>
                        Kubernetes developers and SREs use Litmus to create, manage and monitor
                        chaos workflows. Resilience of your Kubernetes starts with finding a
                        weakness and start fixing it.
                    </Paragraph>
                </Subtext>
            </>
            <img
                    src="./svg/chaosbird_experimenting.svg"
                    alt="Chaos Bird Experimenting"
            />
            </ResponsiveRow>
            <ResponsiveRow>
                <Subtext>
                    <CircleDot />
                    <SubHeading>Install Litmus through<br/>helm chart</SubHeading>
                </Subtext>
                <Subtext>
                    <CircleDot />
                    <SubHeading>Choose a workflow<br/>template</SubHeading>
                </Subtext>
                <Subtext>
                    <CircleDot />
                    <SubHeading>Tune chaos experiments</SubHeading>
                </Subtext>
                <Subtext>
                    <CircleDot />
                    <SubHeading>Schedule the workflow</SubHeading>
                </Subtext>
                <Subtext>
                    <CircleDot />
                    <SubHeading>Observe chaos analytics</SubHeading>
                </Subtext>
                <Subtext>
                    <CircleDot />
                    <SubHeading>Find weaknesses if any</SubHeading>
                </Subtext>
            </ResponsiveRow>
        </>
    );
};

export { StartInMinutes };