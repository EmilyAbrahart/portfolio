import React from "react";
import styled from "styled-components";

export const CarouselIndicator = ({ slideNumber, slide }) => {
  return (
    <IndicatorSVG
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      slideNumber={slideNumber}
      slide={slide}
    >
      <circle cx="10.0" cy="10.0" r="9" strokeWidth="2" />
    </IndicatorSVG>
  );
};


const IndicatorSVG = styled.svg`
  circle {
    fill: ${(props) =>
      props.slideNumber === props.slide ? props.theme.muted : props.theme.base};
    transition: fill 0.3s ease-in;
    stroke: ${(props) => props.theme.muted};
  }
  margin: 0 0.5rem;
`;
