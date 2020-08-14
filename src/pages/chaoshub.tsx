import React from "react";
import { PreFooter } from "../components/preFooter";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import {
  Head,
  WhyChaoshub,
  ChaoshubStatistics,
  ReadyToStart,
} from "../components/sections/chaoshub";

const App = () => {
  return (
    <Layout>
      <SEO />
      <Head />
      <WhyChaoshub />
      <ChaoshubStatistics />
      <ReadyToStart />
      <PreFooter />
    </Layout>
  );
};

export default App;
