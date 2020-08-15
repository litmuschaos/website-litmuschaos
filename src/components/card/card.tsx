import React from "react";
import styled from "styled-components";
import { Paragraph, SubText } from "../texts";

interface ICard {
  image: string;
  width: string;
  height: string;
  subheading: string;
  body: string;
}

interface IInnerCard {
  width: string;
  height: string;
}

const CardBox = styled.div`
  width: ${props => (props.theme.screens.xl ? "90%" : "30%")};
  margin: ${props => (props.theme.screens.xl ? "1rem 0" : "0 1rem")};
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0px 14px 54px rgba(0, 0, 0, 0.1);
`;

const InnerCard = styled.div<IInnerCard>`
  width: ${props => (props.theme.screens.xl ? "90%" : props.width)};
  height: ${props => (props.theme.screens.xl ? "18rem" : props.height)};
  margin: ${props => (props.theme.screens.xl ? "0.5rem auto" : "0")};
`;

const Card: React.FC<ICard> = ({ image, width, height, subheading, body }) => {
  return (
    <CardBox>
      <InnerCard width={width} height={height}>
        <img
          style={{ height: "8rem", margin: "0 auto", objectFit: "cover" }}
          src={image}
          alt="Slack Logo"
        />
        <SubText style={{ margin: "0.5 1.5rem 0 1.5rem", fontWeight: "bold" }}>
          {subheading}
        </SubText>
        <Paragraph style={{ padding: "1rem 1.5rem" }}>{body}</Paragraph>
      </InnerCard>
    </CardBox>
  );
};

export { Card };
