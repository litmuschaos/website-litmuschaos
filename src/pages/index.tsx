import React from "react";
import { Layout } from "../components/layout";
import {
  CloudNativeWay,
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
    </Layout>
  );
};

export default App;
