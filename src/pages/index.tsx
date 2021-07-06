import React from "react";
import { PurpleBox } from "../components/image-fetch/PurpleBox";
import { Layout } from "../components/layout";
import {
  CloudNativeWay,
  FeedBack,
  GetStarted,
  Head,
  QuickStart,
} from "../components/sections/home";
import { BannerHome } from "../components/sections/home/Banner";
import { SEO } from "../components/seo";

const App = () => {
  return (
    <>
      <BannerHome />
      <Layout>
        <SEO />
        <Head />
        <PurpleBox />
        <CloudNativeWay />
        <QuickStart />
        <GetStarted />
        <FeedBack />
      </Layout>
    </>
  );
};

export default App;
