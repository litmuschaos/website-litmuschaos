import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 50%;
  margin-right: 2.5rem;
`;

const Avatar: React.FC = () => {
  const data = useStaticQuery(graphql`{
  icon: file(relativePath: {eq: "avatar.png"}) {
    childImageSharp {
      gatsbyImageData(height: 80, width: 80, layout: FIXED)
    }
  }
}
`);

  const imageData = data.icon.childImageSharp.gatsbyImageData;
  return (
    <Wrapper>
      <GatsbyImage image={imageData} alt="Avatar" />
    </Wrapper>
  );
};

export { Avatar };
