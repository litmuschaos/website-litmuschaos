import React from "react";
import { IconCircle } from "../../icon-circle";
import {
  ResponsiveRow,
  BoundedContainer,
  SectionDark,
} from "../../../components/layout";
import { Paragraph } from "../../../components/texts";
import { useTheme } from "../../../styles";

interface IStatCard {
  color: (opacity: number) => string;
  imgSrc: string;
  description: string;
}

const StatCard: React.FC<IStatCard> = ({ color, description, imgSrc }) => {
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
          97000+
        </div>
      </div>
      <hr />
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
          Chaoshub
          <br />
          Statistics
        </BoundedContainer>

        <BoundedContainer breakpoint="xl" width="45%" margin="0">
          <ResponsiveRow breakpoint="xl">
            <StatCard
              color={purple}
              imgSrc="./svg/number-of-experiments.svg"
              description="Number of Experiments run"
            />

            <StatCard
              color={purple}
              imgSrc="./svg/downloads.svg"
              description="Number of Litmus Installations"
            />
          </ResponsiveRow>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { ChaoshubStatistics };
