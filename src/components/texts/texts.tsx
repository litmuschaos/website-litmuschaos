import styled from "styled-components";

const Heading = styled.h1`
  line-height: 130%;
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.heading.md
      : props.theme.fontSize.heading.lg};
`;

const Paragraph = styled.p`
  line-height: 170%;
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.paragraph.md
      : props.theme.fontSize.paragraph.lg};
`;

export { Heading, Paragraph };
