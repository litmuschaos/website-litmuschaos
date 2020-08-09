import React from "react";
import styled from "styled-components";
import { Link } from "../link/index";
import { OutlinedButton } from "../button/index";
import { GithubIcon } from "../github-icon/index";
import Burger from "./Burger";
import { useTheme } from "../../styles";

const Logo: React.FC = () => (
  <Link to="/">
    <img src="/svg/Litmus.svg" width="128" alt="litmus logo" style={{margin:"0.4rem"}}/>
  </Link>
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
  height: fit-content;  
  background: ${props => props.theme.colors.spaceGrey};
  padding: 0.3rem 0.5rem;
  padding-top: 0.5rem;
  margin-left: 1rem;
  margin-top: 0.6rem;
  width: 7rem;
  border: 1px solid ${props => props.theme.colors.pureWhite};
  box-sizing: border-box;
  filter: drop-shadow(0px 1px 14px rgba(0, 0, 0, 0.12));
  transform:scale(0.8);
  border-radius: 4px;
  display: flex;
  color: black;
  cursor:pointer;
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
  color:black;
  li {
    color:black;
    padding: 1rem 1rem;
    font-size: 0.9rem;
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  flex-direction; row;
`

const Nav: React.FC = () => {
  const { sm } = useTheme().screens;
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
      {/* This is added intentionally for correcting svgs font issue. Writing webfont link in the css file doesn't work. The font needs to be in the DOM. Go to global.css files to understand more*/}
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
              <Link to="/whylitmus">
                <li>Why Litmus?</li>
              </Link>

              <Link to="#" className="listItems">
                <li>Chaoshub</li>
              </Link>

              <Link to="#">
                <li>Blogs</li>
              </Link>

              <Link to="#">
                <li>Community</li>
              </Link>

              <GettingStarted>
                <OutlinedButton>Get Started</OutlinedButton>
              </GettingStarted>
            </Ul>
          </>
        )}
      </NavBar>
    </>
  );
};

export { Nav };
