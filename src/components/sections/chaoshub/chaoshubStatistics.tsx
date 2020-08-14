import React from "react";
import { IconCircle } from "../../icon-circle";
import {
  ResponsiveRow,
  BoundedContainer,
  SectionLight,
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
      <IconCircle bgColor={color} effectColor={color} size={6.25}>
        <img src={imgSrc} alt="Icon" />
      </IconCircle>
      <hr />
      <Paragraph>{description}</Paragraph>
    </BoundedContainer>
  );
};

// Component
const ChaoshubStatistics: React.FC = () => {
  const { textSecondary } = useTheme().colors;

  return (
    <SectionLight>
      <ResponsiveRow breakpoint="xl">
        <BoundedContainer breakpoint="xl" width="50%" margin="0">
          Chaoshub
          <br />
          Statistics
        </BoundedContainer>

        <BoundedContainer breakpoint="xl" width="45%" margin="0">
          <ResponsiveRow breakpoint="xl">
            {/* <StatCard
              color={textSecondary}
              imgSrc="./svg/declarative-chaos.svg"
              description="Litmus provides chaos CRDs to manage chaos. Using chaos API, orchestration, scheduling and complex workflow management can be done declaratively."
            />
            <StatCard
              color={textSecondary}
              imgSrc="./svg/ready-experiments.svg"
              description="Most of the generic chaos experiments are readily available for you to get started with your initial chaos engineering needs."
            /> */}
          </ResponsiveRow>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionLight>
  );
};

export { ChaoshubStatistics };
