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

const SeeWhatOur: React.FC = () => {
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
                    <SubHeading>Kubernetes developers and SREs</SubHeading>
                </Subtext>
            </ResponsiveRow>
        </>
    );
};

export { SeeWhatOur };