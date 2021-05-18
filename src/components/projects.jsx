import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { color_dark, color_subtle, CardContainer } from "../styles";

const Projects = () => {
    return (
        <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
            <ProjectsContainer>
                <h2>PROJECTS</h2>
            </ProjectsContainer>
        </Tween>
    )
}

export default Projects;

const ProjectsContainer = styled(CardContainer)`
  background-color: ${color_dark};
  color: ${color_subtle};
`;