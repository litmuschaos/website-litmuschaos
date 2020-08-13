import styled from "styled-components";

interface IBoundedContainer {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  width: string;
  margin: string;
}

const BoundedContainer = styled.div<IBoundedContainer>`
  max-width: 40rem;
  margin: ${props =>
    props.theme.screens[props.breakpoint] ? "1rem 0" : props.margin};
  width: ${props =>
    props.theme.screens[props.breakpoint] ? "100%" : props.width};
`;

export { BoundedContainer };
