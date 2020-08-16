import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import { IconCircle } from "../icon-circle";
import { BoundedContainer } from "../layout";
import { GreenStats, Paragraph } from "../texts";

const Divider = styled.div`
  height: 0.5rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background: ${props => props.theme.gradient.lightGreenGradient};
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
      breakpoint="xl"
      width={xl ? "80%" : "20rem"}
      margin="1rem"
    >
      <div style={{ display: "flex" }}>
        <IconCircle bgColor={color} effectColor={color} size={6.25}>
          <img src={imgSrc} alt="Icon" />
        </IconCircle>
        <GreenStats style={{ margin: "0 0.5rem" }}>{stats}</GreenStats>
      </div>
      <Divider />
      <Paragraph>{description}</Paragraph>
    </BoundedContainer>
  );
};

export { StatCard };
