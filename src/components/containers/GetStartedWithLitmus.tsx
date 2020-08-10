import React from "react";
import styled from "styled-components";
import { Heading } from "../texts/index";
import { Section } from "../../components/section-layout";
import { useTheme } from "../../styles";

const Rowflex = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
`;

const DesktopContainer = styled.div`
  object {
    width: 50%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const MobileContainer = styled.div`
  object {
    width: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HoverWindow = styled.div`
  position: relative;
  display: inline-block;
  img {
    cursor: pointer;
  }
  div {
    visibility: hidden;
    width: 8rem;
    background-color: ${(props) => props.theme.colors.textSecondary};
    color: ${(props) => props.theme.colors.pureWhite};
    text-align: center;
    border-radius: 6px;
    padding: 0.5rem;
    position: absolute;
    z-index: 10;
    bottom: 100%;
    left: 50%;
    margin-left: -4rem;
    opacity: 0;
    transition: opacity 1s;
    :after {
      content: " ";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: ${(props) => props.theme.colors.textSecondary} transparent
        transparent transparent;
    }
  }
  :hover div {
    visibility: visible;
    opacity: 1;
  }
`;

const copy = (green: string) => {
  var input = document.createElement("input");
  input.setAttribute(
    "value",
    "kubectl  apply  -f https://litmuschaos.github.io/pages/litmus-operator-latest.yaml"
  );
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  const copyIndicator: HTMLElement | null = document.getElementById("copydesk");
  if (copyIndicator) {
    copyIndicator.style.background = green;
    copyIndicator.innerHTML = "Copied 🎉";
  }
  document.body.removeChild(input);
};

const GetStartedWithLitmus: React.FC = () => {
  const { sm, md, xl } = useTheme().screens;
  const { greenDark } = useTheme().colors;
  return (
    <Section>
      <DesktopContainer style={{ width: sm ? "100%" : md ? "70%" : "" }}>
        <Heading>Get started with Litmus</Heading>
      </DesktopContainer>
      <Rowflex>
        {sm || md ? (
          <MobileContainer style={{ flexFlow: md ? "column wrap" : "row" }}>
            <HoverWindow onClick={() => copy(greenDark)}>
              <img
                src="/svg/MacWindowMobile.svg"
                alt="hello"
                style={{ minWidth: "40rem" }}
              ></img>
              {/* <object data="/svg/MacWindowMobile.svg" type="image/svg+xml" style={{minWidth:"22rem"}}></object> Uncomment in case of emergency*/}
              <div id="copydesk">Click to copy</div>
            </HoverWindow>
            <object
              data="/svg/GetStartedMobile.svg"
              type="image/svg+xml"
              style={{ minWidth: "22rem", maxWidth: "40rem" }}
            ></object>
          </MobileContainer>
        ) : (
          <DesktopContainer style={{ flexFlow: xl ? "row wrap" : "row" }}>
            <HoverWindow onClick={() => copy(greenDark)}>
              {/* <object data="/svg/MacWindowDesktop.svg" type="image/svg+xml" style={{minWidth:"40rem"}}></object> Uncomment in case of emergency*/}
              <img
                src="/svg/MacWindowDesktop.svg"
                alt="hello"
                style={{ minWidth: "40rem" }}
              ></img>
              <div id="copydesk">Click to copy</div>
            </HoverWindow>
            <object
              data="/svg/GetStartedDesktop.svg"
              type="image/svg+xml"
              style={{
                maxWidth: "40rem",
                minWidth: "70%",
                width: xl ? "100%" : "",
              }}
            ></object>
          </DesktopContainer>
        )}
      </Rowflex>
    </Section>
  );
};

export { GetStartedWithLitmus };
