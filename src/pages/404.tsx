import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Image404 } from "../components/image-fetch/Image404";
import { theme } from "../styles";

const Background = styled.img`
  position: absolute;
  height: 100%;
  z-index: -1;
`;

// Component
const NotFoundPage: React.FC = () => {
  const { sm, mmd, lg, xl } = theme().screens;
  const Content404 = (
    <>
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
    </>
  );

  const Content404Small = (
    <>
      <div style={{ margin: "10% 0" }}>
        <h1 style={{ width: "75%", margin: "3% 25%", fontWeight: "bold" }}>
          Whoops!
          <br />
          This page is unavailable
        </h1>
        <p style={{ width: "75%", margin: "0 25%" }}>
          The page does not exist, or please try again later
        </p>

        <Link to="/">
          <button
            style={{
              margin: "5rem 25%",
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
      <div style={{ width: "50%", margin: "0 auto", height: "100%" }}>
        <Image404 />
      </div>
    </>
  );

  return (
    <>
      <Background src="/svg/404Background.svg" alt="404 Background" />
      {sm ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          {Content404Small}
        </div>
      ) : mmd ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          {Content404Small}
        </div>
      ) : lg ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 -4rem",
          }}
        >
          {Content404}
        </div>
      ) : xl ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {Content404}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {Content404}
        </div>
      )}
    </>
  );
};

export default NotFoundPage;
