import React from "react";
import styled from "styled-components";
import { colors, Section, HalfSection, PinkSpan } from "../styles";

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
  background-color: ${colors.accent};
`;

const HomeRight = styled(HalfSection)`
  background-color: ${colors.subtle};
  text-align: center;
  h1 {
    font-size: 11rem;
    span {
      color: ${colors.accent};
    }
  }
`;
