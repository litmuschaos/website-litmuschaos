import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const Link = styled(GatsbyLink)`
  display: block;
  color: white;
  text-decoration: none;
  :hover {
    font-weight: bold;
    color: black;
  }
`;

export { Link };
