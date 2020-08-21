import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import { OutlinedButton } from "../button/index";
import { GithubIcon } from "../image-fetch/GithubIcon";
import { Center } from "../layout";
import { Link } from "../link/index";
import { SmallText } from "../texts";
import Burger from "./Burger";

const NavBar = styled.nav`
  width: ${(props) => (props.theme.screens.xl ? "95%" : "100%")};
  max-width: 132rem;
  margin: 0 auto;
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
  width: fit-content;
  height: 2rem;
  font-size: ${(props) => props.theme.fontSize.small.lg};
  padding: 0 0.5rem;
  margin-left: ${(props) => (props.theme.screens.md ? "0.5rem" : "1.5rem")};
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

const NavLinks: React.FC = () => (
  <LogoDiv>
    <Link to="/">
      <Center>
        <img src="/svg/litmus-logo-purple.svg" width="128" alt="litmus logo" />
      </Center>
    </Link>

    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/litmuschaos/litmus"
    >
      <Center>
        <GitHubStars>
          <GithubIcon />
          <SmallText style={{ margin: "0.3rem" }}>Star</SmallText>
        </GitHubStars>
      </Center>
    </a>
  </LogoDiv>
);

const Nav: React.FC = () => {
  const { md } = useTheme().screens;

  return md ? (
    <NavBar>
      <NavLinks />
      <Burger />
    </NavBar>
  ) : (
    <NavBar>
      <NavLinks />

      <Ul>
        <li>
          <Link to="/whylitmus">Why Litmus?</Link>
        </li>

        <li>
          <Link to="/chaoshub" className="listItems">
            ChaosHub
          </Link>
        </li>

        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://dev.to/t/litmuschaos"
          >
            Blogs
          </a>
        </li>

        <li>
          <Link to="/community">Community</Link>
        </li>

        <GettingStarted>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.litmuschaos.io/docs/getstarted/"
          >
            <OutlinedButton backgroundColor="black">Get Started</OutlinedButton>
          </a>
        </GettingStarted>
      </Ul>
    </NavBar>
  );
};

export { Nav };
