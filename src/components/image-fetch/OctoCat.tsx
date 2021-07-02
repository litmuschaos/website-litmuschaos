import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Center } from "../layout";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const OctoCat: React.FC = () => {
  const data = useStaticQuery(graphql`{
  image: file(relativePath: {eq: "octocat.png"}) {
    childImageSharp {
      gatsbyImageData(width: 700, quality: 100, layout: CONSTRAINED)
    }
  }
}
`);

  return (
    <Center>
      <Wrapper>
        <GatsbyImage
          image={data.image.childImageSharp.gatsbyImageData}
          alt="Github Octocat"
          style={{ margin: "auto" }} />
      </Wrapper>
    </Center>
  );
};

export { OctoCat };
