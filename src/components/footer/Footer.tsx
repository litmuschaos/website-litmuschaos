import React from "react";
import { useTheme } from "../../styles";
import {
  BoundedContainer,
  Column,
  FreeBoundedContainer,
  Row,
  SectionLight,
} from "../layout";
import { Paragraph, PurpleText } from "../texts";
import { community, resources, sitemap } from "./data";
import { Links } from "./FooterLinks";

const Logo: React.FC = () => (
  <img
    src="/svg/litmus-logo-purple.svg"
    width="128"
    alt="litmus logo"
    style={{ marginBottom: "1rem" }}
  />
);

const Copyright: React.FC = () => (
  <>
    <Paragraph>
      Copyright © {new Date().getFullYear()} LitmusChaos Authors. All rights
      reserved.
    </Paragraph>
    <Paragraph>
      Copyright © {new Date().getFullYear()} The Linux Foundation has registered
      trademarks and uses trademarks. For a list of trademarks of The Linux
      Foundation, please see{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linuxfoundation.org/trademark-usage/"
      >
        <PurpleText
          fontSize="paragraph"
          fontWeight={400}
          style={{ display: "inline" }}
        >
          our Trademark Usage
        </PurpleText>
      </a>{" "}
      page.
    </Paragraph>
  </>
);

const Footer: React.FC = () => {
  const { md, lg } = useTheme().screens;

  return (
    <SectionLight style={{ padding: lg ? "3rem 2rem" : "5rem 10rem" }}>
      <div>
        {md ? (
          <>
            <Logo />
            <Column>
              <Row>
                <Links data={sitemap} showImage={false} internalLink={true} />
                <Links data={resources} showImage={true} internalLink={false} />
              </Row>
              <Row>
                <Links data={community} showImage={true} internalLink={false} />
              </Row>
            </Column>
            <Copyright />
            <br />
          </>
        ) : (
          <Row space>
            <BoundedContainer breakpoint="sm" width="30%" margin="0 1rem 0 0">
              <Logo />
              <Copyright />
            </BoundedContainer>
            <FreeBoundedContainer breakpoint="sm" width="50%" margin="">
              <Row>
                <Links data={sitemap} showImage={false} internalLink={true} />
                <Links data={resources} showImage={true} internalLink={false} />
                <Links data={community} showImage={true} internalLink={false} />
              </Row>
            </FreeBoundedContainer>
          </Row>
        )}
        <div>
          <hr style={{ margin: "1rem auto" }} />
          <Paragraph style={{ textAlign: "center" }}>
            Originally created by{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://chaosnative.com/"
            >
              <Paragraph
                color="textPrimary"
                style={{ display: "inline", fontWeight: 600 }}
              >
                ChaosNative
              </Paragraph>
            </a>{" "}
          </Paragraph>
        </div>
      </div>
    </SectionLight>
  );
};

export { Footer };
