import React from "react";
import styled, { css } from "styled-components";
import { Button } from "../button";
import { CNCFLogo } from "../image-fetch/CNCFLogo";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../layout";
import { Heading, Paragraph, PurpleText } from "../texts";

const CNCFText = styled.div`
  position: relative;
  z-index: 2;
  ${({ theme }) =>
    theme.screens.lg
      ? css`
          margin: 0 auto;
          width: 90%;
        `
      : css`
          width: 20rem;
          margin: 0 auto;
          margin-top: ${props =>
            props.theme.screens.xxxl ? "-7rem" : "-8rem"};
        `}
`;

const PreFooterBottom: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="0 3rem 0 0">
          <Center>
            <div>
              <Heading>Create, Manage and Monitor Chaos on Kubernetes</Heading>
              <Paragraph style={{ margin: "1rem 0" }}>
                Litmus is highly extensible and integrates with other tools to
                enable the creation of custom experiments. Kubernetes developers
                & SREs use Litmus to manage chaos in a declarative manner and
                find weaknesses in their applications and infrastructure
              </Paragraph>
              <br />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://docs.litmuschaos.io/docs/getstarted/"
              >
                <Button gradientColor="purple">Get started with Litmus</Button>
              </a>
            </div>
          </Center>
        </BoundedContainer>

        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <CNCFLogo />
          <CNCFText>
            <Paragraph textAlign="center">
              We are a{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.cncf.io/"
              >
                <PurpleText
                  fontSize="paragraph"
                  fontWeight={400}
                  underline={true}
                  style={{ display: "inline" }}
                >
                  Cloud Native Computing Foundation
                </PurpleText>{" "}
              </a>
              sandbox project
            </Paragraph>
          </CNCFText>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { PreFooterBottom };
