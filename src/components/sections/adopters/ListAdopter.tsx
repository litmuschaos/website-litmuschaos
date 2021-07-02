import { Link } from "@reach/router";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled, { useTheme } from "styled-components";
import { getAdopterCardImg } from "../../image-fetch/AdopterCardImg";
import { Center, ResponsiveRow, SectionDark } from "../../layout";
import { AdopterList } from "./Adopters.data";
interface IProps {
  bgColor?: string;
  flexDir?: boolean;
  head?: string;
  para?: string;
  link?: string;
  reverse?: boolean;
  url?: string;
}

const MainAdopterCont = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
`;
interface FlexDir {
  reverseRow?: boolean;
  reverse?: boolean;
}

interface AdopterTheme {
  bgColor?: string;
}
const CompanyLogoCard = styled.div<AdopterTheme>`
  width: ${props => (props.theme.screens.lg ? "100%" : "500px")};
  border-radius: 10px;
  display: flex;
  background: ${props => props.bgColor};
  align-items: center;
  justify-content: center;
  height: 300px;
  margin-bottom: ${props => (props.theme.screens.lg ? "2rem" : "0")};
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.3);
`;

const CompanyInfoCard = styled.div<FlexDir>`
  display: flex;
  height: ${props => (props.theme.screens.lg ? "auto" : "300px")};
  flex-direction: column;
  justify-content: ${props =>
    props.theme.screens.lg ? "flex-start" : "center"};
  margin-top: ${props => (props.theme.screens.lg ? "1rem" : "0")};
  ${props => (props.theme.screens.lg ? "" : "width: 60%;")}
  ${props =>
    props.theme.screens.lg
      ? ""
      : props.reverse
      ? "padding-right: 3rem"
      : "padding-left: 3rem;"}
`;

const CompanyInfoCardHead = styled.h2`
  font-size: ${props => (props.theme.screens.lg ? "18px" : "32px")};
  line-height: ${props => (props.theme.screens.lg ? "30px" : "40px")};
`;

const CompanyInfoCardText = styled.p`
  font-size: ${props => (props.theme.screens.lg ? "14px" : "16px")};
  line-height: ${props => (props.theme.screens.lg ? "24px" : "26px")};
  margin: 0.5rem 0;
  color: #6f6f6f;
`;

const ListCard: React.FC<IProps> = props => {
  const { textSecondary } = useTheme().colors;
  const images = getAdopterCardImg();
  return (
    <>
      <Center>
        <ResponsiveRow
          breakpoint="md"
          reverseRow={props.reverse}
          marginBottom="4rem"
        >
          <CompanyLogoCard bgColor={props.bgColor}>
            {props.link ? (
              <GatsbyImage image={images[props.link]} alt={props.link} />
            ) : (
              <></>
            )}
          </CompanyLogoCard>
          <CompanyInfoCard reverse={props.reverse}>
            <CompanyInfoCardHead>{props.head}</CompanyInfoCardHead>
            <CompanyInfoCardText>{props.para}</CompanyInfoCardText>
            <Link
              to={`/adopters/${props.link}`}
              style={{ color: `${textSecondary}` }}
            >
              Read the case study &#8594;
            </Link>
          </CompanyInfoCard>
        </ResponsiveRow>
      </Center>
    </>
  );
};
const ListAdopters: React.FC<IProps> = ({ url }) => (
  <>
    <SectionDark>
      <MainAdopterCont>
        {AdopterList.map(adopter => {
          return (
            <ListCard
              reverse={adopter.reverse}
              bgColor={adopter.bgColor}
              head={adopter.head}
              para={adopter.para}
              link={adopter.link}
              url={url}
            />
          );
        })}
      </MainAdopterCont>
    </SectionDark>
  </>
);

export default ListAdopters;
