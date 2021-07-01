import { RouteComponentProps, Router } from "@reach/router";
import React from "react";
import { Layout } from "../components/layout";
import { Head } from "../components/sections/adopters/Head";
import ListAdopters from "../components/sections/adopters/ListAdopter";
import { Comments } from "../components/sections/individual-adopters/Comments";
import { Hero } from "../components/sections/individual-adopters/Hero";
import { Video } from "../components/sections/individual-adopters/Video";

const Adopters: React.FC = () => {
  return (
    <Router>
      <Landing path="/adopters" />
      <Adopter path="/adopters/:adopterName" />
    </Router>
  );
};

const Landing = (props: Iadopters) => {
  return (
    <>
      <Layout>
        <Head />
        <ListAdopters url={props.adopterName} />
      </Layout>
    </>
  );
};

interface Iadopters extends RouteComponentProps {
  adopterName?: string;
  url?: string;
}

const Adopter = (props: Iadopters) => {
  return (
    <>
      <Layout noPreFooter>
        <Hero url={props.adopterName} />
        <Video url={props.adopterName} />
        <Comments url={props.adopterName} />
      </Layout>
    </>
  );
};

export default Adopters;
