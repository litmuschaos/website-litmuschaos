import { graphql, useStaticQuery } from "gatsby";

type CardImages = {
  [index: string]: any;
};

const getAdopterCardImg = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativePath: { regex: "/logo-light/" } }) {
        edges {
          node {
            relativeDirectory
            childImageSharp {
              gatsbyImageData(
                width: 220
                quality: 100
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `);

  const cardImages: CardImages = data.images.edges.reduce(
    (acc: CardImages, edge: any) => {
      const key: string = edge.node.relativeDirectory.split("/")[1];
      return {
        ...acc,
        [key]: edge.node.childImageSharp.gatsbyImageData,
      };
    },
    {}
  );

  return cardImages;
};

export { getAdopterCardImg };
