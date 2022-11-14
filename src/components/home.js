import React from "react";
import styled from "styled-components";
import { Section } from "../styles";
import { LogoLeaves, Moon } from "../assets";
import Stars from "../assets/Stars.svg";

function Home({ isDarkTheme }) {
  return (
    <HomeSection>
      <Moon isDarkTheme={isDarkTheme} />
      <StarsContainer isDarkTheme={isDarkTheme} />
      <TitleContainer>
        <h1>EMILY ABRAHART</h1>
        <h3>Web Developer | London, UK</h3>
      </TitleContainer>
    </HomeSection>
  );
}

export default Home;

const HomeSection = styled(Section)`
  background-image: linear-gradient(
    ${(props) => props.theme.base_dark},
    ${(props) => props.theme.base_dark_transparent}
  );
  text-align: center;
  position: relative;
  h1 {
    font-size: 5rem;
    color: ${(props) => props.theme.subtle};
  }
  h3 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.muted};
  }
`;

const TitleContainer = styled.div`
  z-index: 40;
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${Stars});
  background-position: center;
  background-repeat: repeat;
  z-index: 30;
  opacity: ${(props) => (props.isDarkTheme ? "100%" : "0%")};
`;
