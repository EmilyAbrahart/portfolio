import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${normalize()};
* {
    box-sizing: border-box;
}
body {
    font-family: 'Roboto', sans-serif;
    color: '#1C1B20';
    background-color: '#F8F8F8';
}
`;
