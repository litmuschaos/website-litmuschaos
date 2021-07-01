import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled from "styled-components";
import { getAdopterVideoImg } from "../../image-fetch/AdopterVideoImg";
import { Center, SectionLight } from "../../layout";
import { adoptersContent, adoptersData } from "./data";
import { Modal } from "./Modal";

interface Icontent {
  url?: string;
  handleclick?: any;
}

const VideoBox = styled.div<Icontent>`
  position: relative;
  width: 100%;
  height: 75vw;
  max-width: 1024px;
  max-height: 640px;
  background-color: ${props =>
    props.url?.includes("redhat")
      ? props.theme.colors.black
      : props.url?.includes("orange")
      ? props.theme.colors.black
      : props.url?.includes("lenskart")
      ? props.theme.colors.darkBlue
      : props.url?.includes("anutanetworks")
      ? props.theme.colors.lightBlue
      : props.url?.includes("intuit")
      ? props.theme.colors.black
      : ""};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), -3px -3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  opacity: 80%;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const PlayButton = styled.div`
  // position: absolute;
  // top: 0;
  // left: 0;
  // margin: 25% 0 0 50%;
  // transform: translate(-50%, -100%);
  opacity: 50%;
  cursor: pointer;
  z-index: 20;
  width: ${props => (props.theme.screens.xs ? "50px" : "")};
  & > img {
    width: 100%;
  }

  &:hover {
    opacity: 100%;
  }
`;

const Video: React.FC<Icontent> = ({ url }) => {
  const [open, setOpen] = useState(false);
  const images = getAdopterVideoImg();
  const image = adoptersContent.filter((item: any) => item.key === url)[0];
  const adopter = adoptersData.filter((item: any) => item.key === url)[0];

  const handleClick = () => {
    if (typeof window !== "undefined") {
      if (open) {
        document.body.style.overflow = "scroll";
        setOpen(false);
      } else {
        document.body.style.overflow = "hidden";
        setOpen(true);
      }
    }
  };

  const Logo = () => (
    <Center>
      <GatsbyImage image={images[image.key]} alt={image.key} />
    </Center>
  );

  return adopter.videoUrl ? (
    <div>
      {open ? (
        <Modal url={url} handleClick={handleClick} />
      ) : (
        <SectionLight>
          <Center>
            <VideoBox url={url}>
              <Overlay>
                <PlayButton onClick={handleClick}>
                  <img src="/assets/play-button.svg" alt="play button" />
                </PlayButton>
              </Overlay>
              <Logo />
            </VideoBox>
          </Center>
        </SectionLight>
      )}
    </div>
  ) : (
    <></>
  );
};

export { Video };
