import React from "react";
import styled from "styled-components";
import {
  colors,
  Section,
  HalfSection,
  SectionTitle,
  PinkSpan,
  flex,
} from "../styles";

function About() {
  return (
    <AboutContainer>
      <AboutHalf>
        <SectionTitle>
          ABOUT<PinkSpan>.</PinkSpan>
        </SectionTitle>
      </AboutHalf>
      <AboutHalf>
        <AboutTagline>
          <PinkSpan>"</PinkSpan>I make internet things.<PinkSpan>"</PinkSpan>
        </AboutTagline>
        <AboutTextContainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
          amet rhoncus quam. Fusce interdum et odio vel blandit. Suspendisse
          hendrerit maximus pellentesque. Nullam venenatis ultrices bibendum.
          Suspendisse congue velit risus, at mattis nisl gravida ut. Vivamus
          accumsan, purus vitae ullamcorper rutrum, ex neque semper massa, at
          cursus nisi nunc eu sem.
          {/* add button for skills */}
        </AboutTextContainer>
      </AboutHalf>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled(Section)`
  background-color: ${colors.dark};
`;

const AboutHalf = styled(HalfSection)`
  background-color: ${colors.dark};
  color: ${colors.subtle};
  ${flex("column")};
`;

const AboutTagline = styled.div`
  color: ${colors.dark_accent};
  font-size: 4rem;
`;

const AboutTextContainer = styled.div`
  color: ${colors.subtle};
  width: 70%;
  margin-top: 2rem;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
`;
