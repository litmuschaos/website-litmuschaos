import React from "react";
import styled from "styled-components";
import { Row, ResponsiveRow, SectionLight, Column } from "../layout";
import { top_adopters } from "./data";
import { Paragraph, Subheading } from "../../components/texts";
import { Button } from "../button";
import { useTheme } from "../../styles";

const Image = styled.img`
  margin: ${(props) => (props.theme.screens.sm ? "1rem 0.5rem" : "0 1rem")};
  width: ${(props) => (props.theme.screens.sm ? "3.8rem" : "100%")};
`;

const VerticalSpacing = styled.div`
  margin: 1rem 0;
`;

const HorizontalSpacing = styled.div`
  width: ${(props) => (props.theme.screens.sm ? "100%" : "70%")};
  margin-bottom: 2rem;
`;

const PreFooter: React.FC = () => {
  const { sm } = useTheme().screens;
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="sm" style={{ justifyContent: "space-around" }}>
        <VerticalSpacing>
          <Column>
            <Subheading style={{ margin: "1rem 0" }}>Created by</Subheading>
            <img src="./svg/mayadata-logo.svg" alt="Mayadata Logo" />
          </Column>
        </VerticalSpacing>
        <VerticalSpacing>
          <Column>
            <Subheading style={{ margin: "1rem 0" }}>Adopted by</Subheading>
            <Row>
              {top_adopters.links.map((link) => (
                <Image src={link.image} alt={`${link.name} logo`} />
              ))}
            </Row>
          </Column>
        </VerticalSpacing>
        <VerticalSpacing>
          <Column>
            <Subheading style={{ margin: "1rem 0" }}>
              Add yourself to the adopters
            </Subheading>
            <Paragraph>
              <HorizontalSpacing>
                and share your chaos engeneering story to the community
              </HorizontalSpacing>
            </Paragraph>
            {sm ? (
              <Button
                style={{ width: "100%" }}
                screen="small"
                gradientColor="green"
              >
                Become an Adopter
              </Button>
            ) : (
              <Button screen="small" gradientColor="green">
                Become an Adopter
              </Button>
            )}
          </Column>
        </VerticalSpacing>
      </ResponsiveRow>
    </SectionLight>
  );
};

export { PreFooter };
