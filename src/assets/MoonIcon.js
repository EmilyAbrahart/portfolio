import React from "react";
import styled from "styled-components";

export const MoonIcon = ({isDarkTheme}) => {
  return (
    <MoonIconSVG
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.6608 11.3619C2.09299 11.4524 2.54096 11.5 3.00005 11.5C6.5899 11.5 9.50005 8.58984 9.50005 4.99999C9.50005 3.25479 8.81228 1.67024 7.69298 0.502594C11.4698 0.604809 14.5 3.69852 14.5 7.49999C14.5 11.366 11.366 14.5 7.50002 14.5C5.06141 14.5 2.91404 13.253 1.6608 11.3619Z"
        stroke-linejoin="round"
      />
    </MoonIconSVG>
  );
};

const MoonIconSVG = styled.svg`
  stroke: ${(props) => props.theme.subtle};
  margin-right: 15px;
`;