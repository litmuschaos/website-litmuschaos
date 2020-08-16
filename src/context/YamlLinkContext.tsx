import React from "react";

interface IYamlContext {
  yamlLink: string;
  setYamlLink: React.Dispatch<React.SetStateAction<string>>;
}
const YamlContext = React.createContext<IYamlContext>({
  yamlLink: "",
  setYamlLink: () => {},
});

export { YamlContext };
