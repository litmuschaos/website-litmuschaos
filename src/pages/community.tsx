import React from "react";
import { BoundedContainer, Layout } from "../components/layout";
import { Head } from "../components/sections/community";
import { JoinOurCommunity } from "../components/sections/community";
import { LitmusCommunityVideo } from "../components/sections/community";
import { CommunityEvents } from "../components/sections/community";
import { PreFooter } from "../components/footer";
import { SEO } from "../components/seo";

const Community = () => {
  return (
    <Layout>
      <SEO />
      <BoundedContainer width="95%" margin="1rem auto">
        <Head />
      </BoundedContainer>
      <BoundedContainer width="100%" margin="0">
        <JoinOurCommunity />
      </BoundedContainer>
      <BoundedContainer width="100%" margin="0">
        <LitmusCommunityVideo />
      </BoundedContainer>
      <BoundedContainer width="100%" margin="0">
        <CommunityEvents />
      </BoundedContainer>
      <PreFooter />
    </Layout>
  );
};

export default Community;
