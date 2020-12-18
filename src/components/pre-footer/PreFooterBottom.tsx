import React from "react";
import styled from "styled-components";
import { BoundedContainer, Center, Row, SectionDark } from "../layout";
import { SubHeading } from "../texts";
import { top_adopters } from "./data";

const Image = styled.img`
  margin: ${(props) =>
    props.theme.screens.md ? "2rem 0.5rem 1rem 0" : "0 2rem 0.5rem 0"};
`;

// const MayadataImage = styled.img`
//   margin: ${(props) => (props.theme.screens.md ? "0 auto" : 0)};
//   max-width: ${(props) => (props.theme.screens.md ? "10rem" : "12rem")};
// `;

// const HorizontalWrap = styled.div`
//   min-width: 25%;
//   max-width: 100%;
//   margin: ${(props) => (props.theme.screens.md ? " 2rem 0" : "0 1rem")};
// `;

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
      {/* <ResponsiveRow breakpoint="md" justifyContent="space-evenly">
        <HorizontalWrap>
          <SubHeading style={{ margin: "0.5rem 0" }}>
            Originally created by
          </SubHeading>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://mayadata.io/"
          >
            <MayadataImage src="/svg/mayadata-logo.svg" alt="Mayadata Logo" />
          </a>
        </HorizontalWrap>

        <HorizontalWrap>
          <SubHeading style={{ margin: "0.5rem 0" }}>Adopted by</SubHeading>
          <Row wrap="wrap">
            {top_adopters.links.map((link) => (
              <Image
                key={link.name}
                src={link.image}
                alt={`${link.name} logo`}
              />
            ))}
          </Row>
        </HorizontalWrap>

        <HorizontalWrap>
          <SubHeading style={{ margin: "0.5rem 0" }}>
            Add yourself to the adopters
          </SubHeading>
          <Paragraph>
            and share your chaos engineering story to the community
          </Paragraph>
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/litmuschaos/litmus/blob/master/ADOPTERS.md"
          >
            <Button gradientColor="green">Become an Adopter</Button>
          </a>
        </HorizontalWrap>
      </ResponsiveRow> */}
    </SectionDark>
  );
};

export { PreFooterBottom };
