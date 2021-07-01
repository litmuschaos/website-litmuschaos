import React from "react";
import { Button } from "../../../components/button";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";
import { AdoptersImage } from "../../image-fetch/AdopterImage";
import styled from "styled-components";

const SwagButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwagLink = styled.a`
  padding: 0 1rem;
  color: #7e8f9a;
  font-size: 1rem;
  line-height: 1.2rem;
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
        <a rel="noopener noreferrer" target="_blank" href="#">
          <Button gradientColor="purple">Get Your Swag</Button>
        </a>
        <SwagLink rel="noopener noreferrer" target="_blank" href="#">
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
      <ResponsiveRow flexDirection breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <Center>
            <HeaderContent />
          </Center>
        </BoundedContainer>
        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <AdoptersImage />
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Head };
