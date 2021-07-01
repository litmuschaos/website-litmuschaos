import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Center } from "../layout";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const Anuta: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "anuta.png" }) {
        childImageSharp {
          fluid(maxHeight: 40, quality: 100) {
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
          alt="Anuta Networks"
          style={{ margin: "auto" }}
        />
      </Wrapper>
    </Center>
  );
};

export { Anuta };
