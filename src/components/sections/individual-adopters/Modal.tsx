import React from "react";
import styled, { css } from "styled-components";
import { adoptersData } from "./data";

interface Icontent {
  url?: string;
  handleClick?: any;
}

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

const IframeContainer = styled.div`
position: absolute;
top: 100px;
left: 0;
  width: 90vw;
  max-width: 1024px;
  height: 56.25vw;
  max-height: 576px;
  margin: 0 0 0 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  z-index: 1000;

  &:after {
    content="";
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.white};
    height: 20px;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  ${props =>
    props.theme.screens.lg
      ? css`
          bottom: -3rem;
          left: 0;
          margin-left: 50%;
          transform: translateX(-50%);
        `
      : css`
          top: -0.25rem;
          right: -3rem;
        `}

  cursor: pointer;
`;

const Modal: React.FC<Icontent> = ({ url, handleClick }) => {
  const video = adoptersData.filter(fil => fil.key === url)[0];
  return (
    <Backdrop>
      <IframeContainer>
        <CloseButton onClick={handleClick}>
          <img src="/assets/close-button.svg" alt="close" />
        </CloseButton>
        <iframe
          width="100%"
          height="100%"
          src={video.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "10px" }}
        ></iframe>
      </IframeContainer>
    </Backdrop>
  );
};

export { Modal };
