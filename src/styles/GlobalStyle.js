import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${normalize()};
body {
    font-family: 'Roboto', sans-serif;
}
`;
