import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import { OutlinedButton } from "../button/index";
import { GithubIcon } from "../github-icon/index";
import { SubText } from "../texts";
import { Link } from "../link/index";
import Burger from "./Burger";

// interface INavBar {
//   backgroundColor: string;
// }

const Logo: React.FC = () => (
  <img
    src="/svg/litmus-logo-purple.svg"
    width="128"
    alt="litmus logo"
    style={{ marginBottom: "1rem" }}
  />
);

const NavBar = styled.nav`
  width: ${(props) => (props.theme.screens.xl ? "95%" : "100%")};
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: ${(props) => props.theme.zIndex.nav};
`;

const LogoDiv = styled.div`
  display: flex;
  margin: 0 1rem;
`;

const GitHubStars = styled.div`
  height: 2rem;
  font-size: ${(props) => props.theme.fontSize.small};
  padding: 0.5rem 0.5rem;
  margin-left: 1.5rem;
  margin-top: 0.4rem;
  border: 1px solid #000000;
  border-radius: 0.5rem;
  display: flex;
  color: black;
  flex-direction: row;
  justify-content: center;
`;

const GettingStarted = styled.div`
  margin-top: 0.5rem;
  margin-left: 2rem;
  margin-right: -4rem;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: ${(props) =>
      props.theme.screens.mmd
        ? "1rem 0.3rem"
        : props.theme.screens.xl
        ? "0.7rem 0.5rem"
        : "1rem 1rem"};
    font-size: ${(props) =>
      props.theme.screens.mmd ? "0.9rem" : props.theme.fontSize.button};
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  flex-direction: row;
`;

const Nav: React.FC = () => {
  const { md } = useTheme().screens;

  return (
    <NavBar>
      {md ? (
        <>
          <div
            style={{
              position: "absolute",
              left: "10%",
            }}
          >
            <Logo />
          </div>
          <ResponsiveNav>
            <GitHubStars
              style={{
                position: "absolute",
                right: "20%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  margin: "-7% 0",
                }}
              >
                <GithubIcon />
              </div>
              <SubText
                style={{
                  fontSize: "0.8rem",
                  position: "relative",
                  margin: "-7% 0.2rem",
                }}
              >
                Stars
              </SubText>
            </GitHubStars>
            <Burger />
          </ResponsiveNav>
        </>
      ) : (
        <>
          <LogoDiv>
            <Logo />
            <GitHubStars>
              <div
                style={{
                  position: "relative",
                  margin: "-5% 0",
                }}
              >
                <GithubIcon />
              </div>
              <SubText
                style={{
                  fontSize: "0.9rem",
                  position: "relative",
                  margin: "-5% 0.2rem",
                }}
              >
                Stars
              </SubText>
            </GitHubStars>
          </LogoDiv>
          <Ul>
            <Link to="/">
              <li>Why Litmus?</li>
            </Link>

            <Link to="#" className="listItems">
              <li>Chaoshub</li>
            </Link>

            <Link to="#">
              <li>Blogs</li>
            </Link>

            <Link to="/community">
              <li>Community</li>
            </Link>

            <GettingStarted>
              <OutlinedButton backgroundColor="black">
                Get Started
              </OutlinedButton>
            </GettingStarted>
          </Ul>
        </>
      )}
    </NavBar>
  );
};

export { Nav };
