import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Center } from "../layout";

const GithubIcon: React.FC = () => {
  const data = useStaticQuery(graphql`{
  icon: file(relativePath: {eq: "github-icon.png"}) {
    childImageSharp {
      gatsbyImageData(height: 20, width: 20, layout: FIXED)
    }
  }
}
`);

  const imageData = data.icon.childImageSharp.gatsbyImageData;
  return (
    <div>
      <Center>
        <GatsbyImage image={imageData} alt="GitHub Icon" />
      </Center>
    </div>
  );
};

export { GithubIcon };
