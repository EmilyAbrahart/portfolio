import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${normalize()};
* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.base};
}

h1, h3 {
    font-family: 'Pier Sans';
    font-weight: bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`;
