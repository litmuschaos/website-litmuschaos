import React from "react";
import {
  Head,
  CloudNativeWay,
  StartInMinutes,
  GetStartedWithLitmus,
  SeeWhatOur,
} from "../components/containers/index";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const App = () => {
  return (
    <Layout>
      <SEO />
      <Head />
      <CloudNativeWay />
      <StartInMinutes />
      <GetStartedWithLitmus />
      <SeeWhatOur />
    </Layout>
  );
};

export default App;
