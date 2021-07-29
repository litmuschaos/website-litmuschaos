import { graphql, useStaticQuery } from "gatsby";
export type Meta = {
  name: string;
  property?: string;
  content: string;
};
export type SiteMetadata = {
  site: {
    siteMetadata: {
      siteTitle: string;
      siteDescription: string;
      siteAuthor: string;
      siteUrl: string;
      meta?: Meta[];
      siteKeywords: string[];
      siteImage: string;
    };
  };
};
function useSiteMetadata() {
  const data: SiteMetadata = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteAuthor
          siteUrl
          siteKeywords
          siteImage
        }
      }
    }
  `);
  return data.site.siteMetadata;
}
export { useSiteMetadata };
