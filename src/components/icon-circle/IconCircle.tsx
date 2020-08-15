import React from "react";
import styled from "styled-components";

interface ICircle {
  bgColor: (opacity: number) => string | string;
  effectColor: (opacity: number) => string;
  size: number;
}

const OuterCircle = styled.div<ICircle>`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  display: grid;
  place-items: center;
  border: 1px solid ${props => props.effectColor(0.2)};
  border-radius: 50%;
`;

const InnerCircle = styled.div<ICircle>`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  display: grid;
  place-items: center;
  background: ${props =>
    typeof props.bgColor === "string" ? props.bgColor : props.bgColor(1)};
  box-shadow: 0px 19px 33px ${props => props.effectColor(0.25)};
  border-radius: 50%;
`;

const IconCircle: React.FC<ICircle> = ({
  size,
  bgColor,
  effectColor,
  children,
}) => {
  const innerSize = size * 0.8;

  return (
    <div>
      <OuterCircle bgColor={bgColor} effectColor={effectColor} size={size}>
        <InnerCircle
          bgColor={bgColor}
          effectColor={effectColor}
          size={innerSize}
        >
          {children}
        </InnerCircle>
      </OuterCircle>
    </div>
  );
};

export { IconCircle };
