import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { color_dark, color_subtle } from "./colors";

export const GlobalStyle = createGlobalStyle`
${normalize()};
* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: 'Roboto', sans-serif;
    color: ${color_dark};
    background-color: ${color_subtle};
}
`;
