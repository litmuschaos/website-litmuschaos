import styled, { css } from "styled-components";

interface IResponsiveRow {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  alignItems?: string;
  justifyContent?: string;
}

const ResponsiveRow = styled.div<IResponsiveRow>`
  width: 100%;
  display: flex;
  ${props =>
    props.theme.screens[props.breakpoint]
      ? css`
          flex-direction: column;
          align-items: ${props.alignItems ?? "center"};
        `
      : css`
          flex-direction: row;
          justify-content: ${props.justifyContent ?? "center"};
        `};
`;

export { ResponsiveRow };
