import React from "react";
import styled from "styled-components";
import { Link } from "../link/index";
import { useTheme } from "../../styles";
import { OutlinedButton } from "../button";

const StyledBurger = styled.div`
  position: absolute;
  right: 5%;
  margin: 0 0.7rem;
  margin-top: 0.5rem;
  height: 1.5rem;
  width: 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .line {
    width: 70%;
    margin-left: 30%;
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
    background-color: ${(props) => props.theme.colors.purple(0.2)};
  }
`;

const BurgerModal = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 5rem;
  width: 100%;
  height: 20rem;
  margin: 0 3%;
  overflow: auto;
  background: #ffffff;
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
          <button />
          <button className="line" />
          <button className="line" />
        </StyledBurger>
      </div>
      {open ? (
        <>
          <BurgerModal>
            <Ul>
              <Link to="/">
                <li>Why Litmus?</li>
              </Link>

              <Link to="/chaoshub" className="listItems">
                <li>Chaoshub</li>
              </Link>

              <Link
                to="route"
                target="_blank"
                onClick={(event) => {
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
                  <OutlinedButton backgroundColor={textSecondary}>
                    Get Started
                  </OutlinedButton>
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
