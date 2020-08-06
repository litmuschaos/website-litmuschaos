import React from "react";
import { useTheme } from "styled-components";
import "./banner.css"

import { ResponsiveRow } from '../layout'
import { Button } from "../button";






const CNCFBanner: React.FC = () => {
  const { sm } = useTheme().screens
  if(sm )
  {
    return(
      <img style={{margin : "0 0 3rem 0rem"}}width="100%" className="CNCFbanner" src="/svg/CNCF_banner.svg" alt="CNCF banner" />
    )
  }
  else
  {
    return(
    <img  width="536px" className="CNCFbanner" src="/svg/CNCF_banner.svg" alt="CNCF banner" />
    )
  }

};



const BannerLeftColumn: React.FC = () => {

  const { sm } = useTheme().screens
  const flexibleButton = (
    <Button screen={sm ? "small" : "large"} className="GetStartedButton" gradientColor="purple">
      Get Started
    </Button>
  );
  if (sm) {
    return <div style={{ margin: '0 1rem' }}>
      <h1 style={{fontSize: "1.75rem"}}>
           Create, Manage and Monitor Chaos on Kubernetes
          </h1>
          <p className="kubernetestext">
            Litmus is highly extensible and integrates with other tools to enable the creation of custom experiments. Kubernetes developers & SREs use Litmus to manage chaos in a declarative manner and find weaknesses in their applications and infrastructure.
          </p>
          {flexibleButton}
    </div>
  } else {
    return (
      <div style={{ margin: '6.25rem 0 3rem 0'}}>
        <h1 style={{fontSize: "3rem"}}>
           Create, Manage and Monitor Chaos on Kubernetes
          </h1>
          <p className="kubernetestext">
            Litmus is highly extensible and integrates with other tools to enable the creation of custom experiments. Kubernetes developers & SREs use Litmus to manage chaos in a declarative manner and find weaknesses in their applications and infrastructure.
          </p>
          {flexibleButton}
      </div>
    )
  }
}


const Banner: React.FC = () => {
  

  
  return(
    <>
      <ResponsiveRow>
        <div className="LeftColumn">
          <BannerLeftColumn />
          
        </div>
        <div className="RightColumn">
          <CNCFBanner />
        </div>
      </ResponsiveRow>
    </>
  )
}


export { Banner };
