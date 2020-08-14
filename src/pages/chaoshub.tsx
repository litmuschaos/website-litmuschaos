import React from "react";
import { PreFooter } from "../components/preFooter";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import {
  Head,
  WhyChaoshub,
  ChaoshubStatistics,
} from "../components/sections/chaoshub";

const App = () => {
  return (
    <Layout>
      <SEO />
      <Head />
      <WhyChaoshub />
      <ChaoshubStatistics />
      <PreFooter />
    </Layout>
  );
};

export default App;
