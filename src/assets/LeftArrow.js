import React from "react";
import styled from "styled-components";

export const LeftArrow = () => {
  return (
    <LeftArrowSVG
      width="33"
      height="36"
      viewBox="0 0 33 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 22.3301C-0.833332 20.4056 -0.833334 15.5944 2.5 13.6699L25 0.679493C28.3333 -1.24501 32.5 1.16062 32.5 5.00962L32.5 30.9904C32.5 34.8394 28.3333 37.245 25 35.3205L2.5 22.3301Z"
      />
    </LeftArrowSVG>
  );
}


const LeftArrowSVG = styled.svg`
    fill: ${props => props.theme.muted}
`;