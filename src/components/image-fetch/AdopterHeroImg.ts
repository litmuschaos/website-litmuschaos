import { graphql, useStaticQuery } from "gatsby";

type HeroImages = {
  [index: string]: any;
};

const getAdopterHeroImg = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativePath: { regex: "/logo-dark/" } }) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              gatsbyImageData(width: 350, quality: 100, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const heroImages: HeroImages = data.images.edges.reduce(
    (acc: HeroImages, edge: any) => {
      const key: string = edge.node.relativeDirectory.split("/")[1];
      return {
        ...acc,
        [key]: edge.node.childImageSharp.gatsbyImageData,
      };
    },
    {}
  );

  return heroImages;
};

export { getAdopterHeroImg };
