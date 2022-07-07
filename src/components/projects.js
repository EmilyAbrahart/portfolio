import React from "react";
import styled from "styled-components";
import {
  color_dark,
  color_subtle,
  color_accent,
  flex,
  Section,
  HalfSection,
  SectionTitle,
  PinkSpan,
} from "../styles";

function Projects() {
  return (
    <Section>
      <HalfSection></HalfSection>
      <HalfSection>
        <SectionTitle>
          PROJECTS<PinkSpan>.</PinkSpan>
        </SectionTitle>
      </HalfSection>
    </Section>
  );
}

export default Projects;
