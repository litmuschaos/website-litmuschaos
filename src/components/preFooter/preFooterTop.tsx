import React from "react";
import styled, { useTheme } from "styled-components";
import { Button } from "../button";
import { ResponsiveRow, Row, SectionDark } from "../layout";
import { Paragraph, Subheading } from "../texts";
import { top_adopters } from "./data";

const Image = styled.img`
  margin: 0 0.5rem 0.5rem 0;
`;

const HorizontalWrap = styled.div`
  min-width: 25%;
  max-width: 100%;
  margin: ${props => (props.theme.screens.md ? " 2rem 0" : "0 1rem")};
`;

const PreFooterTop: React.FC = () => {
  const { sm } = useTheme().screens;
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="md" justifyContent="space-evenly">
        <HorizontalWrap>
          <Subheading style={{ margin: "0.5rem 0" }}>Created by</Subheading>
          <img src="./svg/mayadata-logo.svg" alt="Mayadata Logo" />
        </HorizontalWrap>

        <HorizontalWrap>
          <Subheading style={{ margin: "0.5rem 0" }}>Adopted by</Subheading>
          <Row wrap="wrap">
            {top_adopters.links.map(link => (
              <Image src={link.image} alt={`${link.name} logo`} />
            ))}
          </Row>
        </HorizontalWrap>

        <HorizontalWrap>
          <Subheading style={{ margin: "0.5rem 0" }}>
            Add yourself to the adopters
          </Subheading>
          <Paragraph>
            and share your chaos engeneering story to the community
          </Paragraph>
          <br />
          <Button screen={sm ? "small" : "large"} gradientColor="green">
            Become an Adopter
          </Button>
        </HorizontalWrap>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { PreFooterTop };
