import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Center } from "../layout";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const CommunityImage: React.FC = () => {
  const data = useStaticQuery(graphql`{
  image: file(relativePath: {eq: "community.png"}) {
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
          alt="Choas Bird looking at chaos experiments"
          style={{ margin: "auto" }} />
      </Wrapper>
    </Center>
  );
};

export { CommunityImage };
