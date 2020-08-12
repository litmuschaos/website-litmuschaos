import styled from "styled-components";

const CommunityText = styled.div`
  width: ${(props) => (props.theme.screens.sm ? "80%" : "40%")};
  margin: ${(props) => (props.theme.screens.sm ? "0 auto" : "0 5rem")};
  display: flex;
  flex-direction: column;
`;

export { CommunityText };
