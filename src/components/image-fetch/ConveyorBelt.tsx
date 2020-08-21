import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const ConveyorBelt: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "conveyor-belt.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Img
        fluid={data.image.childImageSharp.fluid}
        alt="Choas Bird taking feedback"
        style={{ margin: "auto" }}
      />
    </Wrapper>
  );
};

export { ConveyorBelt };
