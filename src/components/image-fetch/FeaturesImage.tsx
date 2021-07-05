import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const FeaturesImage: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "features-image.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1024, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <GatsbyImage
      image={data.image.childImageSharp.gatsbyImageData}
      style={{ position: "absolute", transform: "translate(19%, 0)" }}
      alt="Image of Litmus Features"
    />
  );
};

export { FeaturesImage };
