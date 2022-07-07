import styled from "styled-components";
import { flex } from "./functions";
import {color_accent} from './colors';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  ${flex()};
  padding: 0;
`;

export const HalfSection = styled(Section)`
  width: 50%;
  padding: 1rem;
`;

export const SectionTitle = styled.h1`
  font-size: 5rem;
`;

export const PinkSpan = styled.span`
color: ${color_accent};
`