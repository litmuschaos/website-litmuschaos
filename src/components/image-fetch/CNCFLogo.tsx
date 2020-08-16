import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Center } from "../layout";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const CNCFLogo: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      mobile: file(relativePath: { eq: "CNCFMobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      desktop: file(relativePath: { eq: "CNCFDesktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  const sources = [
    data.mobile.childImageSharp.fluid,
    {
      ...data.desktop.childImageSharp.fluid,
      media: `(min-width: 1280px)`,
    },
  ];
  return (
    <Center>
      <Wrapper>
        <Img
          fluid={sources}
          alt="Choas Bird taking feedback"
          style={{ margin: "auto" }}
        />
      </Wrapper>
    </Center>
  );
};

export { CNCFLogo };
