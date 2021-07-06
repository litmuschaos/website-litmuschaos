import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const BannerFluidContainer = styled.div`
  width: 100%;
  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
  position: relative;
  z-index: 120;
  background: ${(props) => props.theme.colors.white};
  height: ${(props) => (props.theme.screens.md ? "fit-content" : "2.8rem")};
  padding: ${(props) => (props.theme.screens.md ? "0.5rem 1rem" : "0")};
`;
const BannerContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const Banner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    background-color: ${(props) => props.theme.colors.yellowPill};
    font-size: 0.9rem;
    padding: 0.2rem 1rem;
    border-radius: 100px;
    color: ${(props) => props.theme.colors.white};
    display: ${(props) => (props.theme.screens.sm ? "none" : "inline-block")};
  }
  div {
    display: flex;
    flex-direction: ${(props) => (props.theme.screens.sm ? "column" : "row")};
    justify-content: center;
    align-items: center;
  }
  p {
    margin: ${(props) => (props.theme.screens.sm ? "0" : "0 0.5rem")};
    font-size: 0.9rem;
    font-weight: 600;
  }
  a {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const BannerHome: React.FC = () => {
  const [banner, setBanner] = React.useState(true);
  const hideBanner = () => {
    setBanner(!banner);
  };
  return (
    <>
      {banner ? (
        <BannerFluidContainer>
          <BannerContainer>
            <Banner>
              <span>NEW</span>
              <div>
                <p>Releasing Litmus 2.0 on August 15, 2021</p>
                <Link
                  to="https://dev.to/litmus-chaos/litmus-2-0-simplifying-chaos-engineering-for-enterprises-4448"
                  target="_blank"
                >
                  See what's coming in Litmus 2.0
                </Link>
              </div>
            </Banner>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={hideBanner}
            >
              <path
                d="M18.75 5.25L5.25 18.75"
                stroke="#7E8F9A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 18.75L5.25 5.25"
                stroke="#7E8F9A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </BannerContainer>
        </BannerFluidContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export { BannerHome };
