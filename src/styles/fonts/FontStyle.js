import { createGlobalStyle } from "styled-components";
import PierSans from "./PierSansBold.otf";

export const FontStyle = createGlobalStyle`
@font-face {
    font-family: 'Pier Sans';
    font-weight: bold;
    font-style: normal;
    src: local('Pier Sans'), url(${PierSans}) format('opentype');
}
`;
