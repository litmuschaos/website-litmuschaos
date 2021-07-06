import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";

const BannerFluidContainer = styled.div`
  width: 100%;
  box-shadow: 0px 0.6px 1.8px ${(props) => props.theme.colors.bannerShadowFrom},
    0px 3.2px 7.2px ${(props) => props.theme.colors.bannerShadowTo};
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
  span.closeBtn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const BannerWrapper = styled.div`
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

const Banner: React.FC = () => {
  const [bannerOpen, setBannerOpen] = React.useState(true);

  return (
    <ThemeProvider theme={theme()}>
      {bannerOpen ? (
        <BannerFluidContainer>
          <BannerContainer>
            <BannerWrapper>
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
            </BannerWrapper>
            <span className="closeBtn">
              <StaticImage
                src="../../../../static/svg/close.svg"
                alt="Close Button"
                width={24}
                height={24}
                placeholder="blurred"
                onClick={() => setBannerOpen(!bannerOpen)}
              />
            </span>
          </BannerContainer>
        </BannerFluidContainer>
      ) : (
        <></>
      )}
    </ThemeProvider>
  );
};

export { Banner };
