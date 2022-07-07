import React from "react";
import styled from "styled-components";
import {
  color_dark,
  color_dark_accent,
  color_subtle,
  color_accent,
  Section,
  HalfSection,
  SectionTitle,
  PinkSpan,
  flex,
} from "../styles";

function Contact() {
  return (
    <ContactContainer>
      <ContactHalf>
        <SectionTitle>
          CONTACT ME<PinkSpan>.</PinkSpan>
        </SectionTitle>
      </ContactHalf>
      <ContactHalf></ContactHalf>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled(Section)`
  background-color: ${color_dark};
`;

const ContactHalf = styled(HalfSection)`
  background-color: ${color_dark};
  color: ${color_subtle};
  ${flex("column")};
`;
