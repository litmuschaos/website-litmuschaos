import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { GithubIcon } from "../github-icon/index";

const LogoDiv = styled.div`
  display: flex;
  color: black;
`;

const GitHubStars = styled.div`
  background: grey;
  padding: 0.5rem 2rem;
  margin: 0 2rem;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-around;
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
    .logo {
      position: absolute;
      left: 0;
    }
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 0 1rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "LitmusLogo.png" }) {
        childImageSharp {
          fixed(height: 50, width: 50) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.icon.childImageSharp.fixed;

  return (
    <NavBar>
      <LogoDiv>
        <Img fixed={imageData} className="logo" alt="LitmusChaos Icon" />
        <h2>Litmus</h2>
        <GitHubStars>
          <GithubIcon />
          <h2>1080</h2>
        </GitHubStars>
      </LogoDiv>
      <Ul>
        <StyledLink to="/">
          <li>Why Litmus?</li>
        </StyledLink>

        <StyledLink to="#" className="listItems">
          <li>Chaoshub</li>
        </StyledLink>

        <StyledLink to="#">
          <li>Blogs</li>
        </StyledLink>

        <StyledLink to="#">
          <li>Community</li>
        </StyledLink>

        <StyledLink to="#">
          <li>Get Started</li>
        </StyledLink>
      </Ul>
    </NavBar>
  );
};

export { Nav };
