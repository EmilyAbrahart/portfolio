import styled from "styled-components";

// VARIABLES
// Colors
export const color_light = "#ffffff";
export const color_dark = "#1C1B20";
export const color_accent = "#FF5851";
export const color_subtle = "#F8F8F8";
export const color_dark_fade = "rgba(28,27,32,0.9)";
export const color_subtle_fade = "rgba(248,248,248, 0.6)";

//Media Queries
export const mobile = "(max-device-width : 480px)";
export const tablet = "(max-device-width : 1024px)";

// FUNCTIONS
// Flexbox
export const FlexFunc = (direction, justifyC, alignI) => {
  return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};

export const CardContainer = styled.section`
  height: 100%;
  width: 100%;
  ${FlexFunc("column", "center", "center")}
  position: absolute;

  h2 {
    letter-spacing: 0.5rem;
  }
`;

