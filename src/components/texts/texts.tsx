import styled from "styled-components";

interface IText {
  textAlign?: "center" | "left" | "right" | "justify" | "initial" | "inherit";
}

const Heading = styled.h1<IText>`
  line-height: 130%;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.heading.md
      : props.theme.fontSize.heading.lg};
`;

const Subheading = styled.p<IText>`
  line-height: 170%;
  font-weight: 600;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.subHeading.md
      : props.theme.fontSize.subHeading.lg};
`;

const Paragraph = styled.p<IText>`
  line-height: 170%;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.paragraph.md
      : props.theme.fontSize.paragraph.lg};
`;

const SubText = styled.p<IText>`
  line-height: 150%;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  color: ${props => props.theme.colors.textPrimary};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.subText.md
      : props.theme.fontSize.subText.lg};
`;

export { Heading, Subheading, Paragraph, SubText };
