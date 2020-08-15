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
  width: ${props => (props.theme.screens.xl ? "95%" : "100%")};
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: ${props => props.theme.zIndex.nav};
`;

const LogoDiv = styled.div`
  display: flex;
  margin: 0 1rem;
`;

const GitHubStars = styled.div`
  width: fit-content;
  height: 2rem;
  font-size: ${props => props.theme.fontSize.small.lg};
  padding: 0 0.5rem;
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
    padding: ${props =>
      props.theme.screens.mmd
        ? "1rem 0.3rem"
        : props.theme.screens.xl
        ? "0.7rem 0.5rem"
        : "1rem 1rem"};
    font-size: ${props =>
      props.theme.screens.mmd ? "0.9rem" : props.theme.fontSize.button};
  }
`;

const GithubWrapper = styled.div`
  flex-grow: 1;
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-right: 0.5rem;
`;

const Logo: React.FC = () => (
  <img src="/svg/litmus-logo-purple.svg" width="128" alt="litmus logo" />
);

const Nav: React.FC = () => {
  const { md } = useTheme().screens;

  return md ? (
    <NavBar>
      <Link to="/">
        <Center style={{ marginLeft: "1rem" }}>
          <Logo />
        </Center>
      </Link>

      <GithubWrapper>
        <a target="_blank" href="https://github.com/litmuschaos/litmus">
          <GitHubStars>
            <GithubIcon />
            <SmallText style={{ margin: "0.4rem" }}>Star</SmallText>
          </GitHubStars>
        </a>
      </GithubWrapper>
      <Burger />
    </NavBar>
  ) : (
    <NavBar>
      <LogoDiv>
        <Link to="/">
          <Center>
            <Logo />
          </Center>
        </Link>

        <a target="_blank" href="https://github.com/litmuschaos/litmus">
          <Center>
            <GitHubStars>
              <GithubIcon />
              <SmallText style={{ margin: "0.3rem" }}>Star</SmallText>
            </GitHubStars>
          </Center>
        </a>
      </LogoDiv>

      <Ul>
        <Link to="/whylitmus">
          <li>Why Litmus?</li>
        </Link>

        <Link to="/chaoshub" className="listItems">
          <li>Chaoshub</li>
        </Link>

        <Link
          to="route"
          target="_blank"
          onClick={event => {
            event.preventDefault();
            window.open("https://dev.to/t/litmuschaos");
          }}
        >
          <li>Blogs</li>
        </Link>

        <Link to="/community">
          <li>Community</li>
        </Link>

        <GettingStarted>
          <OutlinedButton backgroundColor="black">Get Started</OutlinedButton>
        </GettingStarted>
      </Ul>
    </NavBar>
  );
};

export { Nav };
