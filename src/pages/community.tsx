import React from "react";
import { Layout } from "../components/layout";
import {
  CommunityEvents,
  Contributing,
  Head,
  JoinOurCommunity,
  LitmusCommunityVideo,
} from "../components/sections/community";
import { SEO } from "../components/seo";

const Community = () => {
  return (
    <Layout>
      <SEO
        title="Chaoshub"
        description="Chaos Engineering redefined: LitmusChaos is an open source cloud-native Chaos Engineering framework which helps orchestrate chaos on Kubernetes platforms."
        url="staging.litmuschaos.io/chaoshub"
        author="MayaData"
      />
      <Head />
      <JoinOurCommunity />
      <LitmusCommunityVideo />
      <CommunityEvents />
      <Contributing />
    </Layout>
  );
};

export default Community;
