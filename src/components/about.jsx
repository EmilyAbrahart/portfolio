import React from "react";
import styled from "styled-components";
import { color_accent, color_subtle, CardContainer } from "../styles";

const About = () => {
    return (
        <AboutContainer>
            <h2>ABOUT ME</h2>
        </AboutContainer>
    )
}

export default About;

const AboutContainer = styled(CardContainer)`
background-color: ${color_accent};
color: ${color_subtle};
`