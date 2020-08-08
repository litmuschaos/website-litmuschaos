import React from "react";

import  "../styles/chaoshub.css"
import { useTheme } from '../styles'
import { Button } from "../components/button";
import { Layout, ResponsiveRow } from '../components/layout'
import { SEO } from '../components/seo'


const ChaoshubImage: React.FC = () => {
    const {sm,md, lg } = useTheme().screens
  if(sm)
  {
    return(
    <img  style={{display : "none"}} src="/svg/ChaoshubHeroImage.svg" alt="Mayadata Logo" />
   )
  }
  else if(md)
  {
    return(
      <img  style={{width : "20rem", height : "22.5rem", marginTop :"5rem" }}src="/svg/ChaoshubHeroImage.svg" alt="Mayadata Logo" />
      )
  }
  else if(lg)
  {
    return(
      <img  style={{width : "30rem", height : "22.5rem", marginTop :"5rem" }}src="/svg/ChaoshubHeroImage.svg" alt="Mayadata Logo" />
      )
  }
  else{
      return(
    <img  style={{width : "40rem", height : "30rem", marginTop :"5rem" }}src="/svg/ChaoshubHeroImage.svg" alt="Mayadata Logo" />
    )
  }

}

const LiveImage: React.FC = () => {
  const { lg } = useTheme().screens
  if (lg)
  {
    return (
      <img  style={{width : "5.625rem", height : "3.75rem" }}src="/svg/live.svg" alt="Live banner Logo" />
    )
  }
  else
  {
      return (
        <img  style={{width : "7.0625rem", height : "2.875rem"}}src="/svg/live.svg" alt="Live banner Logo" />
      )
  }
}

const Experiments: React.FC = () => {
  const { lg } = useTheme().screens
  if (lg)
  {
    return (
      <img  style={{width : "9rem", height : "9rem"}}src="/svg/Experiments.svg" alt="Live banner Logo" />
    )
  }
  else
  {
      return (
        <img  style={{width : "10rem", height : "10rem", padding:"0rem" }}src="/svg/Experiments.svg" alt="Live banner Logo" />
      )
  }
}

const Installations: React.FC = () => {
  const { lg } = useTheme().screens
  if (lg)
  {
    return (
      <img  style={{width : "9rem", height : "9rem"}}src="/svg/Installations.svg" alt="Live banner Logo" />
    )
  }
  else
  {
      return (
        <img  style={{width : "10rem", height : "10rem", padding:"0rem" }}src="/svg/Installations.svg" alt="Live banner Logo" />
      )
  }
}

const ChaoshubIntroduction: React.FC = () => {
    const { sm,lg } = useTheme().screens;
    const flexibleButton = (
    <Button screen={lg ? "small" : "large"} className="GetStartedButton" gradientColor="purple">
        Get Started
    </Button>
    )
    return(
        <div style={{ margin:lg?"3rem 1rem 2rem 1rem": '5rem 3rem 3rem 0'}}>
          <h1 style={{fontSize : lg ?"1.75rem":"3.5rem",maxWidth : lg ? "100%" : "36.5rem"}}>
            Your Experiments for Kubernetes are ready!
          </h1>
          <p style={{maxWidth : lg ? "100%" : "35rem", margin: '2rem 0 0 0', color : "#6F6F6F"}}>
            Litmus is highly extensible and integrates with other tools to enable the creation of custom experiments. Kubernetes developers & SREs use Litmus to manage chaos in a declarative manner and find weaknesses in their applications and infrastructure.
          </p>
          {flexibleButton}
        </div>
    
    )
        

}


const AboutRessilence: React.FC = () => {
  const { lg } = useTheme().screens;
  return(
    <div style={{maxWidth :"40.6875rem", margin:lg?"3rem 1rem 2rem 1rem": '5rem 0 5rem 0'}}>
      <h1 style={{fontSize : lg ?"1.75rem":"3.5rem"}}>Why Chaoshub?</h1>
      <hr style={{ width: "100%", margin: "1rem auto"}} />
      <ResponsiveRow>
        <h1 style={{fontSize : lg ?"3rem":"4.5rem",color : "#109B67", width : lg? "12rem": "15rem"}}>&#60; 90%</h1>
        <p style={{maxWidth: lg? "auto":"27.5625rem", margin:lg?"0":"1rem 0 0 1rem", fontSize: '1rem', color : "#6F6F6F"}}>of the resilience of your service depends on fixing or tuning the weaknesses in the configuration or code of the rest of micro services including Kubernetes.</p>
      </ResponsiveRow>
      <hr style={{ width: "100%", margin: "1rem auto"}} />
      <p>You will need chaos experiments to cover most of the micro services and 
        they need to be continously updated with the changes in the micro services. 
        LitmusChaos project encourages community to contribute their experiments to a 
        central place so that their end users can use them and stay resilient. 
        This central place is Litmus ChaosHub.
        </p>
    </div>
  )
}

const UsefulLinks: React.FC = () => {
  
  const { lg } = useTheme().screens;
  return(
    <div style={{width : lg ?"auto":"30.0625rem",margin:lg ? '2rem 1rem 3rem 1rem':'6rem 0 0 7.5rem'}}>
      <h5 style={{fontSize : lg ?"1.1255rem":"1.5rem"}}>Useful Links</h5>
      <ol style={{paddingLeft : "1.25rem"}}>
        <li><a href="#" style={{color : "#5B44BA",textDecoration : "underline", fontSize:lg ? "1.125rem":"1.5rem", fontWeight : "500"}}>How to use ChaosHub?</a></li>
        <li><a href="#" style={{color : "#5B44BA", textDecoration : "underline",fontSize:lg ? "1.125rem": "1.5rem", fontWeight : "500"}}>Your own private hub?</a></li>
        <li><a href="#" style={{color : "#5B44BA",textDecoration : "underline", fontSize:lg ? "1.125rem": "1.5rem", fontWeight : "500"}}>Contributing new experiments</a></li>
      </ol>
    </div>
  )
}

const LiveStatistics: React.FC = () => {
  
  const { sm,lg } = useTheme().screens;
  return(
    <div style={{maxWidth : lg ?"auto":"20.1875rem",margin:lg ? '2rem 0 3rem 1rem':'8rem 0 6rem 0'}}>
      <LiveImage />
      <h1 style={{fontSize : lg ?"1.75rem":"3.5rem", maxWidth : "20.1875rem" }} >Chaoshub Statistics</h1>
    </div>
  )
}

const ExperimentsRun : React.FC =()=>{
  const { lg } = useTheme().screens;
  return(
    <div style= {{margin : lg ? '2rem 0rem 3rem 1rem':'11rem 0 6rem 6rem'}}>
      <div style= {{display : "flex"}}>
        <Experiments /> <h1 style={{fontSize : lg ?"2rem":"4.5rem",color : "#109B67",  margin: lg ? '1.5rem auto': '0 0 0 0.2rem'}}>97000+</h1>
      </div>
      <hr style={{ width: "100%", margin: "1rem auto", height : "0.5rem", border : "none" ,background : "linear-gradient(135.47deg, #FFFFFF, rgba(133, 140, 221, 0) 64.41%), #109C68 1.77%", borderRadius : "6.25rem"}} />
      <p style={{fontSize : lg ?"1rem":"1.25rem", margin: lg ? '0 0 0 1rem': '0 0 0 2rem'}}>Number of Experiments run </p>
      
    </div>
  )
}

const InstallationsDone : React.FC =()=>{
  const { lg } = useTheme().screens;
  return(
    <div style= {{margin : lg ? '2rem 1rem 3rem 1rem':'11rem 0 6rem 4rem'}}>
      <div style= {{display : "flex"}}>
        <Installations /> <h1 style={{fontSize : lg ?"2rem":"4.5rem",color : "#109B67",  margin: lg ? '1.5rem auto ': '0 0 0 0.2rem'}}>4000+</h1>
      </div>
      <hr style={{ width:"100%", margin: "1rem auto", height : "0.5rem", border : "none" ,background : "linear-gradient(135.47deg, #FFFFFF, rgba(133, 140, 221, 0) 64.41%), #109C68 1.77%", borderRadius : "6.25rem"}} />
      <p style={{fontSize : lg ?"1rem":"1.25rem", margin: lg ? '0 0 0 1rem': '0 0 0 2rem'}}>Number of Installations </p>
      
    </div>
  )
}

const Ready : React.FC =()=>{
  const { sm,lg } = useTheme().screens;
  const flexibleButton = (
    <Button screen={lg ? "small" : "large"} style={{margin : lg? "2rem 1rem 6rem 1rem" : "3rem auto 7.5rem auto"}} className="GetStartedButton" gradientColor="purple">
        Go to Chaoshub
    </Button>
    )
  return(
    <ResponsiveRow>
    <div style={{textAlign:sm?"left": "center", maxWidth:lg? "auto" : "51.1875rem"}}>
      <h5 style={{margin: sm ? '2rem 1rem 0 1rem': '7.5rem 0 2rem 0' ,fontSize : lg ?"1.75rem":"3rem"}}>Ready to start using ChaosHub?</h5>
      <p style={{textAlign: sm? "left":"center",margin: lg ? '2rem 1rem 0 1rem': 'auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu felis nec arcu eleifend scelerisque. 
        Curabitur facilisis, nibh sit amet tincidunt porttitor, orci lorem accumsan ex, quis scelerisque quam 
        ligula fringilla risus. 
      </p>
      {flexibleButton}
    </div>
    </ResponsiveRow>
  )
}
const Chaoshub  = () => {
    //const { lg } = useTheme().screens;
    
    return (
        <Layout>
          <SEO />


          <section style={{backgroundColor : "#FFFFFF"}}>
            <ResponsiveRow >
              <ChaoshubImage />
              <ChaoshubIntroduction />
                    
            </ResponsiveRow>
          </section>


          <section style={{backgroundColor : "#F4F5F7"}}>
            <ResponsiveRow>
              <AboutRessilence />
              <UsefulLinks />
            </ResponsiveRow>
          </section>


          <section style={{backgroundColor : "#FFFFFF"}}>
              <ResponsiveRow>
                  <LiveStatistics />
                  <ExperimentsRun />
                  <InstallationsDone />
              </ResponsiveRow>
          </section>
          <section style={{background: "#F9FAFC"}}>
           
              <Ready />
         </section>
        </Layout>
    )
}

export default Chaoshub
