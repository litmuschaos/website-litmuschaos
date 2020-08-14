import React from "react";
import { Button } from "../../../components/button";
import {
  ResponsiveRow,
  BoundedContainer,
  SectionDark,
  Center,
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { useTheme } from "../../../styles";
import { ChaoshubImage } from "./index";

const HeaderContent = (
  <>
    <Heading>
      Your Experiments for
      <br />
      Kubernetes are ready!
    </Heading>
    <Paragraph
      style={{
        margin: "2rem 0",
      }}
    >
      It is all about sharing with the community. Chaos experiments are no
      different. The success of your chaos engineering efforts in your
      organization depends on the extent of chaos scenarios you build in into
      them. Chaos experiments can help.
    </Paragraph>
    <Button screen="large" gradientColor="purple">
      Get Started
    </Button>
  </>
);

// Component
const Head: React.FC = () => {
  const { sm } = useTheme().screens;

  return (
    <SectionDark>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <ChaoshubImage />
        </BoundedContainer>
        <BoundedContainer breakpoint="md" width="50%" margin="2rem 0 0 2rem">
          {sm ? (
            <Center fullHeight={true}>{HeaderContent}</Center>
          ) : (
            <>{HeaderContent}</>
          )}
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };
