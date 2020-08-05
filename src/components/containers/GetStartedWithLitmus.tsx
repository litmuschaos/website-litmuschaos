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

const GetStartedWithLitmus: React.FC = () => {
    return (
        <>
            <ResponsiveRow>
            <>
                <Heading>Get started with Litmus</Heading>
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
            <Subtext>
                <SubHeading>Install Litmus</SubHeading>
                <Paragraph>Install Litmus with a helm chart. Default options will get you a minimal version of Litmus to run or schedule individual chaos experiments.</Paragraph>
            </Subtext>
            <Subtext>
                <SubHeading>Get experiments</SubHeading>
                <Paragraph>Browse and install the required experiments from ChaosHub. When you install them, they become custom resources which you can tune.</Paragraph>
            </Subtext>
            <Subtext>
                <SubHeading>Run chaos</SubHeading>
                <Paragraph>Create a chaos engine and attach the experiments you have installed. Run the chaos engine manifest through kubectl to run your chaos experiment.</Paragraph>
            </Subtext>
        </>
    );
};

export { GetStartedWithLitmus };