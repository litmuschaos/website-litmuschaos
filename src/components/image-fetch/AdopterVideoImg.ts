import { graphql, useStaticQuery } from "gatsby";

type HeroImages = {
  [index: string]: any;
};

const getAdopterVideoImg = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativePath: { regex: "/logo-light/" } }) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              gatsbyImageData(height: 150, quality: 100, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const videoImages: HeroImages = data.images.edges.reduce(
    (acc: HeroImages, edge: any) => {
      const key: string = edge.node.relativeDirectory.split("/")[1];
      return {
        ...acc,
        [key]: edge.node.childImageSharp.gatsbyImageData,
      };
    },
    {}
  );

  return videoImages;
};

export { getAdopterVideoImg };
