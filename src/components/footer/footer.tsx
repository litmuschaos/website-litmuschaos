import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import { BoundedContainer } from "../layout";
import { LinkGroup } from "./linkgroup";

const Logo: React.FC = () => (
  <img src="/svg/Logo.svg" width="128" alt="litmus logo" />
);

const Row = styled.div`
  display: flex;
  justify-content: center;
  > * {
    margin: 0 1rem 2rem 0;
    
  }
`;

const Copyright: React.FC = () => {
  
     return(
        <>
          <p style={{ marginRight: "4rem", marginBottom : "5rem", fontSize: "0.875rem", color: "#455A64", padding : "0.9375 rem"}}><br></br>Copyright © 2020 LitmusChaos Authors. All rights reserved.
          <br></br>
          <br></br>
            The Linux Foundation has registered trademarks and uses trademarks. For a
            list of trademarks of The Linux Foundation, please see our Trademark Usage
            page.
          </p>
        </>
      );
  
};

const Footer: React.FC = () => {
  const { lg } = useTheme().screens;

  return (
    <>
      {lg ? (
        <>
         <div style={{padding : "1.3125rem" }}>
         
          <Logo />
          
          <Copyright />
          
          <LinkGroup />
        
         </div>
        </>
      ) : (
        <Row>
          <BoundedContainer width="29%">
            <Logo />
            <Copyright />
          </BoundedContainer>
          <div>
            <LinkGroup />
          </div>
        </Row>
      )}
      <div>
        <hr style={{ width: "100%", margin: "1rem auto" }} />
        <p style={{ textAlign: "center", marginBottom: "1rem"}}>Originally created by <span style={{color: "#001959", fontWeight :"700"}}>Mayadata</span></p>
      </div>
    </>
  );
};

export { Footer };
