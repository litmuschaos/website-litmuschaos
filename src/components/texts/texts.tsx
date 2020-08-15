import React from "react";
import styled, { useTheme } from "styled-components";

interface IText {
  textAlign?: "center" | "left" | "right" | "justify" | "initial" | "inherit";
}

const Heading = styled.h1<IText>`
  line-height: 130%;
  text-align: ${props => props.textAlign ?? "left"};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.heading.md
      : props.theme.fontSize.heading.lg};
`;

const SubHeading = styled.p<IText>`
  line-height: 170%;
  font-weight: 600;
  text-align: ${props => props.textAlign ?? "left"};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.subHeading.md
      : props.theme.fontSize.subHeading.lg};
`;

const Paragraph = styled.p<IText>`
  line-height: 170%;
  text-align: ${props => props.textAlign ?? "left"};
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.paragraph.md
      : props.theme.fontSize.paragraph.lg};
`;

interface IPurpleText extends IText {
  underline: boolean;
}

const PurpleText = styled.p<IPurpleText>`
  line-height: 130%;
  font-weight: 600;
  text-align: ${props => props.textAlign ?? "left"};
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: ${props => (props.underline ? "underline" : "none")};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.subHeading.md
      : props.theme.fontSize.subHeading.lg};
`;

interface ISubText extends IText {
  color?: string;
  fontWeight?: string;
}

const SubText = styled.p<ISubText>`
  line-height: 150%;
  text-align: ${props => props.textAlign ?? "left"};
  color: ${props => props.color ?? props.theme.colors.textPrimary};
  font-weight: ${props => props.fontWeight ?? "normal"};
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.subText.md
      : props.theme.fontSize.subText.lg};
`;

interface ICode extends IText {
  color: (opacity: number) => string;
}

const Code = styled.span<ICode>`
  line-height: 170%;
  text-align: ${props => props.textAlign ?? "left"};
  color: ${props => props.color(1)};
  word-wrap: break-word;
  font-size: ${props =>
    props.theme.screens.md
      ? props.theme.fontSize.paragraph.md
      : props.theme.fontSize.paragraph.lg};
`;
interface IKubeCmd {
  text: string;
}
const KubeCmd: React.FC<IKubeCmd> = ({ text }) => {
  const { yellow, purple, red, grayText } = useTheme().colors;

  return (
    <p>
      <Code color={yellow}>kubectl&nbsp;</Code>
      <Code color={purple}>apply&nbsp;</Code>
      <Code color={red}>-f&nbsp;</Code>
      <Code color={grayText}>{text}</Code>
    </p>
  );
};

const GreenStats = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${props => (props.theme.screens.md ? "3.18rem" : "4rem")};
  font-weight: bold;
  color: ${props => props.theme.colors.darkGreen(1)};
`;

export {
  Heading,
  SubHeading,
  Paragraph,
  SubText,
  KubeCmd,
  PurpleText,
  GreenStats,
};
