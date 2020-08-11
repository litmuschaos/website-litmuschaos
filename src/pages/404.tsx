import { Link } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Heading, Paragraph } from "../components/texts";

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading>Oops! 404</Heading>
    <Paragraph>You just hit a route that doesn&#39;t exist.</Paragraph>
    <Link to="/">Go Home</Link>
  </Layout>
);

export default NotFoundPage;
