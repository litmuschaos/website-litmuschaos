import React from "react";
import { Layout } from "../components/layout";
import { PreFooter } from "../components/preFooter";
import {
  ChaoshubStatistics,
  Head,
  ReadyToStart,
  WhyChaoshub,
} from "../components/sections/chaoshub";
import { SEO } from "../components/seo";

const ChaosHub = () => {
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

export default ChaosHub;
