import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { color_accent, color_subtle, CardContainer } from "../styles";

const About = () => {
  return (
    <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
      <AboutContainer>
        <h2>ABOUT ME</h2>
      </AboutContainer>
    </Tween>
  );
};

export default About;

const AboutContainer = styled(CardContainer)`
  background-color: ${color_accent};
  color: ${color_subtle};
`;
