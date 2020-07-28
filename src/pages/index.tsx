import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const command =
  "gatsby new my-app https://github.com/gojutin/gatsby-starter-typescript-deluxe";

const App = () => (
  <Layout>
    <SEO />
  </Layout>
);

export default App;
