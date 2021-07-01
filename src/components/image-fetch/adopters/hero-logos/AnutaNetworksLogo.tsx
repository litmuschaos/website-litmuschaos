import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

const AnutaNetworksLogo: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "anuta.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Orange logo"
      style={{ margin: "auto" }}
    />
  );
};

export { AnutaNetworksLogo };
