import React from "react";
import { PurpleBox } from "../components/imageFetch/PurpleBox";
import { Layout } from "../components/layout";
import { PreFooter } from "../components/preFooter";
import {
  CloudNativeWay,
  FeedBack,
  GetStarted,
  Head,
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
