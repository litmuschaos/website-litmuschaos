import React, { useEffect } from "react";
import { PurpleBox } from "../components/image-fetch/PurpleBox";
import { Layout } from "../components/layout";
import {
  CloudNativeWay,
  FeedBack,
  GetStarted,
  Head,
  QuickStart,
} from "../components/sections/home";
import { SEO } from "../components/seo";
import useActions from "../redux/actions/index";
import * as AnalyticsActions from "../redux/actions/analytics";

const App = () => {
  const analyticsAction = useActions(AnalyticsActions);
  analyticsAction.loadCommunityAnalytics();

  return (
    <Layout>
      <SEO />
      <PurpleBox />
      <Head />
      <CloudNativeWay />
      <QuickStart />
      <GetStarted />
      <FeedBack />
    </Layout>
  );
};

export default App;
