import React from "react";
import styled from "styled-components";
import { colors } from "./styles";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Nav from "./components/nav";

function App() {
  return (
    <AppContainer>
      <Home />
      <About />
      <Projects />
      <Contact />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.dark};
`;
