import React from "react";
import styled from "styled-components";
import { ResponsiveRow } from '../layout'
import { Heading, SubHeading, Paragraph } from '../texts/index'
import { Section } from "../../components/section-layout";
import { useTheme } from '../../styles'


const Rowflex = styled.div`
    width:100%;
    display:flex;
    flex-flow:wrap row;
    justify-content:center;
    align-items:center;
`

const DesktopContainer = styled.div`
    object{
        width:50%;
    }
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
`
const MobileContainer = styled.div`
    object{
        width:100%;
    }
    display:flex;
    justify-content:center;
    align-items:center;
`
const HoverWindow = styled.div`
    position: relative;
    display: inline-block;
    div{
        visibility: hidden;
        width: 120px;
        background-color: ${props=> props.theme.colors.textSecondary};
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 10;
        bottom: 100%;
        left: 50%;
        margin-left: -60px;
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
            border-color: ${props=> props.theme.colors.textSecondary} transparent transparent transparent;
        }
    }
    :hover div {
        visibility: visible;
        opacity: 1;
    }
`

const copy = () => {
    alert("hello")
    var input = document.createElement('input');
    input.setAttribute('value', "kubectl  apply  -f https://litmuschaos.github.io/pages/litmus-operator-latest.yaml");
    document.body.appendChild(input);
    input.select();
    console.log(input.value)
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    console.log("copied")
    //This is not working properly (Event bubbling needed here) Help needed.
 }

const GetStartedWithLitmus: React.FC = () => {
    const { sm,md,xl } = useTheme().screens;
    return (
        <Section>
            <DesktopContainer style={{width:sm?"100%":md?"70%":""}}>
                <Heading>Get started with Litmus</Heading>
            </DesktopContainer>
            <Rowflex>
                {sm||md?(
                    <MobileContainer style={{flexFlow:md?"column wrap":"row"}}>
                        <HoverWindow onClick={copy}>
                            <object data="/svg/MacWindowMobile.svg" type="image/svg+xml" style={{minWidth:"22rem"}}></object>
                            <div>Click to copy</div>
                        </HoverWindow>
                        <object data="/svg/GetStartedMobile.svg" type="image/svg+xml" style={{minWidth:"22rem", maxWidth:"40rem"}}></object>
                    </MobileContainer>
                ):(
                    <DesktopContainer style={{flexFlow: xl?"row wrap":"row"}}>
                        <HoverWindow  onClick={copy}>
                            <object data="/svg/MacWindowDesktop.svg" type="image/svg+xml" style={{minWidth:"40rem"}}></object>
                            <div>Click to copy</div>
                        </HoverWindow>
                        <object data="/svg/GetStartedDesktop.svg" type="image/svg+xml" style={{maxWidth:"40rem", minWidth:"70%", width:xl?"100%":""}}></object>
                    </DesktopContainer>
                )}
            </Rowflex>
        </Section>
    );
};

export { GetStartedWithLitmus };