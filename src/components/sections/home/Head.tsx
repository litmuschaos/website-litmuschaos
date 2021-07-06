import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Button, WhiteOnGreenButton } from "../../button";
import {
  BoundedContainer,
  ResponsiveRow,
  Row,
  SectionDark,
} from "../../layout";
import { Paragraph } from "../../texts";

const MainHeading = styled.h1`
  margin: 1rem 0;
  line-height: 130%;
  font-size: ${(props) => (props.theme.screens.md ? "2rem" : "2.6rem")};
`;

const GithubTile = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 0.2rem;
  border: 1px solid #cfd3e3;
  border-radius: 5px;
  box-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.13);
  background: linear-gradient(133.06deg, #f9fafc 1.78%, #eef1f7 64.41%);
  font-family: "Inter", sans-serif;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Span = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0.7rem;
  img {
    width: 15px;
    display: inline-block;
    margin-right: 0.3rem;
  }
  p {
    font-size: 0.9rem;
    &:hover {
      color: ${(props) => props.theme.colors.textSecondary};
    }
  }
`;

// Components
const HeadText: React.FC = () => {
  const { sm, md } = useTheme().screens;
  const url = "https://api.github.com/repos/litmuschaos/litmus";
  const [github, setGithub] = useState({
    stars: "",
    watchers: "",
    forks: "",
  });

  useEffect(() => {
    (async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setGithub({
            stars: data.stargazers_count,
            watchers: data.subscribers_count,
            forks: data.forks_count,
          });
        });
    })();
  }, []);

  const GithubContent = () => {
    return (
      <Row>
        <GithubTile>
          <Link to="https://github.com/litmuschaos/litmus" target="_blank">
            <Span>
              <img src="/assets/github-star.svg" alt="github star" />
              <p>Star</p>
            </Span>
          </Link>
          <Span style={{ borderLeft: "1px solid #CFD3E3" }}>
            <p style={{ cursor: "default" }}>{github.stars}</p>
          </Span>
        </GithubTile>
        <GithubTile>
          <Link
            to="https://github.com/litmuschaos/litmus/subscription"
            target="_blank"
          >
            <Span>
              <img src="/assets/github-watchers.svg" alt="github star" />
              <p>Watch</p>
            </Span>
          </Link>
          <Span style={{ borderLeft: "1px solid #CFD3E3" }}>
            <p style={{ cursor: "default" }}>{github.watchers}</p>
          </Span>
        </GithubTile>
        <GithubTile>
          <Link to="https://github.com/litmuschaos/litmus/fork" target="_blank">
            <Span>
              <img src="/assets/github-forks.svg" alt="github star" />
              <p>Fork</p>
            </Span>
          </Link>
          <Span style={{ borderLeft: "1px solid #CFD3E3" }}>
            <p style={{ cursor: "default" }}>{github.forks}</p>
          </Span>
        </GithubTile>
      </Row>
    );
  };

  const flexibleButton = (
    <Button
      gradientColor="purple"
      onClick={() =>
        window.open("https://docs.litmuschaos.io/docs/getstarted/")
      }
    >
      Get Started
    </Button>
  );

  const HeadContent = (
    <>
      <WhiteOnGreenButton disabled>CLOUD-NATIVE</WhiteOnGreenButton>
      <MainHeading>
        Chaos Engineering
        <br />
        for your Kubernetes
      </MainHeading>
      <Paragraph>
        Chaos Engineering is fundamental to increasing the resilience of today’s
        cloud native, highly dynamic applications and infrastructure. Kubernetes
        developers and SREs use Litmus to create, manage and monitor chaos
        workflows by extending Kubernetes itself.
      </Paragraph>
      <div style={{ marginTop: "1rem" }}>{flexibleButton}</div>
      <div style={{ marginTop: "1rem" }}>{!md ? <GithubContent /> : null}</div>
    </>
  );

  if (sm) {
    return <div style={{ marginTop: "5rem" }}>{HeadContent}</div>;
  } else if (md) {
    return <div style={{ marginTop: "5rem", width: "80%" }}>{HeadContent}</div>;
  } else {
    return (
      <BoundedContainer breakpoint="md" width="40%" margin="6rem 0">
        {HeadContent}
      </BoundedContainer>
    );
  }
};

const Head: React.FC = () => {
  return (
    <SectionDark
      style={{ background: "none", position: "relative", zIndex: 49 }}
    >
      <ResponsiveRow breakpoint="md">
        <HeadText />
        <div style={{ width: "45%" }} />
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };
