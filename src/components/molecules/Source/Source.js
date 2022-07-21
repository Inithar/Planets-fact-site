import React from 'react';
import { SourceIcon, StyledLink, StyledParagraph, Wrapper } from './Source.style';

export const Source = ({ href, name }) => (
  <Wrapper>
    <StyledParagraph>Source :</StyledParagraph>
    <StyledLink href={href}>{name}</StyledLink>
    <SourceIcon />
  </Wrapper>
);
