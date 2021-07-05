import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(GatsbyImage)`
  margin: auto;
  width: 50%;
  height: ${(props) =>
    props.theme.screens.sm
      ? "7rem"
      : props.theme.screens.xl
      ? "10rem"
      : "10rem"};
  object-fit: cover;
`;

const CNCFImage: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "CNCF.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1024, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <Wrapper>
      <StyledImage
        image={data.image.childImageSharp.gatsbyImageData}
        alt="Image of Litmus Features"
      />
    </Wrapper>
  );
};

export { CNCFImage };
