// import { Layout, ResponsiveRow } from '../components/layout'
import React from "react";
import styled from "styled-components";
import { ResponsiveRow } from '../layout'
import { Heading, SubHeading, Paragraph } from '../texts/index'
import { Section } from "../../components/section-layout";
// import { useTheme } from '../../styles'

const Subtext = styled.div`
  min-width: 8rem;
  width: 50%;
  padding: 10px;
`;

const Columnflex = styled.div`
    width:50%;
    display:flex;
    flex-flow:wrap column;
    justify-content:center;
    align-items:start;
`

const Rowflex = styled.div`
    width:100%;
    display:flex;
    flex-flow:wrap row;
    justify-content:center;
    align-items:center;
`

const Width100 = styled.div`
    width:100%;
    display:flex;
    flex-flow:wrap column;
    justify-content:center;
    align-items:center;
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

const GetStartedWithLitmus: React.FC = () => {
    return (
        <Section>
            <Width100>
                <Heading>Get started with Litmus</Heading>
            </Width100>
            <ResponsiveRow>
                <img
                        src="./svg/MacWindow.svg"
                        alt="Code for Installing Litmus"
                />
                <Rowflex>
                    <img
                            src="./svg/VerticalNumber.svg"
                            alt="Code for Installing Litmus"
                    />
                    <Columnflex>
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
                    </Columnflex>
                </Rowflex>
            </ResponsiveRow>
        </Section>
    );
};

export { GetStartedWithLitmus };