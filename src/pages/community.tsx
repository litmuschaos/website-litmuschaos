import React from "react";
import { PreFooter } from "../components/footer";
import { BoundedContainer, Layout } from "../components/layout";
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
      <BoundedContainer breakpoint="sm" width="95%" margin="1rem auto">
        <Head />
      </BoundedContainer>
      <BoundedContainer breakpoint="sm" width="100%" margin="0">
        <JoinOurCommunity />
      </BoundedContainer>
      <BoundedContainer breakpoint="sm" width="100%" margin="0">
        <LitmusCommunityVideo />
      </BoundedContainer>
      <BoundedContainer breakpoint="sm" width="100%" margin="0">
        <CommunityEvents />
      </BoundedContainer>
      <PreFooter />
    </Layout>
  );
};

export default Community;
