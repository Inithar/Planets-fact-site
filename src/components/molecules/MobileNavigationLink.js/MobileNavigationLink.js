import React from 'react';
import { Wrapper, ColorCircle, PlanetName, ArrowIcon, Container } from './MobileNavigationLink.styles';

export const MobileNavigationLink = ({ planet }) => (
  <Wrapper>
    <Container>
      <ColorCircle planet={planet} />
      <PlanetName>{planet}</PlanetName>
    </Container>
    <ArrowIcon />
  </Wrapper>
);
