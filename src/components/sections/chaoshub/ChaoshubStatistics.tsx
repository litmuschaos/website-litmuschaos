import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../styles";
import { Button } from "../../button";
import { StatCard } from "../../info-section";
import { BoundedContainer, ResponsiveRow, SectionDark } from "../../layout";
import { Heading, SubText } from "../../texts";

const WhiteDot = styled.div`
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-right: 0.438rem;
  background-color: white;
`;

// Component
const ChaoshubStatistics: React.FC = () => {
  const { purple } = useTheme().colors;

  return (
    <SectionDark>
      <ResponsiveRow breakpoint="xl">
        <BoundedContainer breakpoint="xl" width="50%" margin="0">
          <Button
            style={{
              width: "fit-content",
              minWidth: "7.063rem",
              borderRadius: "0.375rem",
            }}
            backgroundColor="#CA2C2C"
          >
            <WhiteDot />
            <SubText
              style={{
                display: "inline-block",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              LIVE
            </SubText>
          </Button>

          <Heading style={{ margin: "1rem 0" }}>
            Chaoshub
            <br />
            Statistics
          </Heading>
        </BoundedContainer>

        <BoundedContainer breakpoint="xl" width="45%" margin="0">
          <ResponsiveRow breakpoint="xl">
            <StatCard
              color={purple}
              imgSrc="./svg/number-of-experiments.svg"
              description="Number of Experiments run"
              stats="90K+"
            />

            <StatCard
              color={purple}
              imgSrc="./svg/downloads.svg"
              description="Number of Litmus Installations"
              stats="14K+"
            />
          </ResponsiveRow>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { ChaoshubStatistics };
