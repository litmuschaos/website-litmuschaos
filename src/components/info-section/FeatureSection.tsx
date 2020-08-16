import React from "react";
import { IconCircle } from "../icon-circle";
import { Heading, Paragraph } from "../texts";

interface IFeatureSection {
  color: (opacity: number) => string;
  imgSrc: string;
  title: string;
  description: string;
}

const FeatureSection: React.FC<IFeatureSection> = ({
  color,
  title,
  description,
  imgSrc,
}) => {
  return (
    <div>
      <IconCircle bgColor={color} effectColor={color} size={6.25}>
        <img src={imgSrc} alt={title} />
      </IconCircle>
      <br />
      <Heading>{title}</Heading>
      <br />
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export { FeatureSection };
