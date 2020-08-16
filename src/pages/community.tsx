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
      <SEO />
      <Head />
      <JoinOurCommunity />
      <LitmusCommunityVideo />
      <CommunityEvents />
      <Contributing />
    </Layout>
  );
};

export default Community;
