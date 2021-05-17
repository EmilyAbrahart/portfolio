import React from "react";
import styled from "styled-components";
import { CardContainer, FlexFunc, color_accent, color_subtle } from "../styles";

const Home = () => {
  return (
    <HomeContainer>
      <HomeLeft>
          <div className='bold'>Full Stack Web Developer</div>
          <div>London, UK</div>
      </HomeLeft>
      <HomeRight>
        <h1>
          EMILY
          <br /> ABRA <br /> HART<span>.</span>
        </h1>
      </HomeRight>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled(CardContainer)`
  ${FlexFunc("row", "center", "center")}
`;

const HomeSection = styled.div`
  height: 100%;
  width: 50%;
  ${FlexFunc("column", "center", "center")}
  position: relative;
  letter-spacing: 3px;
`;

const HomeLeft = styled(HomeSection)`
  background-color: ${color_accent};
  color: ${color_subtle};
  padding-right: 2rem;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  padding-bottom: 8rem;
  font-size: 1.3rem;

  .bold {
      font-weight: bold;
  }
`;

const HomeRight = styled(HomeSection)`
  padding-left: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  h1 {
    font-weight: bold;
    font-size: 7rem;
    padding-top: 1rem;

    span {
      color: ${color_accent};
      font-size: 7rem;
    }
  }
`;
