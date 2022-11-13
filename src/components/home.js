import React from "react";
import styled from "styled-components";
import { Section } from "../styles";
import { LogoLeaves } from "../assets";

function Home() {
  return (
    <HomeSection>
      <LogoLeaves mirrored />
      <div>
        <h1>EMILY ABRAHART</h1>
        <h3>Web Developer | London, UK</h3>
      </div>
      <LogoLeaves />
    </HomeSection>
  );
}

export default Home;

const HomeSection = styled(Section)`
  flex-direction: row;
  text-align: center;
  h1 {
    font-size: 5rem;
    color: ${(props) => props.theme.subtle};
  }
  h3 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.muted};
  }
`;
