import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { dark} from "./colors";

export const GlobalStyle = createGlobalStyle`
${normalize()};
* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: 'Roboto', sans-serif;
    color: ${dark};
    background-color: ${dark};
}
`;
