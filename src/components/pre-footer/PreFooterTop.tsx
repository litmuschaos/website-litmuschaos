import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { ResponsiveRow, Row, SectionDark } from "../layout";
import { Paragraph, SubHeading } from "../texts";
import { top_adopters } from "./data";

const Image = styled.img`
  margin: 0 0.5rem 0.5rem 0;
`;

const MayadataImage = styled.img`
  margin: ${(props) => (props.theme.screens.md ? "0 auto" : 0)};
  max-width: ${(props) => (props.theme.screens.md ? "10rem" : "12rem")};
`;

const HorizontalWrap = styled.div`
  min-width: 25%;
  max-width: 100%;
  margin: ${(props) => (props.theme.screens.md ? " 2rem 0" : "0 1rem")};
`;

const PreFooterTop: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="md" justifyContent="space-evenly">
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
      </ResponsiveRow>
    </SectionDark>
  );
};

export { PreFooterTop };
