import React from "react";


import { useTheme } from '../styles'
import { Button } from "../components/button";
import { Layout, ResponsiveRow } from '../components/layout'
import { SEO } from '../components/seo'


const CommunityImage: React.FC = () => {
    const { sm, md,lg } = useTheme().screens
  if(sm )
  {
    return(
    <img  style={{display : "none"}} src="/svg/CommunityHeroImage.svg" alt="Mayadata Logo" />
   )
  }
  else if(md)
  {
    return(
      <img  style={{width : "20rem", height : "22.5rem", marginTop :"5rem" }}src="/svg/CommunityHeroImage.svg" alt="Mayadata Logo" />
      )
  }
  else if(lg)
  {
    return(
      <img  style={{width : "30rem", height : "22.5rem", marginTop :"5rem" }}src="/svg/CommunityHeroImage.svg" alt="Mayadata Logo" />
      )
  }
  else{
      return(
    <img  style={{width : "40rem", height : "30rem", marginTop :"5rem" }}src="/svg/CommunityHeroImage.svg" alt="Mayadata Logo" />
    )
  }

}

const Dev: React.FC = () => {
 
  return(
    <img style={{margin:'0 1rem 0 0'}}src="/svg/Dev.svg" alt="Mayadata Logo" />
  )
}

const Github: React.FC = () => {
  
  return(
    <img style={{margin:'0 1rem 0 0'}}src="/svg/Github.svg" alt="Mayadata Logo" />
  )
}

const Video: React.FC = () => {
  const { lg } = useTheme().screens
  if(lg )
  {
    return(
      <iframe style={{margin: "2rem auto 2rem auto"}} width="300" height="168.75" src="https://www.youtube.com/embed/W5hmNbaYPfM"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    )
  }
  else
  {
    return(
     <iframe style={{margin: "2rem auto 2rem auto"}} width="560" height="315" src="https://www.youtube.com/embed/W5hmNbaYPfM"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    )
  }
}
const Slack: React.FC = () => {
  const { lg } = useTheme().screens
  if(lg )
  {
    return(
    <img  style={{width : "8.125rem", height : "2rem", margin: "2rem auto 1rem auto"}} src="/svg/SlackFullLogo.svg" alt="Mayadata Logo" />
  )
  }
  else{
      return(
    <img  style={{width : "11.6875rem", height : "3rem", margin: "3.5rem 10.375rem 1rem 10.375rem" }}src="/svg/SlackFullLogo.svg" alt="Mayadata Logo" />
    )
  }

}



const CommunityIntroduction: React.FC = () => {
    const { lg } = useTheme().screens;
    const flexibleButton = (
    <Button screen={lg ? "small" : "large"} className="GetStartedButton" gradientColor="purple">
        Get Started
    </Button>
    )
    
    
        return(
            <div style={{ margin:lg?"3rem 1rem 2rem 1rem": '5rem 3rem 3rem 0'}}>
              <h1 style={{fontSize : lg ?"1.75rem":"3.5rem",maxWidth : lg ? "100%" : "36.5rem"}}>
              By the community,for the community!
              </h1>
              <p style={{maxWidth : lg ? "100%" : "35rem", margin: '2rem 0 2rem 0', color : "#6F6F6F"}}>
              Created by our users, contributors, and adopters, the Litmus community truly believes in adding to the value of open source 
              culture where serving the community is of utmost priority to us, and imparting the value of cloud-native chaos is all that matters. 
              <br />
              <br />
              We welcome Kubernetes SREs and Developers to join this zealous community to learn and share all about cloud-native Chaos 
              Engineering and help Kubernetes infrastructures be resilient. Let’s make this journey wonderful together.
              </p>
              {flexibleButton}
            </div>
        
        )
    
        

}

const JoiningCommunity: React.FC = () => {
  const { lg } = useTheme().screens;
    return(
      <div style={{width :lg ? "auto": "42.6875rem", margin:lg?"3rem 1rem 2rem 1rem": '5rem 0 5rem 0'}}>
        <h1 style={{fontSize : lg ?"1.75rem":"3.5rem"}}>Join our Community meetings</h1>
        <p style={{fontSize : lg ?"1.125rem":"1.5rem",color : "#5C45BB", margin :'1rem auto', fontWeight : "500"}}>We meet on every 3rd saturday of the month! </p>
        <ResponsiveRow>
          <div style={{marginRight:lg?"2rem":"5rem"}}>
            <h6 style={{fontSize : lg ?"1.1255rem":"1.5rem"}}>Topics we discuss</h6>
            <p style={{color : "#545454",fontSize : lg ?"1rem":"1.25rem"}}><span style={{color : "#109B67", fontWeight : "700", fontSize : lg ?"1.1255rem":"1.75rem", margin : "auto 1rem 0 0"}}>#</span>
              Litmus Arch in Intuit
            </p>
            <p style={{color : "#545454",fontSize : lg ?"1rem":"1.25rem"}}><span style={{color : "#109B67", fontWeight : "700", fontSize : lg ?"1.1255rem":"1.75rem", margin : "auto 1rem 0 0"}}>#</span>
              Contributor Experiences & Insights
            </p>
            <p style={{color : "#545454",fontSize : lg ?"1rem":"1.25rem"}}><span style={{color : "#109B67", fontWeight : "700", fontSize : lg ?"1.1255rem":"1.75rem", margin : "auto 1rem 0 0"}}>#</span>
              SIG-Documentation Charter 
            </p>
            <p style={{color : "#545454",fontSize : lg ?"1rem":"1.25rem"}}>
            and many more!
            </p>
          </div>
          <div style={{marginRight:lg ? "1rem":"5rem"}}>
            <h6 style={{fontSize : lg ?"1.1255rem":"1.5rem"}}>Important Links</h6>
            <p style={{fontSize : lg ?"1rem":"1.25rem"}}><span style={{color : "#109B67", fontWeight : "700", fontSize : lg ?"1.1255rem":"1.75rem", margin : "auto 1rem 0 0"}}>&bull;</span><a href="#" style={{textDecoration : "underline",color : "#5C45BB"}}>Meeting</a></p>
            <p style={{fontSize : lg ?"1rem":"1.25rem"}}><span style={{color : "#109B67", fontWeight : "700", fontSize : lg ?"1.1255rem":"1.75rem", margin : "auto 1rem 0 0"}}>&bull;</span><a href="#" style={{textDecoration : "underline",color : "#5C45BB"}}>Meta Repository</a></p>
            <p style={{fontSize : lg ?"1rem":"1.25rem"}}><span style={{color : "#109B67", fontWeight : "700", fontSize : lg ?"1.1255rem":"1.75rem", margin : "auto 1rem 0 0"}}>&bull;</span><a href="#" style={{textDecoration : "underline",color : "#5C45BB"}}>Release Tracker</a></p>
          </div>
        </ResponsiveRow>
        
        
      </div>
    )
  }

  const JoiningSlack: React.FC = () => {
  const { sm, lg } = useTheme().screens;

  const flexibleButton = (
    <Button
      screen={lg ? "small" : "large"}
      style={{ marginBottom: "3rem" }}
      className="GetStartedButton"
      gradientColor="purple"
    >
      Join the Channel
    </Button>
  );
  return (
    <div
      style={{
        textAlign: "center",
        width: lg ? "17rem" : "32.6875rem",
        height: lg ? "19.5rem" : "27.5625rem",
        backgroundColor: "#FFFFFF",
        borderRadius: "0.5rem",
        boxShadow: "box-shadow: 0 0.875rem 3.375rem #000000 10%;",
        margin: sm ? "1rem auto 5rem auto" : "7.125rem 0.5rem 7.125rem 1rem"
      }}
    >
      <Slack />
      <p
        style={{
          fontSize: lg ? "1.5rem" : "2.25rem",
          fontWeight: "500",
          margin: "2.125rem 0 0 0"
        }}
      >
        Join #Litmus
        <br /> on Kubernetes Slack
      </p>

      {flexibleButton}
    </div>
  );
};

  const Ready:React.FC = () => {
    const { lg } = useTheme().screens;
    
    const flexibleButton = (
    <Button screen={lg ? "small" : "large"} className="GetStartedButton" gradientColor="purple">
          Visit our Youtube
    </Button>
    )
    return(
      <ResponsiveRow>
      <div style={{textAlign: "center", maxWidth:lg? "auto" : "51.1875rem", margin: "auto"}}>
        <h5 style={{margin: lg ? '2rem 1rem 0 1rem': '7.5rem 0 2rem 0' ,fontSize : lg ?"1.75rem":"3rem"}}>See what’s happening in the Litmus community</h5>
        <p style={{textAlign:"center",margin: lg ? '2rem 1rem 0 1rem': 'auto'}}>
          Creating chaos on YouTube. Subscribe to our channel for early updates on meeting recordings, tutorials, events and more
        </p>
        
        <Video />
        {flexibleButton}
      </div>
      </ResponsiveRow>
    )
  }


  const Contributing : React.FC =() =>{
    const { lg } = useTheme().screens;

    return(
      <div style={{maxWidth: lg?'auto':'42.5rem', margin: '5rem 1rem 5rem 1rem'}}>
        <h6 style={{fontSize : lg ?"1.75rem":"3.5rem", margin :'auto auto 2rem auto'}}>Contributing</h6>
        <p style={{color : "#6F6F6F"}}>We invite contributions in all forms. Join us in writing blogs on DEV.to about experiments, features, and your experience. 
          Use the <span style={{color : "#5B44BA", fontWeight : "700"}}>#litmuschaos</span> tag for your blog to get featured.</p>
        <a href="#" style={{display:"flex", margin:'2rem auto 3rem auto',color : "#5B44BA" , fontWeight : "600", textDecoration : "underline"}}><Dev />Go to dev.to </a>
        
        <h6 style={{fontSize : lg ?"1.1255rem":"1.5rem", margin :'auto auto 2rem auto', color : "#0F2625"}}>Contribute your chaos experiments</h6>
        <p style={{color : "#6F6F6F", maxWidth: lg?'auto':'40.0625rem'}}>We are devoted to being an open source driven community and appeal to our community members to contribute chaos experiments, 
          file issues, raise pull requests, and provide feedback to help enhance the user experience and bring in new enhancements to develop 
          LitmusChaos. 
          <br />
          <br />
          
          Begin now on CONTRIBUTING.md or check the CONTRIBUTING.md file in the respective Litmus repository for instructions on how to 
          contribute. Feel free to discuss about your contributions on our slack channel. 
          </p>
          <a href="#" style={{display:"flex", margin:'2rem auto 3rem auto',color : "#5B44BA" , fontWeight : "600", textDecoration : "underline"}}>
            <Github />Find info about contibuting on our GitHub </a>
        
      </div>
    )

  }

  const CommunityResources : React.FC =() =>{
    const { sm,lg } = useTheme().screens;

    return(
      <div style={{maxWidth: lg?'auto':'37.625rem', margin:sm ? "1rem":'0rem 1rem 5rem 1rem'}}>
        <h6 style={{fontSize : lg ?"1.75rem":"3.5rem", margin :'auto auto 2rem auto'}}>Community resources</h6>
        
        <p style={{color : "#6F6F6F",  maxWidth: lg?'auto':'35.1875rem'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium, justo quis hendrerit rhoncus, dui elit lacinia mauris, 
        sed sodales lectus nisi vitae leo. Fusce malesuada diam libero, in aliquam nisl cursus tempus. Etiam tempus lobortis dui porta 
        consectetur. Praesent quis mauris tincidunt, elementum lorem mollis, commodo odio. In in ligula vulputate, fringilla dolor eget, 
        ornare mi. Praesent bibendum mollis magna, non gravida arcu efficitur ac.
        </p>
          <a href="#" style={{display:"flex", margin:'2rem auto 3rem auto',color : "#5B44BA" , fontWeight : "600", textDecoration : "underline"}}>
            <Github />Go to our Github feed </a>
        
      </div>
    )

  }
const Community = () => {
    return(
        <Layout>
            <SEO />
            <section style={{backgroundColor : "#FFFFFF"}}>
                <ResponsiveRow>
                    <CommunityImage />
                    <CommunityIntroduction />
                </ResponsiveRow>
            </section>

            <section>
                <ResponsiveRow>
                    <JoiningCommunity />
                    <JoiningSlack />
                </ResponsiveRow>
            </section>

            <section style={{backgroundColor : "#FFFFFF"}}>
                <Ready />
            </section>

            <section style={{backgroundColor : "#F9FAFC"}}>
                <ResponsiveRow>
                  <Contributing />
                  <CommunityResources />
                </ResponsiveRow>
            </section>


        </Layout>
    )

}

export default Community
