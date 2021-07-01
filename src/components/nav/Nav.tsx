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
  max-width: 132rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: ${props => props.theme.zIndex.nav};
`;

const LogoDiv = styled.div`
  display: flex;
`;

const GitHubStars = styled.div`
  width: fit-content;
  height: 2rem;
  font-size: ${props => props.theme.fontSize.small.lg};
  padding: 0 0.5rem;
  margin-left: ${props => (props.theme.screens.md ? "0.5rem" : "1.5rem")};
  border: 1px solid #000000;
  border-radius: 0.5rem;
  display: flex;
  color: black;
  flex-direction: row;
  justify-content: center;
`;

const OutlinedNavButton = styled.div`
  margin-top: 0.5rem;
  margin-left: 2rem;
`;

const Ul = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: ${props =>
      props.theme.screens.mmd
        ? "1rem 0.3rem"
        : props.theme.screens.xl
        ? "0.7rem 0.5rem"
        : "1rem 0.65rem"};
    font-size: ${props =>
      props.theme.screens.mmd ? "0.9rem" : props.theme.fontSize.button};
  }
`;

const SlideDownMenuDesktop = styled.div`
  position: absolute;
  display: none;
  right: 0;
  background: #ffffff;
  box-shadow: 0px 4.8px 14.4px rgba(0, 0, 0, 0.18),
    0px 25.6px 57.6px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  padding: 1rem 0;
  width: 200px;
  border-radius: 6px;
`;

const DropDownNavElement = styled.li`
  position: relative;
  &:hover ${SlideDownMenuDesktop} {
    display: block;
  }
`;

const DropDownLinksDesktop = styled(Link)`
  margin: 0;
  padding: 0.7rem 1.5rem;
  display: block;
  width: 100%;
  text-align: left;
  color: #000;
  font-size: 0.95rem;
  transition: all 100ms ease-in;
  &:hover {
    background: rgba(225, 225, 225, 0.5);
    color: #000;
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
          <Link to="/chaoshub">ChaosHub</Link>
        </li>
        <DropDownNavElement>
          <Link to="#">Community</Link>
          <SlideDownMenuDesktop>
            <DropDownLinksDesktop to="/adopters">
              End User Adopters
            </DropDownLinksDesktop>
            <DropDownLinksDesktop
              to="https://dev.to/t/litmuschaos"
              target="_blank"
            >
              Blogs
            </DropDownLinksDesktop>
            <DropDownLinksDesktop to="/community">
              Other Resources
            </DropDownLinksDesktop>
          </SlideDownMenuDesktop>
        </DropDownNavElement>
        <OutlinedNavButton>
          <a rel="noopener noreferrer" target="_blank" href="#">
            <OutlinedButton backgroundColor="purple">
              Get Started
            </OutlinedButton>
          </a>
        </OutlinedNavButton>
      </Ul>
    </NavBar>
  );
};

export { Nav };
