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
  font-weight:normal;
  colour:grey;
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
    justify-content:start;
    align-items:start;
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

const SeeWhatOur: React.FC = () => {
    return (
        <Section>
            <ResponsiveRow>
                <img
                    src="./svg/ChaosBirdSaying.svg"
                    alt="Chaos Bird Saying"
                />
                <Columnflex>
                    <Heading>See what our users are saying about us</Heading>
                    <Subtext>
                        <SubHeading>
                            Litmus is one of the most promising open source chaos engineering frameworks that takes into account proper chaos engineering principles while providing autonomy and  extensibility to the users.
                        </SubHeading>
                    </Subtext>
                    <Rowflex>
                        <img
                            src="./svg/Andreas.svg"
                            alt="Andreas Krivas Saying"
                        />
                        <Subtext>
                            <SubHeading>Andreas Krivas</SubHeading>
                            <Paragraph>Chief Architect at Telus Digital</Paragraph>
                        </Subtext>
                    </Rowflex>
                </Columnflex>
            </ResponsiveRow>
        </Section>
    );
};

export { SeeWhatOur };