import { useMatch } from "@reach/router";
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
  width: ${(props) => (props.theme.screens.xl ? "calc(100% - 3rem)" : "100%")};
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: ${(props) => props.theme.zIndex.nav};
`;

const LogoDiv = styled.div`
  display: flex;
`;
const MobBurgerDiv = styled(LogoDiv)`
  justify-content: space-between;
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
    padding: ${(props) =>
      props.theme.screens.mmd
        ? "1rem 0.3rem"
        : props.theme.screens.xl
        ? "0.7rem 0.5rem"
        : "1rem 0.65rem"};
    font-size: ${(props) =>
      props.theme.screens.mmd ? "0.9rem" : props.theme.fontSize.button};
    a {
      color: ${(props) =>
        props.color === "white"
          ? props.theme.colors.white
          : props.theme.colors.black};
    }
  }
`;

const SlideDownMenuDesktop = styled.div`
  position: absolute;
  display: none;
  right: 0;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4.8px 14.4px ${(props) => props.theme.colors.boxShadowCol1},
    0px 25.6px 57.6px ${(props) => props.theme.colors.boxShadowCol2};
  border-radius: 10px;
  padding: 1rem 0;
  width: 200px;
  border-radius: 6px;
  a {
    color: ${(props) => props.theme.colors.black} !important;
  }
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
    background: ${(props) => props.theme.colors.dropShadowNavbarDesktop};
    color: #000;
  }
`;

const NavLinks: React.FC = () => {
  const { md } = useTheme().screens;
  return (
    <LogoDiv>
      <Link to="/">
        <Center>
          <img
            src="/svg/litmus-logo-purple.svg"
            width="128"
            alt="litmus logo"
          />
        </Center>
      </Link>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/litmuschaos/litmus"
      >
        {!md && (
          <Center>
            <a
              href="https://github.com/litmuschaos/litmus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubStars>
                <GithubIcon />
                <SmallText style={{ margin: "0.3rem" }}>Star</SmallText>
              </GitHubStars>
            </a>
          </Center>
        )}
      </a>
    </LogoDiv>
  );
};

const Nav: React.FC = () => {
  const match = useMatch("/");
  const { md } = useTheme().screens;

  return md ? (
    <NavBar>
      <NavLinks />
      <MobBurgerDiv>
        <Center>
          <a
            href="https://github.com/litmuschaos/litmus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubStars style={{ marginRight: "0.8rem" }}>
              <GithubIcon />
              <SmallText style={{ margin: "0.3rem" }}>Star</SmallText>
            </GitHubStars>
          </a>
        </Center>
        <Burger />
      </MobBurgerDiv>
    </NavBar>
  ) : (
    <NavBar>
      <NavLinks />
      <Ul color={`${match && `white`}`}>
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
            <OutlinedButton backgroundColor={`${match ? `white` : `purple`}`}>
              Get Started
            </OutlinedButton>
          </a>
        </OutlinedNavButton>
      </Ul>
    </NavBar>
  );
};

export { Nav };
