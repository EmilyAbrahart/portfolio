import React from "react";
import styled from "styled-components";
import { Section, HalfSection, SectionTitle, SectionContent } from "../styles";

function About() {
  return (
    <Section>
      <HalfSection>
        <SectionTitle>ABOUT</SectionTitle>
      </HalfSection>
      <HalfSection>
        <SectionContent>
          <AboutTagline>"I make internet things."</AboutTagline>
          <AboutTextContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
            amet rhoncus quam. Fusce interdum et odio vel blandit. Suspendisse
            hendrerit maximus pellentesque. Nullam venenatis ultrices bibendum.
            Suspendisse congue velit risus, at mattis nisl gravida ut. Vivamus
            accumsan, purus vitae ullamcorper rutrum, ex neque semper massa, at
            cursus nisi nunc eu sem.
            {/* add button for skills */}
          </AboutTextContainer>
        </SectionContent>
      </HalfSection>
    </Section>
  );
}

export default About;

const AboutTagline = styled.div`
  font-size: 4rem;
  line-height: normal;
  text-align: center;
  color: ${props => props.theme.muted};
`;

const AboutTextContainer = styled.div`
  width: 70%;
  margin-top: 2rem;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
`;
