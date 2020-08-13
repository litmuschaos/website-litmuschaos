import React from "react";
import { ResponsiveRow, SectionDark } from "../../layout";
import { Terminal } from "../../terminal";
import { Heading } from "../../texts";

const GetStarted: React.FC = () => {
  return (
    <SectionDark>
      <Heading textAlign="center">Get started with Litmus</Heading>
      <ResponsiveRow breakpoint="md">
        <Terminal />
      </ResponsiveRow>
    </SectionDark>
  );
};

export { GetStarted };
