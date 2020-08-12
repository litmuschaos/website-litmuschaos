import React from "react";
import styled from "styled-components";

interface IColor {
  color: (opacity: number) => string;
}

const OuterCircle = styled.div<IColor>`
  width: 6.25rem;
  height: 6.25rem;
  display: grid;
  place-items: center;
  border: 1px solid ${props => props.color(0.2)};
  border-radius: 50%;
  background: transparent;
`;

const InnerCircle = styled.div<IColor>`
  width: 5rem;
  height: 5rem;
  display: grid;
  place-items: center;
  background: ${props => props.color(1)};
  box-shadow: 0px 19px 33px ${props => props.color(0.25)};
  border-radius: 50%;
`;

interface IIconCircle extends IColor {
  src: string;
  alt: string;
}

const IconCircle: React.FC<IIconCircle> = ({ color, src, alt }) => {
  return (
    <div>
      <OuterCircle color={color as any}>
        <InnerCircle color={color as any}>
          <img src={src} alt={alt} />
        </InnerCircle>
      </OuterCircle>
    </div>
  );
};

export { IconCircle };
