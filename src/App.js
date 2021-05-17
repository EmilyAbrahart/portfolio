import React, { useState } from "react";
import styled from "styled-components";
import { FlexFunc, color_subtle, color_dark, CardContainer } from "./styles";
import { Arrow } from "./assets/icons";
import Home from './components/home';

function App() {
  const [incrementing, setIncrementing] = useState(true);
  let [counter, setNextCounter] = useState(1);

  const stepCounter = () => {
    if (counter === 2) {
      setIncrementing(true);
    } else if (counter === 3) {
      setIncrementing(false);
    }
    if (incrementing) {
      setNextCounter((counter += 1));
    } else setNextCounter((counter -= 1));
    console.log(counter);
  };

  const clickHandler = () => {
    stepCounter();
  };
  return (
    <AppContainer>
      <SiteContent>
        <Home />
        <NavigationButton
          counter={counter}
          incrementing={incrementing}
          onClick={clickHandler}
        >
          <Arrow />
        </NavigationButton>
      </SiteContent>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  ${FlexFunc("column", "center", "center")};
  padding: 2rem;
  overflow: hidden;
`;

const SiteContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const NavigationButton = styled.button`
  border: none;
  background: none;
  color: ${(props) =>
    props.counter === 2 || props.counter === 3 ? color_subtle : color_dark};
  transform: rotate(0deg);
  transition: all 0.5s ease-out;
  transform: ${(props) =>
    (props.counter === 2 || props.counter === 3) && props.incrementing
      ? `rotate(90deg)`
      : props.counter === 4 || (props.counter === 3 && !props.incrementing)
      ? `rotate(270deg)`
      : props.counter === 2 || !props.incrementing
      ? `rotate(180deg)`
      : ""};
  position: absolute;
  right: 2rem;
  bottom: 50%;
  cursor: pointer;
`;
