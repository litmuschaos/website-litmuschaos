import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10% 0;
`;

const OctocatSM: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "octocat.png" }) {
        childImageSharp {
          fixed(height: 200, width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.icon.childImageSharp.fixed;
  return (
    <Wrapper>
      <motion.a
        href="https://github.com/gojutin/gatsby-starter-typescript-deluxe"
        rel="noopener noreferrer"
        target="_blank"
        // eslint-disable-next-line @typescript-eslint/tslint/config
        css={`
          cursor: pointer;
        `}
        whileHover={{ opacity: 0.5 }}
      >
        <Img fixed={imageData} alt="GitHub Icon" />
      </motion.a>
    </Wrapper>
  );
};

export { OctocatSM };
