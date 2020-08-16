import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

const PurpleBoxImage = styled(Img)`
  top: 0;
  right: 0;
  width: 60%;
`;

const PurpleBox: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "purple-box-md.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      desktop: file(relativePath: { eq: "purple-box.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  const sources = [
    data.mobile.childImageSharp.fluid,
    {
      ...data.desktop.childImageSharp.fluid,
      media: `(min-width: 780px)`,
    },
  ];
  return (
    <PurpleBoxImage
      fluid={sources}
      alt="banner image"
      style={{ position: "absolute" }}
    />
  );
};

export { PurpleBox };
