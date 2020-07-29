import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import { LinkGroup } from "./linkgroup";

const Logo: React.FC = () => (
  <img src="/svg/litmus-logo.svg" width="128" alt="litmus logo" />
);

const Row = styled.div`
  display: flex;
  justify-content: center;
  > * {
    margin: 0 1rem;
  }
`;

const BoundedContainer = styled.div`
  width: 20%;
`;

const Copyright: React.FC = () => (
  <>
    <p>Copyright © 2020 LitmusChaos Authors. All rights reserved.</p>
    <p>
      The Linux Foundation has registered trademarks and uses trademarks. For a
      list of trademarks of The Linux Foundation, please see our Trademark Usage
      page.
    </p>
  </>
);

const Footer: React.FC = () => {
  const { md } = useTheme().screens;

  return (
    <>
      {md ? (
        <>
          <Logo />
          <LinkGroup />
          <Copyright />
        </>
      ) : (
        <Row>
          <BoundedContainer>
            <Logo />
            <Copyright />
          </BoundedContainer>
          <div>
            <LinkGroup />
          </div>
        </Row>
      )}
      <div>
        <hr style={{ width: "80%", margin: "1rem auto" }} />
        <p style={{ textAlign: "center" }}>Originally created by Mayadata</p>
      </div>
    </>
  );
};

export { Footer };
