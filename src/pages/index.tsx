import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Head } from "../components/containers/index";

const App = () => (
  <Layout>
    <SEO />
    <Head leftProp={<div>Hello</div>} rightProp={<div>World</div>} />
  </Layout>
);

export default App;
