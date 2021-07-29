import React from "react";
import { Helmet } from "react-helmet";
import { Meta, useSiteMetadata } from "../../hooks";
type MetaItem = {
  name: string;
  content: string;
};
type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  author?: string;
  keywords?: string[];
  meta?: MetaItem[];
  image?: string;
};
const SEO: React.FC<SEOProps> = (props) => {
  const siteMetadata = useSiteMetadata();
  const {
    siteTitle,
    siteDescription,
    siteAuthor,
    siteUrl,
    meta = [],
    siteKeywords,
    siteImage,
  } = siteMetadata;
  const title = props.title || siteTitle;
  const description = props.description || siteDescription;
  const url = props.url || siteUrl;
  const author = props.author || siteAuthor;
  const image = props.image || siteImage;
  const keywords = [...siteKeywords, props.keywords].join(",");
  const metaData: Meta[] = [
    {
      name: "canonical",
      content: url,
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "image",
      content: image,
    },
    {
      name: "author",
      content: author,
    },
    {
      name: "url",
      property: "og:url",
      content: url,
    },
    {
      name: "type",
      property: "og:type",
      content: "article",
    },
    {
      name: "title",
      property: "og:title",
      content: title,
    },
    {
      name: "description",
      property: "og:description",
      content: description,
    },
    {
      name: "image",
      property: "og:image",
      content: image,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: author,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: image,
    },
    {
      name: "keywords",
      content: keywords,
    },
  ].concat(meta);
  const linkData = [
    {
      rel: "shortcut icon",
      href: "favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "icons/apple-touch-icon.png",
    },
  ];
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      // titleTemplate={`%s | ${siteTitle}`}
      meta={metaData}
      link={linkData}
    />
  );
};
export { SEO };
