import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { useTheme } from "../../styles";
import { Paragraph, Subheading } from "../texts";

const SlackBox = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 15% 10%;
  text-align: center;
`;

const Slack: React.FC = () => {
  const { sm } = useTheme().screens;
  return (
    <SlackBox>
      <div
        style={{
          margin: "1rem 1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{ width: "50%", margin: "0 auto" }}
          src="./svg/slackWithLabel.svg"
          alt="Slack Logo"
        />
        <Subheading textAlign="center" style={{ margin: "1rem 0" }}>
          Join #Litmus on Kubernetes Slack
        </Subheading>
        <Paragraph
          textAlign="center"
          style={{ marginBottom: "0.7rem", fontSize: "0.7rem" }}
        >
          Connect with SREs and Chaos Engineering enthusiasts.
        </Paragraph>
        <div>
          <Button screen={sm ? "small" : "large"} gradientColor="purple">
            Join the Channnel
          </Button>
        </div>
      </div>
    </SlackBox>
  );
};

export { Slack };
