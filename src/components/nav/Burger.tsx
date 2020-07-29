import React from "react";
import styled from "styled-components";

const StyledBurger = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  background: black;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Burger: React.FC = () => {
  return (
    <>
      <StyledBurger>
        <div>Hello</div>
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

export default Burger;
