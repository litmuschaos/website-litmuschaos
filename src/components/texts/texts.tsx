import React from "react";
import styled, { useTheme } from "styled-components";

const HeadingStyles = styled.div`
  font-size: ${(props) => props.theme.fontsize.heading};
  color: black;
  min-width: 8rem;
  font-weight: bold;
  padding: 20px 0px;
`;
const SubHeadingStyles = styled.div`
  font-size: ${(props) => props.theme.fontsize.subheading};
  color: black;
  min-width: 8rem;
  font-weight: bold;
  padding: 20px 0px;
`;
const ParagraphStyles = styled.div`
  font-size: ${(props) => props.theme.fontsize.paragraph};
  color: grey;
  min-width: 8rem;
  padding: 20px 0px;
`;

const Heading: React.FC = ({ children }) => {
  const { sm } = useTheme().screens;
  return (
    <HeadingStyles style={{ fontSize: sm ? "2rem" : "" }}>
      {children}
    </HeadingStyles>
  );
};

const SubHeading: React.FC = ({ children }) => {
  const { sm } = useTheme().screens;
  return (
    <SubHeadingStyles style={{ fontSize: sm ? "1.2rem" : "" }}>
      {children}
    </SubHeadingStyles>
  );
};

const Paragraph: React.FC = ({ children }) => {
  const { sm } = useTheme().screens;
  return (
    <ParagraphStyles style={{ fontSize: sm ? "1rem" : "" }}>
      {children}
    </ParagraphStyles>
  );
};

export { Heading, SubHeading, Paragraph };
