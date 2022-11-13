import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
// import Nav from "./components/nav";

import { GlobalStyle } from "./styles/GlobalStyle";
import { FontStyle } from "./styles/fonts/FontStyle";

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    if (darkTheme) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <AppContainer>
        <Home />
        <About />
        <Projects />
        <Contact />
      </AppContainer>
      <GlobalStyle />
      <FontStyle />
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.base};
`;
