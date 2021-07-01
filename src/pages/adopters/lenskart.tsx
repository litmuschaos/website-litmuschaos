import React from "react";
import { Layout } from "../../components/layout";
import { Comments } from "../../components/sections/individual-adopters/Comments";
import { Hero } from "../../components/sections/individual-adopters/Hero";
import { Video } from "../../components/sections/individual-adopters/Video";
import { useLocation } from "@reach/router";

const Lenskart = () => {
  const location = useLocation();
  console.log(location.pathname);
  const urlSlug = location.pathname
    ?.replace(/\/$/, "")
    .split("/")
    .pop();
  return (
    <Layout noPreFooter>
      <Hero url={urlSlug} />
      <Video url={urlSlug} />
      <Comments url={urlSlug} />
    </Layout>
  );
};

export default Lenskart;
