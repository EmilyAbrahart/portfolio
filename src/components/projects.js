import React, { useState } from "react";
import styled from "styled-components";
import Project from "./project";
import {
  flex,
  Section,
  HalfSection,
  SectionTitle,
  SectionContent,
  Button,
} from "../styles";
import {CarouselIndicator, LeftArrow, RightArrow, ProjectsImg} from "../assets";
import { ProjectData } from "../data.js";

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
        <IndicatorContainer slide={slide}>
          <CarouselIndicator slideNumber={1} slide={slide} />
          <CarouselIndicator slideNumber={2} slide={slide} />
          <CarouselIndicator slideNumber={3} slide={slide} />
          <CarouselIndicator slideNumber={4} slide={slide} />
        </IndicatorContainer>
        <RightButton onClick={nextSlide} slide={slide}>
          <RightArrow />
        </RightButton>
      </ButtonContainer>

      <CarouselInner slide={slide}>
        <ProjectsSection>
          <HalfSection>
            <SectionContent>
            <ProjectsImg />
            </SectionContent>
          </HalfSection>
          <HalfSection>
              <SectionTitle>PROJECTS</SectionTitle>
              <ProjectsButton type="button" onClick={buttonClickHandler}>
                Explore
              </ProjectsButton>
          </HalfSection>
        </ProjectsSection>

        {ProjectData.map((project) => {
          return <Project project={project} key={project.id} slide={slide} />;
        })}
      </CarouselInner>
    </CarouselContainer>
  );
}

export default Projects;

const ProjectsSection = styled(Section)`
  height: 100%;
  min-width: 100%;
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
  transition: transform 0.5s ease-out;
  flex-wrap: nowrap;
`;

const ProjectsButton = styled(Button)`
  background-color: ${props => props.theme.accents.rose};
  color: ${props => props.theme.surface};

  &:active {
    background-color: ${props => props.theme.accents.love};
  }
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

const LeftButton = styled.button`
  z-index: 100;
  border: none;
  background-color: transparent;
  opacity: ${(props) => (props.slide === 0 ? "0" : "100%")};
  transition: opacity 0.5s ease;
`;
const RightButton = styled.button`
  z-index: 101;
  border: none;
  background-color: transparent;
  opacity: ${(props) =>
    props.slide === 0 || props.slide === 4 ? "0" : "100%"};
  transition: opacity 0.5s ease;
`;

const IndicatorContainer = styled.div`
  ${flex()};
  align-self: flex-end;
  z-index: 99;
  opacity: ${(props) => (props.slide === 0 ? "0" : "100%")};
  transition: opacity 0.5s ease;
`;
