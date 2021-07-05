import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import {
  BoundedContainer,
  Center,
  ResponsiveRow,
  SectionLight,
} from "../../layout";
import { Heading, Paragraph, PurpleText } from "../../texts";

interface IUserQuote {
  quote: string;
  name: string;
  designation: string;
}

const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const UserQuote: React.FC<IUserQuote> = ({ quote, name, designation }) => {
  return (
    <BoundedContainer breakpoint="md" width="50%" margin="0 0 0 2rem">
      <Center>
        <div>
          <Heading>See what our users are saying about us</Heading>
          <img
            src="/svg/apostrophe.svg"
            alt="quotes"
            style={{ margin: "2rem 0 1rem 0" }}
          />
          <Paragraph>{quote}</Paragraph>
          <br />
          <AvatarDiv>
            <StaticImage
              src="../../../images/avatar.png"
              alt="Avatar"
              placeholder="blurred"
            />
            <div style={{ height: "fit-content", marginLeft: "1rem" }}>
              <PurpleText fontSize="subHeading" fontWeight={600}>
                {name}
              </PurpleText>
              <Paragraph>{designation}</Paragraph>
            </div>
          </AvatarDiv>
        </div>
      </Center>
    </BoundedContainer>
  );
};

const FeedBack: React.FC = () => {
  return (
    <SectionLight>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="50%" margin="0">
          <StaticImage
            src="../../../images/feedback.png"
            alt="Choas Bird taking feedback"
            placeholder="blurred"
          />
        </BoundedContainer>
        <UserQuote
          quote="Litmus is one of the most promising open source chaos engineering frameworks that takes into account proper chaos engineering principles while providing autonomy and  extensibility to the users."
          name="Andreas Krivas"
          designation="Lead Cloud-Native Engineer at Container-Solutions"
        />
      </ResponsiveRow>
    </SectionLight>
  );
};

export { FeedBack };
