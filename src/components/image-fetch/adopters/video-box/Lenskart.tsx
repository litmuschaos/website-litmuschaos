import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Center } from "../../../layout";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const Lenskart: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "lenskart.png" }) {
        childImageSharp {
          fluid(maxHeight: 150, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Center>
      <Wrapper>
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="Lenskart"
          style={{ margin: "auto" }}
        />
      </Wrapper>
    </Center>
  );
};

export { Lenskart };
