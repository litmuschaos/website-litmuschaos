import React from "react";
import { Layout } from "../components/layout";
import { Features, Head } from "../components/sections/whylitmus";
import { SEO } from "../components/seo";

const WhyLitmus = () => {
  return (
    <Layout>
      <SEO />
      <Head />
      <Features />
    </Layout>
  );
};

export default WhyLitmus;
