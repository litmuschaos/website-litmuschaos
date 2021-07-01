import React from "react";
import styled from "styled-components";
import { Row, SectionLight } from "../../layout";
import { SubHeading } from "../../texts";
import { adoptersContent } from "./data";

interface Icontent {
  url?: string;
  adopter?: any;
}

const ContentSection = styled.div`
  max-width: 1024px !important;
  &:not(:first-child) {
    margin-top: 3.75rem;
  }
`;

const TextBox = styled.div`
  margin-left: ${props => (props.theme.screens.md ? "1rem" : "2rem")};
`;

const List = styled.ul`
  padding: 0 0 0 1.25rem;
  margin: 1rem 0 0 0;
`;

const SubTextGray = styled.div`
  color: ${props => props.theme.colors.darkGray};
`;

const Img = styled.img`
  display: inline;
  align-self: flex-start;
  width: ${props => (props.theme.screens.md ? "3rem" : "")};
`;

const Why: React.FC<Icontent> = ({ adopter }) => {
  return (
    <ContentSection>
      <Row>
        <Img src={`/assets/bullets/${adopter.key}/why.svg`} />
        <TextBox>
          <SubHeading>{adopter?.why?.heading}</SubHeading>
          <br />
          <SubTextGray>{adopter?.why?.subtext}</SubTextGray>
          <SubTextGray>
            <List>
              {adopter?.why?.list?.map((adopter: any) => {
                return <li>{adopter}</li>;
              })}
            </List>
          </SubTextGray>
        </TextBox>
      </Row>
    </ContentSection>
  );
};
const How: React.FC<Icontent> = ({ adopter }) => {
  return (
    <ContentSection>
      <Row>
        <Img src={`/assets/bullets/${adopter.key}/how.svg`} />
        <TextBox>
          <SubHeading>{adopter?.how?.heading}</SubHeading>
          <br />
          <SubTextGray>{adopter?.how?.subtext}</SubTextGray>
          <SubTextGray>
            <List>
              {adopter?.how?.list?.map((adopter: any) => {
                return <li>{adopter}</li>;
              })}
            </List>
          </SubTextGray>
        </TextBox>
      </Row>
    </ContentSection>
  );
};
const Benefits: React.FC<Icontent> = ({ adopter }) => {
  return (
    <ContentSection>
      <Row>
        <Img src={`/assets/bullets/${adopter?.key}/benefits.svg`} />
        <TextBox>
          <SubHeading>{adopter?.benefits?.heading}</SubHeading>
          <br />
          <SubTextGray>{adopter?.benefits?.subtext}</SubTextGray>
          <SubTextGray>
            <List>
              {adopter?.benefits?.list?.map((adopter: any) => {
                return <li>{adopter}</li>;
              })}
            </List>
          </SubTextGray>
        </TextBox>
      </Row>
    </ContentSection>
  );
};
const Other: React.FC<Icontent> = ({ adopter }) => {
  return adopter.other.heading ? (
    <ContentSection>
      <Row>
        <Img src={`/assets/bullets/${adopter.key}/others.svg`} />
        <TextBox>
          <SubHeading>{adopter?.other?.heading}</SubHeading>
          <SubTextGray>
            {adopter?.other?.list ? (
              <List>
                {adopter?.other?.list?.map((adopter: any) => {
                  return <li>{adopter}</li>;
                })}
              </List>
            ) : (
              <>
                <br />
                Videos:{" "}
                <a rel="noopener noreferrer" href={adopter?.other?.videoUrl}>
                  {adopter?.other?.videoUrl}
                </a>
                {adopter?.other.blogUrl ? (
                  <>
                    <br />
                    <br />
                    Blogs:{" "}
                    <a rel="noopener noreferrer" href={adopter?.other?.blogUrl}>
                      {adopter?.other?.blogUrl}
                    </a>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </SubTextGray>
        </TextBox>
      </Row>
    </ContentSection>
  ) : (
    <></>
  );
};

const Comments: React.FC<Icontent> = ({ url }) => {
  const adopter = adoptersContent.filter((item: any) => item.key === url)[0];

  return (
    <SectionLight>
      <Why adopter={adopter} />
      <How adopter={adopter} />
      <Benefits adopter={adopter} />
      <Other adopter={adopter} />
    </SectionLight>
  );
};

export { Comments };
