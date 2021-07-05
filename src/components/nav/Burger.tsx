import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const MobileNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HamBurger = styled.div`
  span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #000;
    mix-blend-mode: difference;
    &:first-child {
      margin-bottom: 4px;
    }
    &:nth-child(2) {
      margin-bottom: 4px;
      width: 25px;
    }
  }
`;

const MobileNavBar = styled.div`
  position: absolute;
  width: 100%;
  background-color: #ffffff;
  left: 0;
  padding: 1rem 0.5rem;
  top: 60px;
  border-radius: 6px;
  box-shadow: 0px 4.8px 14.4px rgba(0, 0, 0, 0.18),
    0px 25.6px 57.6px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  a,
  span {
    padding: 0.7rem 1.5rem;
    display: block;
    margin-top: 0 !important;
    text-align: center;
    color: #000;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 600;
  }
  a.buttonMobile {
    border: 1px solid #5b44ba;
    border-radius: 6px;
    color: #5b44ba;
  }
`;

const SubNavMobile = styled.div`
  background: rgba(225, 225, 225, 0.3);
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 6px;
`;

const Burger: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [subMenu, setSubMenu] = React.useState<boolean>(false);
  const handleSwitch = () => {
    setOpen(!open);
    setSubMenu(false);
  };
  const handleSubMenu = () => {
    setSubMenu(!subMenu);
  };
  return (
    <>
      <MobileNavBarContainer>
        <HamBurger onClick={handleSwitch}>
          <span></span>
          <span></span>
          <span></span>
        </HamBurger>
        {open && (
          <>
            <MobileNavBar>
              <Link to="/whylitmus">Why Litmus?</Link>
              <Link to="/chaoshub">ChaosHub</Link>
              <span onClick={handleSubMenu}>Community</span>
              {subMenu ? (
                <>
                  <SubNavMobile>
                    <Link to="/adopters">End User Adopters</Link>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://dev.to/t/litmuschaos"
                    >
                      Blogs
                    </a>
                    <Link to="/community">Other Resources</Link>
                  </SubNavMobile>
                </>
              ) : (
                <></>
              )}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://docs.litmuschaos.io/docs/getstarted/"
                className="buttonMobile"
              >
                Get Started
              </a>
            </MobileNavBar>
          </>
        )}
      </MobileNavBarContainer>
    </>
  );
};

export default Burger;
