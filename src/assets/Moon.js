import React from "react";
import styled from "styled-components";

export const Moon = ({isDarkTheme}) => {
  return (
    <MoonSVG
      width="202"
      height="202"
      viewBox="0 0 202 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      isDarkTheme={isDarkTheme}
    >
      <g filter="url(#filter0_d_256_211)">
        <circle cx="101" cy="97" r="97" />
      </g>
      <defs>
        <filter
          id="filter0_d_256_211"
          x="0"
          y="0"
          width="202"
          height="202"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_256_211"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_256_211"
            result="shape"
          />
        </filter>
      </defs>
    </MoonSVG>
  );
};

const MoonSVG = styled.svg`
position: absolute;
top: 5vh;
left: 5vw;
z-index: 40;
circle {
    fill: ${props => props.isDarkTheme ? props.theme.text : props.theme.accents.rose}
}
`;
