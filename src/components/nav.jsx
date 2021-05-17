import React from "react";
import styled from "styled-components";
import { FlexFunc, color_subtle } from "../styles";
import { Github, LinkedIn } from "../assets/icons";

const Nav = () => {
  return (
    <NavContainer>
      <div>EMILY ABRAHART</div>
        <Github />
        <LinkedIn />
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  ${FlexFunc("row", "flex-start", "baseline")}
  z-index: 1000;
  position: absolute;
  top: 2px;
  left: 2px;
  background-color: none;
  letter-spacing: 2px;
  font-weight: bold;
  color: ${color_subtle};
  div {
      padding: 5px;
  }
`;
