import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export { Row, Column, ColumnCenter };
