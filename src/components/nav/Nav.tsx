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
  padding: ${(props) => (props.theme.screens.md ? "1rem 0" : "")};
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
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 0.5rem;
  display: flex;
  color: ${(props) => props.theme.colors.black};
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
    span {
      color: ${(props) =>
        props.color === "white"
          ? props.theme.colors.white
          : props.theme.colors.black};
      &:hover {
        color: ${(props) => props.theme.colors.black};
      }
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
  width: 250px;
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
  color: ${(props) => props.theme.colors.black};
  font-size: 0.95rem;
  transition: all 100ms ease-in;
  &:hover {
    background: ${(props) => props.theme.colors.dropShadowNavbarDesktop};
    color: ${(props) => props.theme.colors.black};
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
          <span>Community &#8628;</span>
          <SlideDownMenuDesktop>
            <DropDownLinksDesktop to="/community">
              Community Resources
            </DropDownLinksDesktop>
            <DropDownLinksDesktop
              to="https://dev.to/t/litmuschaos"
              target="_blank"
            >
              Blog
            </DropDownLinksDesktop>
            <DropDownLinksDesktop to="/adopters">
              End User Adopters
            </DropDownLinksDesktop>
          </SlideDownMenuDesktop>
        </DropDownNavElement>
        <OutlinedNavButton>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.katacoda.com/litmusbot/scenarios/getting-started-with-litmus"
          >
            <OutlinedButton backgroundColor={`${match ? `white` : `purple`}`}>
              Interactive Tutorial
            </OutlinedButton>
          </a>
        </OutlinedNavButton>
      </Ul>
    </NavBar>
  );
};

export { Nav };
