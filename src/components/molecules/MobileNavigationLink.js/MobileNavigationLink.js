import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, ColorCircle, PlanetName, ArrowIcon, Container } from './MobileNavigationLink.styles';
import { NavigationState } from 'providers/NavigationProvider';

export const MobileNavigationLink = ({ planet }) => {
  const { handleToggleNavigation } = useContext(NavigationState);

  return (
    <NavLink to={planet}>
      <Wrapper onClick={handleToggleNavigation}>
        <Container>
          <ColorCircle planet={planet} />
          <PlanetName>{planet}</PlanetName>
        </Container>
        <ArrowIcon />
      </Wrapper>
    </NavLink>
  );
};
