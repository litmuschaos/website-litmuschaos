import React from "react";
import { useTheme } from "../../styles";
import { Button } from "../button";
import { BoundedContainer, Column, Row, SectionLight } from "../layout";
import { Paragraph, PurpleText, SubHeading } from "../texts";
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
          underline={true}
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
  const { md } = useTheme().screens;

  return (
    <SectionLight style={{ padding: md ? "3rem 2rem" : "5rem 10rem" }}>
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
            <div>
              <SubHeading style={{ margin: "0.5rem 0" }}>
                Add yourself to the adopters
              </SubHeading>
              <Paragraph>
                and share your chaos engineering story to the community
              </Paragraph>
              <br />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/litmuschaos/litmus/blob/master/ADOPTERS.md"
              >
                <Button gradientColor="green">Become an Adopter</Button>
              </a>
            </div>
          </>
        ) : (
          <Row>
            <BoundedContainer breakpoint="sm" width="30%" margin="0 1rem 0 0">
              <Logo />
              <Copyright />
            </BoundedContainer>
            <div>
              <Row>
                <Links data={sitemap} showImage={false} internalLink={true} />
                <Links data={resources} showImage={true} internalLink={false} />
                <Links data={community} showImage={true} internalLink={false} />
              </Row>
            </div>
            <div style={{ width: "25%" }}>
              <Column>
                <SubHeading style={{ fontSize: "1rem", margin: "0.5rem 0" }}>
                  Add yourself to the adopters
                </SubHeading>
                <Paragraph>
                  and share your chaos engineering story to the community
                </Paragraph>
                <br />
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/litmuschaos/litmus/blob/master/ADOPTERS.md"
                >
                  <Button gradientColor="green">Become an Adopter</Button>
                </a>
              </Column>
            </div>
          </Row>
        )}
        <div>
          <hr style={{ margin: "1rem auto" }} />
          <Paragraph style={{ textAlign: "center" }}>
            Founded by{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://chaosnative.com/"
            >
              <PurpleText
                fontSize="paragraph"
                fontWeight={400}
                underline={true}
                style={{ display: "inline" }}
              >
                ChaosNative
              </PurpleText>
            </a>
            &nbsp;❤️
          </Paragraph>
        </div>
      </div>
    </SectionLight>
  );
};

export { Footer };
