import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { IYamlContext, YamlContext } from "../../../context";
import { useTheme } from "../../../styles";
import { IconCircle } from "../../icon-circle";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../../layout";
import { Terminal } from "../../terminal";
import { Heading, Paragraph, PurpleText, SubText } from "../../texts";

const FadedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 0.625rem;
  margin-left: 2rem;
  background: ${(props) => props.theme.gradient.fadedLine(0)};
`;

const Wrapper = styled.div`
  width: ${(props) => (props.theme.screens.md ? "80vw" : "40vw")};
  padding-top: ${(props) => (props.theme.screens.md ? "2rem" : "1rem")};
  margin-left: -1.4rem;
`;

interface IStep {
  bullet: string;
  title: string;
  description: string;
  yamlLink?: string;
}

const Step: React.FC<IStep> = ({ bullet, title, description, yamlLink }) => {
  const { gradient, colors } = useTheme();
  const { setYamlLink } = useContext(YamlContext);

  const handleClick = (yamlLink: string) => {
    setYamlLink(yamlLink);
  };

  return (
    <div style={{ display: "flex" }}>
      <IconCircle
        bgColor={gradient.green}
        effectColor={colors.darkGreen}
        size={3.25}
      >
        <SubText textAlign="center" color="#fff" fontWeight="600">
          {bullet}
        </SubText>
      </IconCircle>
      <div style={{ padding: "0.5rem 0 0 2rem", maxWidth: "40rem" }}>
        <PurpleText
          fontSize="subHeading"
          fontWeight={600}
          onClick={() => yamlLink && handleClick(yamlLink)}
          style={{ cursor: "pointer" }}
        >
          {title}
        </PurpleText>
        <br />
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};

const GetStartedSteps: React.FC = () => {
  const { latestVersion } = useContext(YamlContext);

  return (
    <BoundedContainer breakpoint="md" width="50%" margin="0">
      <FadedDiv>
        <Wrapper>
          <Step
            bullet="1"
            title="Install Litmus"
            description="Install the Litmus control plane"
            yamlLink={`https://litmuschaos.github.io/litmus/litmus-operator-v${latestVersion}.yaml`}
          />
          <Step
            bullet="2"
            title="Get experiments"
            description="Browse and install the required experiments from ChaosHub. When installed, they become custom resources which you can tune."
            yamlLink={`https://hub.litmuschaos.io/api/chaos/${latestVersion}?file=charts/generic/experiments.yaml`}
          />
          <Step
            bullet="3"
            title="Run chaos"
            description="Create a chaos engine and attach the experiments you have installed. Run the chaos engine manifest through kubectl to run your chaos experiment."
            yamlLink="/path/to/your/chaosengine/manifest/yaml"
          />
        </Wrapper>
      </FadedDiv>
    </BoundedContainer>
  );
};

const GetStarted: React.FC = () => {
  const [yamlLink, setYamlLink] = useState(
    "https://litmuschaos.github.io/litmus/litmus-operator-v1.12.0.yaml"
  );
  const [latestVersion, setLatestVersion] = useState<string>("");

  useEffect(() => {
    fetch("https://hub.litmuschaos.io/api/version")
      .then((response) => response.json())
      .then((data) => {
        const version = data[0].slice(0, data[0].length - 1) + "0";
        setLatestVersion(version); // Set the latest monthly release version
        setYamlLink(
          `https://litmuschaos.github.io/litmus/litmus-operator-v${version}.yaml`
        );
      });
  }, []);

  const initialValue: IYamlContext = {
    yamlLink: yamlLink,
    setYamlLink: setYamlLink,
    latestVersion: latestVersion,
  };

  return (
    <YamlContext.Provider value={initialValue}>
      <SectionDark>
        <Center>
          <Heading textAlign="center">Get started with Litmus</Heading>
          <ResponsiveRow breakpoint="md" alignItems="start">
            <BoundedContainer breakpoint="md" width="50%" margin="0">
              <Terminal />
            </BoundedContainer>
            <GetStartedSteps />
          </ResponsiveRow>
        </Center>
      </SectionDark>
    </YamlContext.Provider>
  );
};

export { GetStarted };
