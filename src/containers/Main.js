import React from "react";
import Site from "../site/Site";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";

const Main = () => {
  // Follows the OS theme until the visitor picks one with the toggle.
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
      <Site />
    </StyleProvider>
  );
};

export default Main;
