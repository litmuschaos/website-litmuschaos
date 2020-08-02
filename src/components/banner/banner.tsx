import React from "react";
import styled, { useTheme } from "styled-components";
import "./adopter.css"

import { ResponsiveRow } from '../layout'
import { Button } from "../button";






const CNCFBanner: React.FC = () => (
  <img className="CNCFbanner" src="/svg/CNCF_banner.svg" alt="CNCF banner" />
);






const Banner: React.FC = () => {
  const { sm, md } = useTheme().screens;

  const flexibleButton = (
    <Button screen={sm ? "small" : "large"} className="GetStartedButton" gradientColor="purple">
      Get Started
    </Button>
  );
  return(
    <>
      <ResponsiveRow>
        <div className="LeftColumn">
          <h1 className="kubernetesHeading">
           Create, Manage and Monitor Chaos on Kubernetes
          </h1>
          <p className="kubernetestext">
            Litmus is highly extensible and integrates with other tools to enable the creation of custom experiments. Kubernetes developers & SREs use Litmus to manage chaos in a declarative manner and find weaknesses in their applications and infrastructure.
          </p>
          {flexibleButton}
        </div>
        <div className="RightColumn">
          <CNCFBanner />
        </div>
      </ResponsiveRow>
    </>
  )
}


export { Banner };
