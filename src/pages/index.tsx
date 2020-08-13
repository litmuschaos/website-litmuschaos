import React from "react";
import { Layout } from "../components/layout";
import {
  CloudNativeWay,
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
    </Layout>
  );
};

export default App;
