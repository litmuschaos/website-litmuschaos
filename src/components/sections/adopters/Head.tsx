import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/button";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";

const SwagButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwagButton = styled.div`
  min-width: 8rem !important;
  width: 40%;
`;

const SwagLink = styled.a`
width: ${(props) => props.theme.screens.md && "40%"}
  padding: 0 1rem;
  color: ${(props) => props.theme.colors.swagBtnLink};
  font-size: ${(props) =>
    props.theme.screens.md
      ? props.theme.fontSize.paragraph.md
      : props.theme.fontSize.paragraph.lg};
  line-height: 1.2rem;
  margin-left: 1rem;
`;

const HeaderContent: React.FC = () => {
  return (
    <div>
      <Heading>
        The Chaos Engineering platform used by various organisations.
      </Heading>
      <br />
      <Paragraph>
        Hundreds of the most innovative companies choose LitmusChaos to increase
        resiliency and ensure smooth functioning of their systems.
      </Paragraph>
      <br />
      <SwagButtonContainer>
        <SwagButton>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/litmuschaos/litmus/blob/master/ADOPTERS.md"
          >
            <Button width="100%" gradientColor="purple">
              Get Your Swag
            </Button>
          </a>
        </SwagButton>

        <SwagLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/litmuschaos/litmus/blob/master/ADOPTERS.md"
        >
          List yourself as an adopter to get a swag
        </SwagLink>
      </SwagButtonContainer>
    </div>
  );
};

// Component
const Head: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow reverseColumn breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <Center>
            <HeaderContent />
          </Center>
        </BoundedContainer>
        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <StaticImage
            src="../../../images/adopters.png"
            alt="Choas Bird with abopters"
            placeholder="blurred"
          />
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };
