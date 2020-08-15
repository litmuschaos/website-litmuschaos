import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";
import { OutlinedButton } from "../button";
import { Link } from "../link/index";

const StyledBurger = styled.div`
  margin: 0 0.7rem;
  margin-top: 0.5rem;
  height: 1.5rem;
  width: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;

  .line {
    height: 0.35rem;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.textSecondary};
    border-radius: 0.5rem;
  }
  .big {
    width: 2.2rem;
  }
  .small {
    width: 1.7rem;
  }
`;

const GettingStarted = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const Ul = styled.ul`
  margin: 0 auto;
  text-align: center;
  width: 100%;

  li {
    margin: 1rem 0;
    padding: 0.3rem 0;
    font-weight: 600;
  }

  li:active {
    background-color: ${props => props.theme.colors.purple(0.2)};
  }
`;

const BurgerModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 5rem;
  width: 100%;
  height: 20rem;
  margin: 0 3%;
  border-radius: 0.25rem;
  background: white;
  box-shadow: 0px 12px 19px rgba(0, 0, 0, 0.1);
`;

const Burger: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { textSecondary } = useTheme().colors;

  const handleSwitch = () => {
    setOpen(!open);
  };

  return (
    <>
      <div onClick={handleSwitch}>
        <StyledBurger>
          <div className="line big" />
          <div className="line small" />
          <div className="line small" />
        </StyledBurger>
      </div>
      {open ? (
        <>
          <BurgerModal>
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

              <li>
                <GettingStarted>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://docs.litmuschaos.io/docs/getstarted/"
                  >
                    <OutlinedButton backgroundColor={textSecondary}>
                      Get Started
                    </OutlinedButton>
                  </a>
                </GettingStarted>
              </li>
            </Ul>
          </BurgerModal>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Burger;
