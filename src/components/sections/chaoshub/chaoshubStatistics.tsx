import React from "react";
import styled from "styled-components";
import { IconCircle } from "../../icon-circle";
import {
  ResponsiveRow,
  BoundedContainer,
  SectionLight,
  Row,
} from "../../../components/layout";
import { Paragraph } from "../../../components/texts";
import { useTheme } from "../../../styles";

interface IStatCard {
  color: (opacity: number) => string;
  imgSrc: string;
  description: string;
}

const StatCard: React.FC<IStatCard> = ({ color, description, imgSrc }) => {
  const { md } = useTheme().screens;

  return (
    <Row>
      <IconCircle bgColor={color} effectColor={color} size={6.25}>
        <img src={imgSrc} alt="Icon" />
      </IconCircle>
      <hr />
      <Paragraph>{description}</Paragraph>
    </Row>
  );
};

// Component
const ChaoshubStatistics: React.FC = () => {
  const { textSecondary } = useTheme().colors;

  const { sm } = useTheme().screens;
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="0 0 0 2rem">
          ChaosHub
          <br />
          Statistics
        </BoundedContainer>
        <BoundedContainer breakpoint="md" width="50%" margin="3rem 0">
          <ResponsiveRow breakpoint="lg">
            <BoundedContainer breakpoint="lg" width="50%" margin="0 0 0 2rem">
              // Icon
            </BoundedContainer>
            <BoundedContainer breakpoint="md" width="50%" margin="3rem 0">
              // Icon
            </BoundedContainer>
          </ResponsiveRow>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionLight>
  );
};

export { ChaoshubStatistics };
