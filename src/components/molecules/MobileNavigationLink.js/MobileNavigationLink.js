import React from 'react';
import { Wrapper, ColorCircle, PlanetName, ArrowIcon, Container } from './MobileNavigationLink.styles';
import { NavLink } from 'react-router-dom';

export const MobileNavigationLink = ({ planet }) => (
  <Wrapper>
    <Container>
      <ColorCircle planet={planet} />
      <PlanetName>{planet}</PlanetName>
    </Container>
    <ArrowIcon />
  </Wrapper>
);
