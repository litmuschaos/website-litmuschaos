import React from "react";
import { useTheme } from "../../styles";
import { BoundedContainer, ResponsiveRow, Row } from "../layout";
import { Paragraph } from "../texts";
import { community, resources, sitemap, top_adopters } from "./data";
import { Links } from "./linkgroup";

const Logo: React.FC = () => (
  <img
    src="/svg/litmus-logo.svg"
    width="128"
    alt="litmus logo"
    style={{ marginBottom: "1rem" }}
  />
);

const Copyright: React.FC = () => (
  <>
    <Paragraph>
      Copyright © 2020 LitmusChaos Authors. All rights reserved.
    </Paragraph>
    <Paragraph>
      The Linux Foundation has registered trademarks and uses trademarks. For a
      list of trademarks of The Linux Foundation, please see our Trademark Usage
      page.
    </Paragraph>
  </>
);

const Footer: React.FC = () => {
  const { md } = useTheme().screens;

  return (
    <>
      {md ? (
        <>
          <Logo />
          <ResponsiveRow>
            <Row>
              <Links data={sitemap} showImage={false} internalLink={true} />
              <Links data={resources} showImage={true} internalLink={false} />
            </Row>
            <Row>
              <Links
                data={top_adopters}
                showImage={false}
                internalLink={false}
              />
              <Links data={community} showImage={true} internalLink={false} />
            </Row>
          </ResponsiveRow>
          <Copyright />
        </>
      ) : (
        <Row>
          <BoundedContainer width="30%" margin="-1.2rem 1rem 0 0">
            <Logo />
            <Copyright />
          </BoundedContainer>
          <Links data={sitemap} showImage={false} internalLink={true} />
          <Links data={resources} showImage={true} internalLink={false} />
          <Links data={top_adopters} showImage={false} internalLink={false} />
          <Links data={community} showImage={true} internalLink={false} />
        </Row>
      )}
      <div>
        <hr style={{ width: "80%", margin: "1rem auto" }} />
        <Paragraph style={{ textAlign: "center" }}>
          Originally created by Mayadata
        </Paragraph>
      </div>
    </>
  );
};

export { Footer };
