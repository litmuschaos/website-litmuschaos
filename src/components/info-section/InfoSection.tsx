import React from "react";
import { useTheme } from "styled-components";
import { IconCircle } from "../icon-circle";
import { BoundedContainer } from "../layout";
import { Paragraph, SubHeading } from "../texts";

interface IInfoSection {
  color: (opacity: number) => string;
  imgSrc: string;
  title: string;
  description: string;
}

const InfoSection: React.FC<IInfoSection> = ({
  color,
  title,
  description,
  imgSrc,
}) => {
  const { xl } = useTheme().screens;

  return (
    <BoundedContainer
      breakpoint="sm"
      width={xl ? "80%" : "20rem"}
      margin="1rem"
    >
      <IconCircle bgColor={color} effectColor={color} size={6.25}>
        <img src={imgSrc} alt={title} />
      </IconCircle>

      <SubHeading>{title}</SubHeading>
      <Paragraph>{description}</Paragraph>
    </BoundedContainer>
  );
};

export { InfoSection };
