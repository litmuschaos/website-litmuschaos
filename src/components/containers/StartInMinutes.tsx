// import { Layout, ResponsiveRow } from '../components/layout'
import React from "react";
import styled from "styled-components";
import { ResponsiveRow } from "../layout";
import { Heading, Paragraph } from "../texts/index";
import { Section } from "../../components/section-layout";
import { useTheme } from "../../styles";

const Columnflex = styled.div`
  width: 50%;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: start;
`;
const Rowflex = styled.div`
  width: 50%;
  min-width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LineVertical = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const LineHorizontal = styled.div`
  width: 100%;
`;

const Line: React.FC = () => {
  const { lg } = useTheme().screens;
  if (lg) {
    return (
      <LineVertical>
        <object
          data="/svg/VerticalLine.svg"
          type="image/svg+xml"
          style={{ maxWidth: "120rem", minWidth: "20rem" }}
        ></object>
      </LineVertical>
    );
  } else {
    return (
      <LineHorizontal>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <object
            data="/svg/HorizontalLine.svg"
            type="image/svg+xml"
            style={{
              maxWidth: "120rem",
              position: "absolute",
              width: "125vw",
              top: "-9.3rem",
            }}
          ></object>
        </div>
      </LineHorizontal>
    );
  }
};

const StartInMinutes: React.FC = () => {
  const { md, lg } = useTheme().screens;
  return (
    <Section>
      <Rowflex style={{ flexFlow: lg ? "row wrap" : "row" }}>
        <Columnflex style={{ minWidth: md ? "20rem" : "30rem" }}>
          <Heading>Start in minutes not in days</Heading>
          <Paragraph>
            Kubernetes developers and SREs use Litmus to create, manage and
            monitor chaos workflows. Resilience of your Kubernetes starts with
            finding a weakness and start fixing it.
          </Paragraph>
        </Columnflex>
        <img
          src="./svg/DummyVideo.svg"
          alt="Dummy Video Replace it with video tag"
          style={{ width: "50%", minWidth: md ? "20rem" : "30rem" }}
        />
      </Rowflex>
      <ResponsiveRow>
        <Line />
      </ResponsiveRow>
    </Section>
  );
};

export { StartInMinutes };
