import React from "react";
import styled from "styled-components";
import {
  color_subtle,
  color_accent,
  Section,
  HalfSection,
  PinkSpan,
} from "../styles";

function Home() {
  return (
    <Section>
      <HomeLeft></HomeLeft>
      <HomeRight>
        <h1>
          EMILY ABRA
          <br />
          HART<PinkSpan>.</PinkSpan>
        </h1>
      </HomeRight>
    </Section>
  );
}

export default Home;

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
