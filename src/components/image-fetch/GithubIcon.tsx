import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

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
        <Img fixed={imageData} alt="GitHub Icon" />
      </a>
    </div>
  );
};

export { GithubIcon };
