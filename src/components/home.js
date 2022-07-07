import React from "react";
import styled from "styled-components";
import {
  color_subtle,
  color_accent,
  Section,
  HalfSection,
  flex,
} from "../styles";

function Home() {
  return (
    <HomeContainer>
      <HomeLeft></HomeLeft>
      <HomeRight>
        <h1>
          EMILY ABRA
          <br/>
          HART<span>.</span>
        </h1>
      </HomeRight>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled(Section)`
  ${flex("row")};
  padding: 0;
`;

const HomeLeft = styled(HalfSection)`
  background-color: ${color_accent};
`;

const HomeRight = styled(HalfSection)`
  background-color: ${color_subtle};
  text-align: center;
  h1 {
    font-size: 11rem;
    span {
        color: ${color_accent};
    }
  }
`;
