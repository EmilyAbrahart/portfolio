import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ProjectImg } from "../assets/projects.svg";
import {
  colors,
  flex,
  Section,
  HalfSection,
  SectionTitle,
  PinkSpan,
  Button,
} from "../styles";
import { ReactComponent as LeftArrow } from "../assets/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../assets/RightArrow.svg";

function Projects() {
  const [slide, setSlide] = useState(0);

  const buttonClickHandler = (e) => {
    setSlide(1);
  };

  const previousSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  const nextSlide = () => {
    if (slide < 4) {
      setSlide(slide + 1);
    }
  };

  return (
    <CarouselContainer>
      <ButtonContainer>
        <LeftButton onClick={previousSlide} slide={slide}>
          <LeftArrow />
        </LeftButton>
        <RightButton onClick={nextSlide} slide={slide}>
          <RightArrow />
        </RightButton>
      </ButtonContainer>

      <CarouselInner slide={slide}>
        <ProjectsSection>
          <ProjectsHalfSection>
            <ProjectImg />
          </ProjectsHalfSection>
          <ProjectsHalfSection>
            <SectionTitle>
              PROJECTS<PinkSpan>.</PinkSpan>
            </SectionTitle>
            <ProjectsButton type="button" onClick={buttonClickHandler}>
              Explore
            </ProjectsButton>
          </ProjectsHalfSection>
        </ProjectsSection>

        <ProjectsSection>
          <SectionTitle>Title 1</SectionTitle>
        </ProjectsSection>

        <ProjectsSection>
          <SectionTitle>Title 2</SectionTitle>
        </ProjectsSection>
        <ProjectsSection>
          <SectionTitle>Title 3</SectionTitle>
        </ProjectsSection>
        <ProjectsSection>
          <SectionTitle>Title 4</SectionTitle>
        </ProjectsSection>
      </CarouselInner>
    </CarouselContainer>
  );
}

export default Projects;

const ProjectsSection = styled(Section)`
  background-color: ${colors.subtle};
  min-width: 100%;
  height: 100%;
`;

const ProjectsHalfSection = styled(HalfSection)`
  background-color: ${colors.subtle};
`;

const CarouselContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  ${flex("row", "start", "center")};
  min-width: 100vw;
  height: 100vh;
  transform: ${(props) => `translateX(-${props.slide * 100}vw)`};
  animation: transform 1s ease;
  flex-wrap: nowrap;
`;

const ProjectsButton = styled(Button)`
  background-color: ${colors.dark};
  color: ${colors.subtle};

  &:active {
    border: 2px solid ${colors.dark};
    background-color: ${colors.subtle};
    color: ${colors.dark};
  }
`;

const LeftButton = styled.button`
  z-index: 100;
  border: none;
  background-color: transparent;
  display: ${props => props.slide === 0 ? 'none' : 'block'};
`;
const RightButton = styled.button`
  z-index: 101;
  border: none;
  background-color: transparent;
  display: ${props => props.slide === 0 || props.slide === 4 ? 'none' : 'block'};
`;

const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid red;
  ${flex("row", "space-between", "center")};
  padding: 2rem;
`;
