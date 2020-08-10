import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import { OutlinedButton } from "../button/index";
import { GithubIcon } from "../github-icon/index";
import { Link } from "../link/index";
import Burger from "./Burger";

const Logo: React.FC = () => (
  <img src="/svg/litmus-logo.svg" width="128" alt="litmus logo" />
);

const NavBar = styled.nav`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  background: transparent;
  justify-content: space-around;
`;

const LogoDiv = styled.div`
  display: flex;
`;

const GitHubStars = styled.div`
  height: 2rem;
  font-size: ${props => props.theme.fontSize.small};
  background: ${props => props.theme.colors.spaceGrey};
  padding: 0.5rem 0.5rem;
  margin-left: 1rem;
  margin-top: 0.6rem;
  box-shadow: -0.2rem 0.3rem 0.7rem 0.1rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  display: flex;
  color: black;
  flex-direction: row nowrap;
  justify-content: space-between;
`;

const GettingStarted = styled.div`
  margin-top: 0.3rem;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 1rem 1rem;
    font-size: ${props => props.theme.fontSize.button};
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  flex-direction; row;
`;

const Nav: React.FC = () => {
  const { sm } = useTheme().screens;

  return (
    <NavBar>
      {sm ? (
        <>
          <Logo />
          <ResponsiveNav>
            <GitHubStars>
              <GithubIcon />
              <h3>Stars</h3>
            </GitHubStars>
            <Burger />
          </ResponsiveNav>
        </>
      ) : (
        <>
          <LogoDiv>
            <Logo />
            <GitHubStars>
              <GithubIcon />
              <h3>Stars</h3>
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
              <OutlinedButton>Get Started</OutlinedButton>
            </GettingStarted>
          </Ul>
        </>
      )}
    </NavBar>
  );
};

export { Nav };
