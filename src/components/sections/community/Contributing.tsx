import React from "react";
import { OutlinedButton } from "../../../components/button";
import {
  BoundedContainer,
  ResponsiveRow,
  SectionDark,
} from "../../../components/layout";
import { Heading, Paragraph, Subheading } from "../../../components/texts";
import { useTheme } from "../../../styles";
import { OctoCat } from "../../imageFetch/OctoCat";

interface IContributeButton {
  width: string;
  src: string;
}

const ContributeButton: React.FC<IContributeButton> = ({ width, src }) => {
  const { textSecondary } = useTheme().colors;

  return (
    <OutlinedButton width={width} backgroundColor={textSecondary}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: textSecondary,
        }}
      >
        <img
          style={{ margin: "0 0.5rem" }}
          src={src}
          width="20"
          alt="Dev Icon"
        />
        <p>Go to dev.to</p>
      </div>
    </OutlinedButton>
  );
};

const Contributing: React.FC = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="40%" margin="0">
          <OctoCat />
        </BoundedContainer>

        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <div style={{ margin: "0 2rem" }}>
            <Heading>Contributing</Heading>
            <br />
            <Paragraph>
              We invite contributions in all forms. Join us in writing blogs on
              DEV.to about experiments, features, and your experience. Use the
              #litmuschaos tag for your blog to get featured.
            </Paragraph>
            <br />

            <ContributeButton width="30%" src="/svg/dev-purple.svg" />
            <br />
            <br />
            <br />

            <Subheading>Contribute your chaos experiments</Subheading>
            <br />
            <Paragraph>
              We are devoted to being an open source driven community and appeal
              to our community members to contribute chaos experiments, file
              issues, raise pull requests, and provide feedback to help enhance
              the user experience and bring in new enhancements to develop
              LitmusChaos.
              <br />
              <br />
              Begin now on CONTRIBUTING.md or check the CONTRIBUTING.md file in
              the respective Litmus repository for instructions on how to
              contribute. Feel free to discuss about your contributions on our
              slack channel.
            </Paragraph>
            <br />

            <ContributeButton width="55%" src="/svg/github-purple.svg" />
          </div>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { Contributing };
