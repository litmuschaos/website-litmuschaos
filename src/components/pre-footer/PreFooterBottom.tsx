import React from "react";
import styled from "styled-components";
import { BoundedContainer, Center, Row, SectionDark } from "../layout";
import { SubHeading } from "../texts";
import { top_adopters } from "./data";

const Image = styled.img`
  margin: ${(props) =>
    props.theme.screens.md ? "2rem 0.5rem 1rem 0" : "0 2rem 0.5rem 0"};
`;

const PreFooterBottom: React.FC = () => {
  return (
    <SectionDark>
      <BoundedContainer breakpoint="md" width="65%" margin="0 0 0 2rem">
        <Center>
          <SubHeading
            style={{
              color: "#000",
              fontSize: "1.2rem",
              margin: "-2rem 0 3rem 0",
            }}
          >
            The #1 OSS Chaos engineering system is loved and adopted by
          </SubHeading>
          <Row wrap="wrap">
            {top_adopters.links.map((link) => (
              <Image
                key={link.name}
                src={link.image}
                alt={`${link.name} logo`}
              />
            ))}
          </Row>
        </Center>
      </BoundedContainer>
    </SectionDark>
  );
};

export { PreFooterBottom };
