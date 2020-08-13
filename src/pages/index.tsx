import React from "react";
import { PreFooter } from "../components/footer";
import { Layout } from "../components/layout";
import {
  CloudNativeWay,
  FeedBack,
  GetStarted,
  Head,
  PurpleBox,
  QuickStart,
} from "../components/sections/home";
import { SEO } from "../components/seo";

const App = () => {
  return (
    <Layout>
      <SEO />
      <PurpleBox />
      <Head />
      <CloudNativeWay />
      <QuickStart />
      <GetStarted />
      <FeedBack />
      <PreFooter />
    </Layout>
  );
};

export default App;
