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
      <Center>
        <Img fixed={imageData} alt="GitHub Icon" />
      </Center>
    </div>
  );
};

export { GithubIcon };
