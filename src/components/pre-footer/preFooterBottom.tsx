import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { Button } from "../button";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionDark,
} from "../layout";
import { Heading, Paragraph } from "../texts";
import { CNCFLogo } from "./CNCFLogo";

const CNCFText = styled.div`
  ${({ theme }) =>
    theme.screens.lg
      ? css`
          margin: 0 auto;
          width: 90%;
        `
      : css`
          width: 20rem;
          margin: 0 auto;
          margin-top: ${(props) =>
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
              <Link
                to="route"
                target="_blank"
                onClick={(event) => {
                  event.preventDefault();
                  window.open("https://docs.litmuschaos.io/docs/getstarted/");
                }}
              >
                <Button gradientColor="purple">Get started with Litmus</Button>
              </Link>
            </div>
          </Center>
        </BoundedContainer>

        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <CNCFLogo />
          <CNCFText>
            <Paragraph textAlign="center">
              We are a Cloud Native Computing Foundation sandbox project
            </Paragraph>
          </CNCFText>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { PreFooterBottom };
