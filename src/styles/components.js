import styled from "styled-components";
import { flex } from "./functions";
import { accent } from "./colors";

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
`;

export const SectionTitle = styled.h1`
  font-size: 5rem;
`;

export const PinkSpan = styled.span`
  color: ${accent};
`;

export const Button = styled.button`
  padding: 0.5rem 3rem;
  margin: 1rem;
  border: none;
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
