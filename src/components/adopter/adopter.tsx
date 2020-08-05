import React from "react";
import { useTheme } from "styled-components";
import "./adopter.css"

import { ResponsiveRow } from '../layout'
import { Button } from "../button";

const Mayadata: React.FC = () => {
  const { sm } = useTheme().screens
  if(sm )
  {
    return(
    <img className="MayadataLogo" width="278px" src="/svg/Mayadata.svg" alt="Mayadata Logo" />
   )
  }
  else
  {
    return(
      <img style={{width :"319px"}}className="MayadataLogo"  src="/svg/Mayadata.svg" alt="Mayadata Logo" />
    )
  }
  
};
const Wipro: React.FC = () => {
  const { sm } = useTheme().screens
  if(sm )
  {
    return(
      <img className="WiproLogo" width="50vw" src="/svg/Wipro.svg" alt="Mayadata Logo" />
    )
  }
  else
  {
    return(
      <img style={{width :"80px"}} className="WiproLogo"  src="/svg/Wipro.svg" alt="Mayadata Logo" />
    )
  }
};

const OpenEBS: React.FC = () => {
  const { sm } = useTheme().screens
  if(sm )
  {
    return(
      <img className="OpenEBSLogo" width="50vw"src="/svg/OpenEBS.svg" alt="Mayadata Logo" />
    )
  }
  else
  {
    return(
      <img style={{width : "80px"}} className="OpenEBSLogo" src="/svg/OpenEBS.svg" alt="Mayadata Logo" />
    )
  }
}
;
const Intuit: React.FC = () => {
  const { sm } = useTheme().screens
  if(sm )
  {
    return(
      <img  className="IntuitLogo" width="50vw" src="/svg/Intuit.svg" alt="Mayadata Logo" />
    )
  }
  else{
    return(
      <img  className="IntuitLogo"  src="/svg/Intuit.svg" alt="Mayadata Logo" />
    )
  }

};

const Zerebrium: React.FC = () => {
  const { sm } = useTheme().screens
  if(sm)
  {
    return(
      <img   className="ZerebriumLogo" width="50vw" src="/svg/Zerebrium.svg" alt="Mayadata Logo" />
    )
  }
  else
  {
    return(
      <img  className="ZerebriumLogo" src="/svg/Zerebrium.svg" alt="Mayadata Logo" />
    )
  }


};

const CreatedByColumn: React.FC = () => {
  const { sm } = useTheme().screens
  if (sm) {
    return <div style={{ margin: '0 1rem' }}>
      <h5 className="AdopterHeading">Created By</h5>
            <Mayadata />
    </div>
  } else {
    return (
      <div style={{ margin:'0 0 3rem 0' }}>
        <h5 className="AdopterHeading">Created By</h5>
            <Mayadata />
      </div>
    )
  }
}



const AdopterColumn: React.FC = () => {
  const { sm } = useTheme().screens
  if (sm) {
    return <div style={{ margin: '0 8rem 0 1rem' , width :"80vw" } }>
      <h5 className="AdopterHeading">Adopted By</h5>
            <div className="AdopterLogos">
               
              <Wipro /><OpenEBS /><Intuit /><Zerebrium />
            </div>  
    </div>
  } else {
    return (
      <div style={{ margin:'0 0 3rem 7rem' ,width : "27.5rem"}}>
        <h5 className="AdopterHeading">Adopted By</h5>
            <div className="AdopterLogos"> 
              <Wipro /><OpenEBS /><Intuit /><Zerebrium />
            </div>
      </div>
    )
  }
}


const JoinAsAdopter: React.FC = () => {
    
    const { sm } = useTheme().screens
    const flexibleButton = (
      <Button screen={sm ? "small" : "large"} style={{ marginTop :"-4rem"}} gradientColor="green">
        List Yourself As an Adopter
      </Button>
    );
    if (sm) {
      return <div style={{ margin: '0 1rem 6.25rem 1rem' }}>
          <h5 className="AdopterHeading">Add yourself to the adopters <br/>
          <span style={{color : "#6F6F6F", fontSize: "0.875rem", fontWeight : "normal"}}>and share your chaos engineering story to the community.</span></h5>
          {flexibleButton}
        </div>
    } else {
      return (
        <div style={{ margin:'0 0rem 3rem 7rem', maxWidth : "20.625rem"}}>
          <h5 className="AdopterHeading">Add yourself to the adopters <br/>
          <span style={{color : "#6F6F6F", fontSize: "1rem", fontWeight : "normal"}}>and share your chaos engineering story to the community.</span></h5>
          {flexibleButton}
        </div>
      )
    }
}


const Adopter: React.FC = () => {
    
  
    
    return (
    <>
      <ResponsiveRow>
          
           <CreatedByColumn />
          
         
            <AdopterColumn />
            
          
          
              <JoinAsAdopter />
             
        
      </ResponsiveRow>
    </>
    );  
};

export { Adopter };