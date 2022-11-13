import React from "react";
import styled from "styled-components";
import { Section } from "../styles";

function Home() {
  return (
    <HomeSection>
      <h1>EMILY ABRAHART</h1>
      <div>Web Developer | London, UK</div>
    </HomeSection>
  );
}

export default Home;

const HomeSection = styled(Section)`
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 5rem;
    color: ${(props) => props.theme.subtle};
  }
  div {
    font-size: 1.6rem;
    color: ${(props) => props.theme.muted};
  }
`;
