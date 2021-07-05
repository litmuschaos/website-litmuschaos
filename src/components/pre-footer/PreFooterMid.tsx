import React from "react";
import { Button } from "../button";
import { BoundedContainer, ResponsiveRow, SectionDark } from "../layout";
import { PurpleText, SubHeading } from "../texts";

const PreFooterMid = () => {
  return (
    <SectionDark>
      <ResponsiveRow breakpoint="lg">
        <BoundedContainer breakpoint="lg" width="60%" margin="">
          <SubHeading>
            Have you adopted{" "}
            <PurpleText
              style={{ display: "inline-block" }}
              fontWeight={600}
              fontSize="subHeading"
            >
              LitmusChaos
            </PurpleText>
            ? Let us know and we’ll send you some sweet swag!
          </SubHeading>
        </BoundedContainer>
        <BoundedContainer breakpoint="lg" width="30%" margin="">
          <a
            href="https://github.com/litmuschaos/litmus/blob/master/ADOPTERS.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button gradientColor="green">Get your swags</Button>
          </a>
        </BoundedContainer>
      </ResponsiveRow>
    </SectionDark>
  );
};

export { PreFooterMid };
