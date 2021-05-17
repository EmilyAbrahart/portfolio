import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${normalize()};
* {
    box-sizing: border-box;
}
body {
    font-family: 'Roboto', sans-serif;
    background-color: '#F8F8F8';
}
`;
