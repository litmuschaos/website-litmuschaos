import React from "react";
import styled from "styled-components";
import { Link } from "../link/index";
import { OutlinedButton } from "../button/index";
import { GithubIcon } from "../github-icon/index";
import Burger from "./Burger";
const LitmusLogo = require("../../images/LitmusLogo.png");

const LogoDiv = styled.div`
  display: flex;
`;

const GitHubStars = styled.div`
  height: 2rem;
  font-size: 0.5rem;
  background: ${props => props.theme.colors.spaceGrey};
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1.5rem;
  box-shadow: -0.2rem 0.3rem 0.7rem 0.1rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  display: flex;
  color: black;
  flex-direction: row nowrap;
  justify-content: space-around;
  .stars {
    width: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .divider {
    margin: 0 0.5rem;
  }
  .starValue {
    width: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    margin: 0;
    box-shadow: 0;
    background: transparent;
    right: 0;

    .starValue {
      display: none;
    }
  }
`;

const NavBar = styled.nav`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  background: transparent;
  justify-content: space-between;
  .logo {
    padding: 0;
  }
  @media (max-width: 768px) {
    height: 2rem;
    .logo {
      height: 1.8rem;
      width: 5rem;
    }
  }
`;

const GettingStarted = styled.div`
  color: ${props => props.theme.colors.backgroundLight};
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 0 1rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <LogoDiv>
        <img src={LitmusLogo} className="logo" alt="LitmusChaos Icon" />
        <GitHubStars>
          <div className="stars">
            <GithubIcon />
            <h3>Stars</h3>
          </div>
          <div className="starValue">
            <hr className="divider" />
            <h2>1080</h2>
          </div>
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

        <Link to="#">
          <li>Community</li>
        </Link>

        <GettingStarted>
          <OutlinedButton>Get Started</OutlinedButton>
        </GettingStarted>
      </Ul>
      <Burger />
    </NavBar>
  );
};

export { Nav };
