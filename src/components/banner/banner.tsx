import React from "react";
import { useTheme } from "styled-components";
import "./banner.css"

import { ResponsiveRow } from '../layout'
import { Button } from "../button";






const CNCFBanner: React.FC = () => {
  const { sm,xl,lg} = useTheme().screens
  if(sm )
  {
    return(
      <img style={{marginBottom : "2rem"}}width="100%" className="CNCFbanner" src="/svg/CNCF_banner.svg" alt="CNCF banner" />
    )
  }
  else if(lg)
  {
    return(
      <img style={{margin : "auto"}}width="450px" className="CNCFbanner" src="/svg/CNCF_banner.svg" alt="CNCF banner" />
    )
  }
  else if(xl )
  {
    return(
      <img style={{margin : "auto"}}width="450px" className="CNCFbanner" src="/svg/CNCF_banner.svg" alt="CNCF banner" />
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

  const { sm,xl,lg,md } = useTheme().screens
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
  } 
  else if(md)
  {
    return <div style={{ margin: '1rem', maxWidth : '25rem' }}>
    <h1 style={{fontSize: "1.75rem"}}>
         Create, Manage and Monitor Chaos on Kubernetes
        </h1>
        <p style={{fontSize: "1rem"}} className="kubernetestext">
          Litmus is highly extensible and integrates with other tools to enable the creation of custom experiments. Kubernetes developers & SREs use Litmus to manage chaos in a declarative manner and find weaknesses in their applications and infrastructure.
        </p>
        {flexibleButton}
  </div>
  }
  else if(lg)
  {
        return <div style={{ margin: '2rem 3rem auto 1rem',  maxWidth : '30rem' }}>
        <h1 style={{fontSize: "1.75rem"}}>
          Create, Manage and Monitor Chaos on Kubernetes
          </h1>
          <p className="kubernetestext" style={{fontSize: "0.875rem", maxWidth : '29rem'}} >
            Litmus is highly extensible and integrates with other tools to enable the creation of custom experiments. Kubernetes developers & SREs use Litmus to manage chaos in a declarative manner and find weaknesses in their applications and infrastructure.
          </p>
          {flexibleButton}
          
      </div>
  }
  else if(xl)
  {
        
      return <div style={{ margin: '2rem 10rem auto auto ',  maxWidth : '32rem' }}>
      <h1 style={{fontSize: "1.75rem"}}>
         Create, Manage and Monitor Chaos on Kubernetes
        </h1>
        <p className="kubernetestext" >
          Litmus is highly extensible and integrates with other tools to enable the creation of custom experiments. Kubernetes developers & SREs use Litmus to manage chaos in a declarative manner and find weaknesses in their applications and infrastructure.
        </p>
        {flexibleButton}
        
     </div>

  }
 
  else 
  {
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
