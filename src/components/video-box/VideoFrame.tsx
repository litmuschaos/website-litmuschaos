import React from "react";
import styled from "styled-components";

interface IVideoBox {
  width: string;
}

interface IVideoFrame extends IVideoBox {
  src: string;
}

const VideoBox = styled.iframe<IVideoBox>`
  width: ${props => props.width};
  height: calc(${props => props.width} / (16 / 9));
  max-width: 100%;
  max-height: calc((100vw - 2rem) / (16 / 9));
`;

const VideoDiv = styled.div`
  padding: ${props => (props.theme.screens.sm ? "0" : "1rem")};
`;

const VideoFrame: React.FC<IVideoFrame> = ({ width, src }) => {
  return (
    <VideoDiv>
      <VideoBox
        title="youtube video"
        width={width}
        src={src}
        frameBorder="0"
        allow="accelerometer"
        picture-in-picture
        allowFullScreen
      />
    </VideoDiv>
  );
};

export { VideoFrame };
