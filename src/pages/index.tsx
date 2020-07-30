import React from "react";
import { Head } from "../components/containers/index";
import { Layout, ResponsiveRow } from "../components/layout";
import { SEO } from "../components/seo";
import {useTheme} from '../styles'

const CloudNativeWay:React.FC = ({ children }) => {
  const { sm } = useTheme().screens;
  if(sm) {
    return (
      <div style={{margin: '0 1rem'}}>
        {children}
      </div>
    );
  } else {
    return (
      <div style={{margin: '9rem 0 3rem 0', textAlign: 'center'}}>
          {children}
      </div>
    );
  }
};

const App = () => {

  return (
  <Layout>
    <SEO />
    <Head />
    <CloudNativeWay>
      <h2>Do it the cloud-native way</h2>
      <ResponsiveRow>
        <img src="./svg/chaosbird_experimenting.svg" alt="Chaos Bird Experimenting" />
        <div>
          <p>Some</p>
          <p>File</p>
        </div>
      </ResponsiveRow>
    </CloudNativeWay>
  </Layout>
  );
};

export default App;
