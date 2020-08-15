import React from "react";
import { Layout } from "../components/layout";
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
      <SEO
        title="Chaoshub"
        description="Chaos Engineering redefined: LitmusChaos is an open source cloud-native Chaos Engineering framework which helps orchestrate chaos on Kubernetes platforms."
        url="staging.litmuschaos.io/chaoshub"
        author="MayaData"
      />
      <Head />
      <WhyChaoshub />
      <ChaoshubStatistics />
      <ReadyToStart />
    </Layout>
  );
};

export default ChaosHub;
