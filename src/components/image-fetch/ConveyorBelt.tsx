import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const ConveyorBelt: React.FC = () => {
  const data = useStaticQuery(graphql`{
  image: file(relativePath: {eq: "conveyor-belt.png"}) {
    childImageSharp {
      gatsbyImageData(width: 1100, quality: 100, layout: CONSTRAINED)
    }
  }
}
`);

  return (
    <Wrapper>
      <GatsbyImage
        image={data.image.childImageSharp.gatsbyImageData}
        alt="Choas Bird taking feedback"
        style={{ margin: "auto" }} />
    </Wrapper>
  );
};

export { ConveyorBelt };
