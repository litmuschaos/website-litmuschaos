import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "../link/index";
import { OutlinedButton } from "../button/index";
import { GithubIcon } from "../github-icon/index";

const LogoDiv = styled.div`
  display: flex;
  color: black;
`;

const GitHubStars = styled.div`
  height: 2rem;
  font-size: 0.5rem;
  background: #f1f2f6;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  box-shadow: -0.2rem 0.3rem 0.7rem 0.1rem rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  display: flex;
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

const GettingStarted = styled.div`
  color: white;
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
          <div className="stars">
            <GithubIcon />
            <h3>Stars</h3>
          </div>
          <hr className="divider" />
          <h2>1080</h2>
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
    </NavBar>
  );
};

export { Nav };
