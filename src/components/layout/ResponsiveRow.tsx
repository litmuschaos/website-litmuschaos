import styled, { css } from "styled-components";

interface IResponsiveRow {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: boolean;
}

const ResponsiveRow = styled.div<IResponsiveRow>`
  width: 100%;
  display: flex;
  max-width: 1200px !important;
  ${props =>
    props.theme.screens[props.breakpoint]
      ? css`
          flex-direction: ${props.flexDirection ? "column-reverse" : "column"};
          align-items: ${props.alignItems ?? "center"};
        `
      : css`
          flex-direction: row;
          justify-content: ${props.justifyContent ?? "space-between"};
        `};
`;

export { ResponsiveRow };
