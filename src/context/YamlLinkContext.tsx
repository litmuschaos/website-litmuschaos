import React from "react";

export interface IYamlContext {
  yamlLink: string;
  setYamlLink: React.Dispatch<React.SetStateAction<string>>;
  latestVersion: string;
}
const YamlContext = React.createContext<IYamlContext>({
  yamlLink: "",
  setYamlLink: () => {},
  latestVersion: "",
});

export { YamlContext };
