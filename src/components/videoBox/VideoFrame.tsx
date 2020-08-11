import React from "react";
import { Button } from "../../components/button";
import { useTheme } from "../../styles";
import styled from "styled-components";

const VideoBox = styled.iframe`
  width: 100%;
  height: 100%;
`;

const VideoDiv = styled.div`
  width: ${(props) => (props.theme.screens.sm ? "90%" : "40%")};
  height: ${(props) => (props.theme.screens.sm ? "14rem" : "25rem")};
  margin: 0 auto;
`;

const VideoFrame: React.FC = () => {
  return (
    <VideoDiv>
      <VideoBox
        src="https://www.youtube.com/embed/yhWgzN90SME"
        frameBorder="0"
        allow="accelerometer"
        picture-in-picture
        allowFullScreen
      ></VideoBox>
    </VideoDiv>
  );
};

export { VideoFrame };
