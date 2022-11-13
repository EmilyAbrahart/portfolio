import React from "react";
import styled from "styled-components";

export const LogoLeaves = (props) => {
  return (
    <LeavesSVG
      width="225"
      height="223"
      viewBox="0 0 225 223"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      mirrored={props.mirrored}
    >
      <g>
        <g className="blue" opacity="0.8" filter="url(#filter1_d_218_157)">
          <path d="M135.927 35.8808L91.6425 56.2769L73.9189 68.2819L71.2989 71.8377L86.0457 102.169L68.5766 75.5324L62.2172 84.1634L54.81 123.988L59.9701 162.363L95.7746 153.475L125.15 136.296C137.535 124.174 143.179 111.46 144.443 96.3699L122.191 85.4479L144.656 92.8818C145.279 77.1202 141.535 58.7491 135.927 35.8808Z" />
          <path d="M60.0757 162.338L95.7755 153.476L125.15 136.297C137.535 124.176 143.179 111.462 144.443 96.3719L122.191 85.4501L144.656 92.8838C145.233 78.2776 142.061 61.4306 137.129 40.8402L60.0757 162.338Z" />
        </g>
        <g className="pink" opacity="0.8">
          <path d="M172.004 128.573L133.668 118.169L116.307 116.142L112.806 116.834L106.077 140.954L109.167 117.552L100.668 119.231L75.1333 137.751L58.2001 161.637L85.2028 174.278L112.549 179.149C126.64 178.488 136.838 174.186 145.551 166.411L137.405 149.404L147.516 164.575C156.181 156.111 163.493 144.051 172.004 128.573Z" />
          <g filter="url(#filter2_d_218_157)">
            <path d="M58.2773 161.672L85.2019 174.277L112.548 179.148C126.64 178.487 136.838 174.185 145.551 166.41L137.405 149.403L147.516 164.574C155.546 156.73 162.415 145.798 170.151 131.919L58.2773 161.672Z" />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter1_d_218_157"
          x="50.81"
          y="35.8807"
          width="97.9139"
          height="134.482"
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
            result="effect1_dropShadow_218_157"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_218_157"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_218_157"
          x="54.2773"
          y="131.919"
          width="119.874"
          height="55.2292"
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
            result="effect1_dropShadow_218_157"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_218_157"
            result="shape"
          />
        </filter>
      </defs>
    </LeavesSVG>
  );
};

const LeavesSVG = styled.svg`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  g.pink path {
    fill: ${(props) => props.theme.accents.love};
  }

  g.blue path {
    fill: ${(props) => props.theme.accents.pine};
  }

  transform: ${(props) =>
    props.mirrored ? "matrix(-1, 0, 0, 1, 0, 0)" : "none"};
`;
