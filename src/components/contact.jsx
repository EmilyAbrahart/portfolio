import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { color_dark, color_subtle, CardContainer } from "../styles";

const Contact = () => {
    return (
        <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
            <ContactContainer>
                <h2>CONTACT</h2>
            </ContactContainer>
        </Tween>
    )
};

export default Contact;

const ContactContainer = styled(CardContainer)`
  background-color: ${color_subtle};
  color: ${color_dark};
`;