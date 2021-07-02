import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled, { useTheme } from "styled-components";
import { getAdopterHeroImg } from "../../image-fetch/AdopterHeroImg";
import {
  Center,
  FreeBoundedContainer,
  ResponsiveRow,
  Row,
  SectionLight,
} from "../../layout";
import { Heading, SubText } from "../../texts";
import { adoptersContent, adoptersData } from "./data";

const HeadingBig = styled(Heading)`
  color: ${(props) => props.color};
`;
const SubTextBig = styled(SubText)`
  color: ${(props) => props.color};
`;

interface Icontent {
  url?: string;
}

const Hero: React.FC<Icontent> = ({ url }) => {
  const { darkGray, textPrimary } = useTheme().colors;
  const images = getAdopterHeroImg();
  const image = adoptersContent.filter((item: any) => item.key === url)[0];
  const adopter = adoptersData.filter((item: any) => item.key === url)[0];
  const { heading, subheading, company } = adopter;

  const Logo = () => <GatsbyImage image={images[image.key]} alt={image.key} />;

  return (
    <SectionLight>
      <Row strict style={{ justifyContent: "left" }}>
        <Link to="/adopters">
          <SubTextBig color={darkGray}>End User Adopters &nbsp;</SubTextBig>
        </Link>
        <SubTextBig color={darkGray}>&#62; &nbsp;</SubTextBig>
        <p>
          <SubTextBig color={textPrimary} fontWeight="700">
            {company}
          </SubTextBig>
        </p>
      </Row>
      <Center>
        <ResponsiveRow reverseColumn breakpoint="md">
          <FreeBoundedContainer breakpoint="md" width="60%" margin="0">
            <br />
            <HeadingBig color={textPrimary}>{heading}</HeadingBig>
            <br />
            <SubTextBig color={darkGray}>{subheading}</SubTextBig>
          </FreeBoundedContainer>
          <FreeBoundedContainer breakpoint="md" width="30%" margin="2rem 0 0 0">
            <Logo />
          </FreeBoundedContainer>
        </ResponsiveRow>
      </Center>
    </SectionLight>
  );
};

export { Hero };
