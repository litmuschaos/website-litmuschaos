import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Center } from "../layout";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const Anuta: React.FC = () => {
  const data = useStaticQuery(graphql`{
  image: file(relativePath: {eq: "anuta.png"}) {
    childImageSharp {
      gatsbyImageData(height: 40, quality: 100, layout: CONSTRAINED)
    }
  }
}
`);

  return (
    <Center>
      <Wrapper>
        <GatsbyImage
          image={data.image.childImageSharp.gatsbyImageData}
          alt="Anuta Networks"
          style={{ margin: "auto" }} />
      </Wrapper>
    </Center>
  );
};

export { Anuta };
