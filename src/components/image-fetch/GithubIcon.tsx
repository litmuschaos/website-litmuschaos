import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { Center } from "../layout";

const GithubIcon: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "github-icon.png" }) {
        childImageSharp {
          fixed(height: 20, width: 20) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.icon.childImageSharp.fixed;
  return (
    <div>
      <a
        href="https://github.com/litmuschaos/litmus"
        rel="noopener noreferrer"
        target="_blank"
        style={{ cursor: "pointer" }}
      >
        <Center>
          <Img fixed={imageData} alt="GitHub Icon" />
        </Center>
      </a>
    </div>
  );
};

export { GithubIcon };
