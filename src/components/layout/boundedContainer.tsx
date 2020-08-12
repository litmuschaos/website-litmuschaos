import styled from "styled-components";

interface IBoundedContainer {
  breakpoint: string;
  width: string;
  margin: string;
}

const BoundedContainer = styled.div<IBoundedContainer>`
  margin: ${props =>
    props.theme.screens[props.breakpoint] ? "1rem 0" : props.margin};
  width: ${props =>
    props.theme.screens[props.breakpoint] ? "100%" : props.width};
`;

export { BoundedContainer };
