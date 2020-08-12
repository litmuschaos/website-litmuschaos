import React from "react";
import { Layout } from "../components/layout";
import { CloudNativeWay, Head, PurpleBox } from "../components/sections/home";
import { SEO } from "../components/seo";

const App = () => {
  return (
    <Layout>
      <SEO />
      <PurpleBox />
      <Head />
      <CloudNativeWay />
    </Layout>
  );
};

export default App;
