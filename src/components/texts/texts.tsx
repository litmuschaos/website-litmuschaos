import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.div`
    font-size: ${props => props.theme.fontsize.heading};
    color: black;
    min-width: 8rem;
    font-weight:bold;
    padding: 20px 0px;
`;
const SubHeadingStyles = styled.div`
    font-size: ${props => props.theme.fontsize.subheading};
    color: black;
    min-width: 8rem;
    font-weight:bold;
    padding: 20px 0px;
`;
const ParagraphStyles = styled.div`
    font-size: ${props => props.theme.fontsize.paragraph};
    color: grey;
    min-width: 8rem;
    padding: 20px 0px;
`;

const Heading: React.FC = ({ children }) => {
    return <HeadingStyles>{children}</HeadingStyles>;
};

const SubHeading: React.FC = ({ children }) => {
    return <SubHeadingStyles>{children}</SubHeadingStyles>;
};

const Paragraph: React.FC = ({ children }) => {
    return <ParagraphStyles>{children}</ParagraphStyles>;
};

export { Heading, SubHeading, Paragraph };