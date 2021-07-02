import { RouteComponentProps, Router } from "@reach/router";
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
  const Home: React.FC<RouteComponentProps> = () => (
    <Layout>
      <SEO />
      <Head />
      <PurpleBox />
      <BannerHome />
      <CloudNativeWay />
      <QuickStart />
      <GetStarted />
      <FeedBack />
    </Layout>
  );

  return (
    <Router>
      <Home path="/" />
    </Router>
  );
};

export default App;
