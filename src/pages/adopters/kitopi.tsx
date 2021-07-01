import React from "react";
import { Layout } from "../../components/layout";
import { Comments } from "../../components/sections/individual-adopters/Comments";
import { Hero } from "../../components/sections/individual-adopters/Hero";
import { useLocation } from "@reach/router";

const Kitopi = () => {
  const location = useLocation();
  const urlSlug = location.pathname
    ?.replace(/\/$/, "")
    .split("/")
    .pop();
  return (
    <Layout noPreFooter>
      <Hero url={urlSlug} />
      <Comments url={urlSlug} />
    </Layout>
  );
};

export default Kitopi;
