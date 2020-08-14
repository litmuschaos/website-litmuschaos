import React from "react";
import styled from "styled-components";

const StyledBurger = styled.div`
  position: absolute;
  right: 5%;
  margin: 0 0.7rem;
  margin-top: 0.5rem;
  height: 1.5rem;
  width: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .line {
    width: 70%;
    margin-left: 30%;
  }
`;

const Burger: React.FC = () => {
  return (
    <StyledBurger>
      <button />
      <button className="line" />
      <button className="line" />
    </StyledBurger>
  );
};

export default Burger;
