import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled, { useTheme } from "styled-components";

const PurpleBoxImage = styled(GatsbyImage)`
  top: 0;
  right: 0;
  width: 60%;
`;

const PurpleBox: React.FC = () => {
  const { md } = useTheme().screens;
  const data = useStaticQuery(graphql`
    {
      mobile: file(relativePath: { eq: "purple-box-md.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 700
            quality: 100
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
      desktop: file(relativePath: { eq: "purple-box.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1000
            quality: 100
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }
  `);
  const sources = [
    data.mobile.childImageSharp.gatsbyImageData,
    {
      ...data.desktop.childImageSharp.gatsbyImageData,
      media: `(min-width: 780px)`,
    },
  ];
  return (
    <PurpleBoxImage
      image={md ? sources[0] : sources[1]}
      alt="banner image"
      style={{ position: "absolute" }}
    />
  );
};

export { PurpleBox };
