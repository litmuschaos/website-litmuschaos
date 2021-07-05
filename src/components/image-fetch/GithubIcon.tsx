import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Center } from "../layout";

const GithubIcon: React.FC = () => {
  return (
    <div>
      <Center>
        <StaticImage
          src="../../images/github-icon.png"
          alt="Github Icon"
          width={20}
          height={20}
        />
      </Center>
    </div>
  );
};

export { GithubIcon };
