import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Center } from "../layout";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const LensKart: React.FC = () => {
  const data = useStaticQuery(graphql`{
  image: file(relativePath: {eq: "lenskart.png"}) {
    childImageSharp {
      gatsbyImageData(height: 50, quality: 100, layout: CONSTRAINED)
    }
  }
}
`);

  return (
    <Center>
      <Wrapper>
        <GatsbyImage
          image={data.image.childImageSharp.gatsbyImageData}
          alt="LensKart"
          style={{ margin: "auto" }} />
      </Wrapper>
    </Center>
  );
};

export { LensKart };
