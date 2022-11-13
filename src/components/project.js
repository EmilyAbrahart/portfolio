import React from "react";
import styled from "styled-components";
import {
  flex,
  HalfSection,
  SectionTitle,
  ProjectSection
} from "../styles";

function Project({ project, slide }) {
  return (
    <ProjectSection>
      <HalfSection></HalfSection>
      <HalfSection>
        <ProjectTitle>
          {project.name.toUpperCase()}
        </ProjectTitle>

        <ProjectInfo slide={slide} id={project.id}>
          <LinksContainer>
            <a href={project.ghUrl}>Github</a>
            <a href={project.liveUrl}>Live</a>
          </LinksContainer>
          <DescriptionContainer>{project.description}</DescriptionContainer>
          <CategoryContainer>
            {project.categories.map((category) => {
              return <Category key={category}>{category}</Category>;
            })}
          </CategoryContainer>
        </ProjectInfo>
      </HalfSection>
    </ProjectSection>
  );
}

export default Project;

const ProjectTitle = styled(SectionTitle)`
  font-size: 3rem;
`;

const ProjectInfo = styled.div`
  ${flex("column", "space-around")};
  flex-wrap: nowrap;
  height: 50%;
  padding: 4rem;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
  max-height: ${(props) => (props.slide === props.id ? "50%" : "0%")};
  opacity: ${(props) => (props.slide === props.id ? "100%" : "0")};
  transition: max-height 1s ease-in-out, opacity 1.2s ease-in;
  overflow: hidden;
`;

const CategoryContainer = styled.div`
  width: 100%;
  ${flex("row")};
`;

const Category = styled.div`
  border: 2px solid ${props => props.theme.text};
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  margin-right: 0.5rem;
`;

const LinksContainer = styled.div`
  ${flex()};
  a {
    margin: 1rem;
    color: ${props => props.theme.text};
    font-size: 1.3rem;

    &:focus,
    &:hover,
    &:active {
      color: ${props => props.theme.subtle};
    }
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
