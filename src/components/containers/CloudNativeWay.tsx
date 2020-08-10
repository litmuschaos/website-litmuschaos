import React from "react";
import styled from "styled-components";
import { Heading } from '../texts/index'
import { Section } from "../../components/section-layout";
import { useTheme } from '../../styles'

const Columnflex = styled.div`
    display:flex;
    flex-flow:wrap column;
    justify-content:center;
    align-items:start;
    padding:3rem;
`
const Rowflex = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

`

const CloudNativeWay: React.FC = () => {
    const { xs, sm, md, lg } = useTheme().screens;
    return (
        <Section>
            <Rowflex style={{flexFlow: lg?"row wrap":"row"}}>
                <img
                    src="./svg/ChaosBird_Experimenting.svg"
                    alt="Chaos Bird Saying"
                    style={{maxWidth:"41rem", width:lg?"80%":"50%", minWidth:"25rem"}}
                />
                {sm||md?(
                    <object data="/svg/SmallFeaturesMobile.svg" type="image/svg+xml" style={{width:xs?"100%":sm?"80%":md?"60%":"", transform:xs?"scale(1.13) translate(0, 3rem)":"", marginBottom:xs?"5rem":"1rem"}}></object>
                ):(
                    <object data="/svg/SmallFeaturesDesktop.svg" type="image/svg+xml" style={{width:"100%", minWidth:"40rem", maxWidth:"34rem"}}></object>
                )}
            </Rowflex>
        </Section>
    );
};

export { CloudNativeWay };