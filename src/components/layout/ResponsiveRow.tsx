import styled, { css } from "styled-components";

interface IResponsiveRow {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  alignItems?: string;
  justifyContent?: string;
  reverseColumn?: boolean;
  reverseRow?: boolean;
  marginBottom?: string;
}

const ResponsiveRow = styled.div<IResponsiveRow>`
  width: 100%;
  display: flex;
  max-width: 1200px !important;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "")};
  ${props =>
    props.theme.screens[props.breakpoint]
      ? css`
          flex-direction: ${props.reverseColumn ? "column-reverse" : "column"};
          align-items: ${props.alignItems ?? "center"};
        `
      : css`
          flex-direction: ${props.reverseRow ? "row-reverse" : "row"};
          justify-content: ${props.justifyContent ?? "space-between"};
        `};
`;

export { ResponsiveRow };
