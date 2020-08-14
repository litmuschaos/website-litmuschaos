import { Link } from "gatsby";
import React from "react";
import { Image404 } from "../components/imageFetch/Image404";

// Component
const NotFoundPage: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", margin: "8% 0" }}>
        <h1 style={{ width: "100%", margin: "3% 11rem", fontWeight: "bold" }}>
          Whoops!
          <br />
          This page is unavailable
        </h1>
        <p style={{ width: "50%", margin: "0 11rem" }}>
          The page does not exist, or please try again later
        </p>

        <Link to="/">
          <button
            style={{
              margin: "5rem 11rem",
              padding: "1rem 2rem",
              background: "#5B44BA",
              borderRadius: "0.3rem",
              color: "#ffff",
            }}
          >
            Go back home
          </button>
        </Link>
      </div>
      <div style={{ width: "50%", margin: "8% 0" }}>
        <Image404 />
      </div>
    </div>
  );
};

export default NotFoundPage;
