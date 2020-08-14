import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../styles";
import { IconCircle } from "../../icon-circle";
import { BoundedContainer, ResponsiveRow, SectionDark } from "../../layout";
import { Paragraph, Heading } from "../../texts";
import { Button } from "../../button";

const Divider = styled.div`
  height: 0.5rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.gradient.lightGreenGradient};
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

interface IStatCard {
  color: (opacity: number) => string;
  imgSrc: string;
  stats: string;
  description: string;
}

const StatCard: React.FC<IStatCard> = ({
  color,
  description,
  imgSrc,
  stats,
}) => {
  const { xl } = useTheme().screens;

  return (
    <BoundedContainer
      breakpoint="sm"
      width={xl ? "80%" : "20rem"}
      margin="1rem"
    >
      <div style={{ display: "flex" }}>
        <IconCircle bgColor={color} effectColor={color} size={6.25}>
          <img src={imgSrc} alt="Icon" />
        </IconCircle>
        <div
          style={{
            margin: "0 0.5rem",
            fontSize: "4rem",
            fontWeight: "bold",
            height: "100%",
            color: "#109B67",
          }}
        >
          {stats}
        </div>
      </div>
      <Divider />
      <Paragraph>{description}</Paragraph>
    </BoundedContainer>
  );
};

// Component
const ChaoshubStatistics: React.FC = () => {
  const { purple } = useTheme().colors;

  return (
    <SectionDark>
      <ResponsiveRow breakpoint="xl">
        <BoundedContainer breakpoint="xl" width="50%" margin="0">
          <Button style={{ width: "10%" }} backgroundColor="#CA2C2C">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <div style={{ margin: "-1.5rem 1rem", fontSize: "3rem" }}>
                &#10625;
              </div>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "centers",
                }}
              >
                LIVE
              </div>
            </div>
          </Button>
          <Heading style={{ fontSize: "3rem", margin: "1rem 0" }}>
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
