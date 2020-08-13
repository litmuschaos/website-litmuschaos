import React from "react";
import styled from "styled-components";
import { Paragraph, SubText } from "../texts";

interface ICard {
  image?: string;
  width: string;
  height: string;
  subheading?: string;
  body?: string;
}

const CardBox = styled.div`
  width: ${(props) => (props.theme.screens.sm ? "90%" : "30%")};
  padding: ${(props) => (props.theme.screens.sm ? "0" : "0 1rem")};
  width: 100%;
  height: 100%;
`;

const InnerCard = styled.div<ICard>`
  width: ${(props) => (props.theme.screens.sm ? "90%" : props.width)};
  height: ${(props) => (props.theme.screens.sm ? "18rem" : props.height)};
  margin: ${(props) => (props.theme.screens.sm ? "0.5rem auto" : "")};
  box-shadow: -0.2rem 0.3rem 0.7rem 0.1rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
`;

const Card: React.FC<ICard> = ({ image, width, height, subheading, body }) => {
  return (
    <CardBox>
      <InnerCard width={width} height={height}>
        {image ? (
          <img
            style={{
              height: "8rem",
              objectFit: "cover",
              margin: "0 auto",
            }}
            src={image}
            alt="Slack Logo"
          />
        ) : (
          <></>
        )}

        {subheading ? (
          <SubText
            style={{
              margin: "0 1.5rem",
              marginTop: "0.5rem",
              fontWeight: "bold",
            }}
          >
            {subheading}
          </SubText>
        ) : (
          <></>
        )}

        <Paragraph style={{ padding: "1rem 1.5rem" }}>{body}</Paragraph>
      </InnerCard>
    </CardBox>
  );
};

export { Card };
