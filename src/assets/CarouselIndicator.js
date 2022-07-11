import React from "react";
import styled from "styled-components";
import { colors } from "../styles";

function CarouselIndicator({ slideNumber, slide }) {
  return (
    <IndicatorSVG
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      slideNumber={slideNumber}
      slide={slide}
    >
      <circle
        cx="10.0"
        cy="10.0"
        r="9"
        fill="#F8F8F8"
        stroke="#FF5851"
        strokeWidth="2"
      />
    </IndicatorSVG>
  );
}

export default CarouselIndicator;

const IndicatorSVG = styled.svg`
  circle {
    fill: ${(props) =>
      props.slideNumber === props.slide ? colors.accent : colors.subtle};
    transition: fill 0.3s ease-in;
  }
  margin: 0 0.5rem;
`;
