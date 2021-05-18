import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline } from "react-gsap";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

const App = () => {
  return (
    <AppContainer>
      <Controller>
        <Scene triggerHook="onLeave" duration="400%" pin>
          <Timeline wrapper={<div id="pinContainer" />}>
            <Home />
            <About />
            <Projects />
            <Contact />
          </Timeline>
        </Scene>
      </Controller>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  overflow: hidden;

  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    /* background: blue; */
  }
`;
