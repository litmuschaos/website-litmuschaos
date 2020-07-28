import styled from "styled-components";

const Button = styled.button`
  height: 30px;
  min-width: 100px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

const OutlinedButton = styled.button`
  min-width: 2rem;
  padding: 0 2rem;
  background: #f4f5f7;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  :disabled {
    background: lightgray;
  }
`;

export { Button, OutlinedButton };
