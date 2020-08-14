import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";
import { Image404 } from "../components/imageFetch/Image404";

const Background = styled.img`
  position: absolute;
  height: 100%;
  z-index: -1;
`;

// Component
const NotFoundPage: React.FC = () => {
  return (
    <>
      <Background src="/svg/404Background.svg" alt="404 Background" />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ margin: "10% 0" }}>
          <h1 style={{ width: "100%", margin: "3% 40%", fontWeight: "bold" }}>
            Whoops!
            <br />
            This page is unavailable
          </h1>
          <p style={{ width: "100%", margin: "0 40%" }}>
            The page does not exist, or please try again later
          </p>

          <Link to="/">
            <button
              style={{
                margin: "5rem 40%",
                padding: "1rem 2rem",
                width: "50%",
                background: "#5B44BA",
                borderRadius: "0.3rem",
                color: "#ffff",
              }}
            >
              Go back home
            </button>
          </Link>
        </div>
        <div style={{ width: "50%", margin: "8% 0", height: "100%" }}>
          <Image404 />
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
