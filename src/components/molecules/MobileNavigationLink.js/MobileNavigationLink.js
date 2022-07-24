import React, { useContext } from 'react';
import { Wrapper, ColorCircle, PlanetName, ArrowIcon, Container, StyledLink } from './MobileNavigationLink.styles';
import { NavigationState } from 'providers/NavigationProvider';

export const MobileNavigationLink = ({ planet }) => {
  const { handleToggleNavigation } = useContext(NavigationState);

  return (
    <StyledLink to={planet}>
      <Wrapper onClick={handleToggleNavigation}>
        <Container>
          <ColorCircle planet={planet} />
          <PlanetName>{planet}</PlanetName>
        </Container>
        <ArrowIcon />
      </Wrapper>
    </StyledLink>
  );
};
