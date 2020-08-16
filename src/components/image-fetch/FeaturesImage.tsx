import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Img)`
  margin: auto;
  width: 100%;
  object-fit: cover;
`;

const FeaturesImage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "features-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <StyledImage
        fluid={data.image.childImageSharp.fluid}
        alt="Image of Litmus Features"
      />
    </Wrapper>
  );
};

export { FeaturesImage };
