import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(GatsbyImage)`
  margin: auto;
  width: 100%;
  object-fit: cover;
`;

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
    <Wrapper>
      <StaticImage
        // image={data.image.childImageSharp.gatsbyImageData}
        // style={{ margin: "auto", objectFit: "cover" }}
        src="../../images/features-image.png"
        layout="fullWidth"
        alt="Image of Litmus Features"
      />
    </Wrapper>
  );
};

export { FeaturesImage };
