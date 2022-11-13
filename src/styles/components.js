import styled from "styled-components";
import { flex } from "./functions";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  ${flex()};
  padding: 0;
`;

export const HalfSection = styled(Section)`
  ${flex("column")};
  width: 50%;
  padding: 1rem;
  overflow: hidden;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.base};
`;

export const SectionTitle = styled.h1`
  font-size: 5rem;
  color: ${(props) => props.theme.subtle};
`;

export const SectionContent = styled.div`
  ${flex("column")};
  background-color: ${(props) => props.theme.overlay};
  color: ${(props) => props.theme.text};
  border-radius: 20px;
  min-height: 70%;
  width: 85%;
  letter-spacing: 0.2rem;
  line-height: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProjectSection = styled(Section)`
  min-width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  padding: 0.5rem 3rem;
  margin: 1rem;
  border: none;
  border-radius: 4px;
  letter-spacing: 0.2rem;
  line-height: 1.5rem;
  transition: background-color 0.2s ease;
  transition: color 0.2s ease;

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:active {
    outline: none;
  }
`;
