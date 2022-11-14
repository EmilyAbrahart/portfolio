import React from "react";
import styled from "styled-components";

export const SunIcon = ({ isDarkTheme }) => {
  return (
    <SunIconSVG
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 1.49933V0.5M7.5 14.4908V13.4915M13.5 7.49542H14.5M1.5 7.49542H0.5M2.5 2.49866L1.5 1.49933M13.5 1.49933L12.5 2.49866M2.5 12.4921L1.5 13.4915M13.5 13.4915L12.5 12.4921M10.5 7.49542C10.5 9.15134 9.157 10.4935 7.5 10.4935C5.843 10.4935 4.5 9.15134 4.5 7.49542C4.5 5.8395 5.843 4.49738 7.5 4.49738C9.157 4.49738 10.5 5.8395 10.5 7.49542Z"
        stroke-linecap="square"
      />
    </SunIconSVG>
  );
};

const SunIconSVG = styled.svg`
  stroke: ${(props) => props.theme.subtle};
  margin-left: 15px;
`;