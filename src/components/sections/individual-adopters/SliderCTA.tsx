import Link from "gatsby-link";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled, { css, useTheme } from "styled-components";
import { getAdopterCardImg } from "../../image-fetch/AdopterCardImg";
import { Center, SectionDark } from "../../layout";
import { SubText } from "../../texts";
import { adoptersData } from "./data";

interface IAdopters {
  key?: string;
  adopter?: string;
  children?: any;
  props?: any;
  heading?: string;
}

const CardContainer = styled.div<IAdopters>`
  position: relative;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors[`CTA${props.adopter}`]};
  border-radius: 12px;
  height: ${(props) => (props.theme.screens.xs ? "300px" : "200px")};
`;

const CtaCard: React.FC<IAdopters> = (props) => {
  const images = getAdopterCardImg();
  const { textPrimary, white } = useTheme().colors;

  return (
    <CardContainer {...props}>
      <img
        src={`/assets/pattern/${props.adopter}/pattern-${props.adopter}.svg`}
      />
      <div style={{ position: "absolute", top: "15px", right: "15px" }}>
        {props.adopter === "orange" ? (
          <StaticImage
            src={"../../../images/video-logo/orange/logo-light-orange.png"}
            alt="orange logo"
            layout="fixed"
            width={70}
            height={70}
          />
        ) : (
          <GatsbyImage
            image={images[`${props.adopter}`]}
            alt={`${props.adopter} logo`}
          ></GatsbyImage>
        )}
      </div>
      <div
        style={{
          width: "70%",
          position: "absolute",
          bottom: "15px",
          left: "15px",
        }}
      >
        <SubText color={props.adopter === "kitopi" ? textPrimary : white}>
          {props.heading}
        </SubText>
      </div>
    </CardContainer>
  );
};

const CircleButton = styled.div<IActions>`
  position: absolute;
  z-index: 10;
  width: 2rem;
  height: 2rem;
  top: 5.25rem;
  ${(props) =>
    props.type === "next"
      ? css`
          right: -1rem;
        `
      : css`
          left: -1rem;
        `}
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1), -3px -3px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

interface IActions {
  onClick?: any;
  type?: any;
}

const Action: React.FC<IActions> = (props) => {
  const { md } = useTheme().screens;

  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  return md ? (
    <></>
  ) : (
    <CircleButton
      type={props.type}
      className={className}
      onClick={props.onClick}
    >
      <Center>
        <span>
          {props.type === "next" ? (
            <img src="/assets/right-arrow.svg" alt="right arrow" />
          ) : (
            <img src="/assets/left-arrow.svg" alt="left arrow" />
          )}
        </span>
      </Center>
    </CircleButton>
  );
};

const SliderCTA = () => {
  const { md } = useTheme().screens;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };
  return (
    <SectionDark>
      <div style={{ position: "relative", maxWidth: "1250px" }}>
        <Slider
          prevArrow={<Action type="prev" />}
          nextArrow={<Action type="next" />}
          slidesToShow={md ? 1 : 2}
          dots={md ? true : false}
          {...settings}
        >
          {adoptersData.map((adopter) => {
            return (
              <Link to={`/adopters/${adopter.key}`}>
                <CtaCard
                  key={adopter.key}
                  adopter={adopter.key}
                  heading={adopter.heading}
                />
              </Link>
            );
          })}
        </Slider>
      </div>
    </SectionDark>
  );
};

export { SliderCTA };
