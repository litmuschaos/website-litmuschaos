import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../../../components/layout";
import { Heading, Paragraph } from "../../../components/texts";

const HeaderContent: React.FC = () => {
  return (
    <div>
      <Heading>
        LitmusChaos platform is adopted by various end user organisations
      </Heading>
      <br />
      <Paragraph>
        Hundreds of the most innovative companies choose LitmusChaos to increase
        resiliency and ensure smooth functioning of their systems.
      </Paragraph>
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
