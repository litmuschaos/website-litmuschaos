import React from "react";
import { PreFooter } from "../components/footer";
import { Layout } from "../components/layout";
import {
  CommunityEvents,
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
      <PreFooter />
    </Layout>
  );
};

export default Community;
