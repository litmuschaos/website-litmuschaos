import React from "react";
import { PreFooter } from "../components/footer";
import { Layout } from "../components/layout";
import { theme } from "../styles";
import { Nav } from "../components/nav";
import {
  CommunityEvents,
  Head,
  JoinOurCommunity,
  LitmusCommunityVideo,
  Contributing,
} from "../components/sections/community";
import { SEO } from "../components/seo";

const Community = () => {
  return (
    <Layout>
      <Nav />
      <SEO />
      <Head />
      <JoinOurCommunity />
      <LitmusCommunityVideo />
      <CommunityEvents />
      <Contributing />
      <PreFooter />
    </Layout>
  );
};

export default Community;
